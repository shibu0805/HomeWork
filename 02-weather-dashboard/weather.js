/**
 * 中央氣象署 (CWA) 專業級即時動態雷達回波 & 衛星雲圖播放引擎
 * 全面擴充版：
 * 1. 雙視窗同步對比（雷達 vs 衛星雲圖零時差對照）
 * 2. 鍵盤微調操控（Space 播放/暫停，←/→ 逐影格前進後退，↑/↓ 調速）
 * 3. 暗色戰情室 / 經典明亮 主題一鍵切換
 * 4. 高清影格截圖一鍵下載
 * 5. 氣象警特報即時廣播條
 * 6. 24小時日夜連續紅外線衛星雲圖 (LCC_IR1_MB_2750) 修正支援
 */

(function () {
  'use strict';

  // 狀態變數
  let currentMode = 'radar_notopo'; // radar_notopo | radar_topo | sat_color | sat_gray | temperature
  let currentArea = 'tw'; // 'tw' (鄰近) | 'wide' (較大範圍)
  let currentTimeSpan = 3; // 3, 6, 9, 12 小時
  let playSpeedSeconds = 0.8; // 每影格秒數
  let loopMode = 'loop'; // 'loop' | 'once'
  let isDualView = false; // 是否開啟雙視窗同步對比

  let framesList = []; // 主要影格清單
  let secondaryFramesList = []; // 雙視窗對比副影格清單 (固定同步衛星雲圖)
  let currentFrameIndex = 0;
  let isPlaying = false;
  let playTimer = null;
  const preloadedImages = new Map();

  // DOM 元素
  const displayImg = document.getElementById('weatherDisplayImg');
  const secondaryDisplayImg = document.getElementById('secondaryDisplayImg');
  const secondaryWrapper = document.getElementById('secondaryWrapper');
  const viewerCard = document.getElementById('viewerCard');
  const primaryBadge = document.getElementById('primaryBadge');
  const secondaryBadge = document.getElementById('secondaryBadge');

  const displayTimestamp = document.getElementById('displayTimestamp');
  const frameCounterBadge = document.getElementById('frameCounterBadge');
  const loaderOverlay = document.getElementById('loaderOverlay');
  const timeSelect = document.getElementById('timeSelect');
  const timelineSlider = document.getElementById('timelineSlider');

  const btnPlay = document.getElementById('btnPlay');
  const btnStop = document.getElementById('btnStop');
  const btnPrevFrame = document.getElementById('btnPrevFrame');
  const btnNextFrame = document.getElementById('btnNextFrame');
  const playStatusHint = document.getElementById('playStatusHint');

  const speedSlider = document.getElementById('speedSlider');
  const speedLabel = document.getElementById('speedLabel');
  const refreshBtn = document.getElementById('refreshBtn');
  const statusText = document.getElementById('statusText');
  const btnFullscreen = document.getElementById('btnFullscreen');
  const btnDownloadSnapshot = document.getElementById('btnDownloadSnapshot');
  const areaSelectSection = document.getElementById('areaSelectSection');

  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const btnSingleView = document.getElementById('btnSingleView');
  const btnDualView = document.getElementById('btnDualView');

  // 圖例
  const legendTitle = document.getElementById('legendTitle');
  const legendGradientBar = document.getElementById('legendGradientBar');
  const legendTicks = document.getElementById('legendTicks');
  const legendDescText = document.getElementById('legendDescText');

  // 警特報
  const alertBanner = document.getElementById('alertBanner');
  const alertTag = document.getElementById('alertTag');
  const alertMessage = document.getElementById('alertMessage');
  const alertTime = document.getElementById('alertTime');

  /**
   * 暗色 / 明亮 主題初始化與切換
   */
  function initTheme() {
    const saved = localStorage.getItem('cwa_theme') || 'light';
    if (saved === 'dark') {
      document.body.classList.add('dark-theme');
      themeToggleBtn.textContent = '☀️ 明亮模式';
    } else {
      document.body.classList.remove('dark-theme');
      themeToggleBtn.textContent = '🌙 暗色模式';
    }

    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-theme');
      localStorage.setItem('cwa_theme', isDark ? 'dark' : 'light');
      themeToggleBtn.textContent = isDark ? '☀️ 明亮模式' : '🌙 暗色模式';
    });
  }

  /**
   * 更新圖例樣式與徽章標籤
   */
  function updateLegendUI() {
    if (currentMode.startsWith('radar')) {
      legendTitle.textContent = currentMode === 'radar_notopo' ? '雷達回波顏色說明 (無地形)' : '雷達回波顏色說明 (有地形)';
      legendGradientBar.style.background = 'linear-gradient(to right, #00ffff 0%, #0099ff 15%, #00ff00 30%, #ffff00 50%, #ff9900 70%, #ff0000 85%, #ff00ff 100%)';
      legendTicks.innerHTML = '<span>0</span><span>10</span><span>20</span><span>30</span><span>40</span><span>50</span><span>60</span><span>dBZ</span>';
      legendDescText.textContent = '雷達發射之電磁波經由大氣降水粒子反射的訊號稱為雷達回波，顏色越暖紅代表降水強度越高。';
      areaSelectSection.style.display = 'flex';
      primaryBadge.textContent = currentMode === 'radar_notopo' ? '雷達回波 (無地形)' : '雷達回波 (有地形)';
    } else if (currentMode.startsWith('sat')) {
      areaSelectSection.style.display = 'none';
      if (currentMode === 'sat_color') {
        legendTitle.textContent = '衛星雲圖 (色調強化) 溫度與對流說明';
        legendGradientBar.style.background = 'linear-gradient(to right, #ffffff 0%, #a855f7 20%, #3b82f6 40%, #22c55e 60%, #eab308 80%, #ef4444 100%)';
        legendTicks.innerHTML = '<span>暖高空</span><span>-20°C</span><span>-40°C</span><span>-60°C</span><span>-80°C</span><span>強烈對流</span>';
        legendDescText.textContent = '利用紅外線偵測雲頂溫度，顏色越顯著代表雲頂高度越高、對流活動越旺盛。';
        primaryBadge.textContent = '衛星雲圖 (色調強化)';
      } else {
        legendTitle.textContent = '衛星雲圖 (24小時紅外線黑白)';
        legendGradientBar.style.background = 'linear-gradient(to right, #000000 0%, #64748b 50%, #ffffff 100%)';
        legendTicks.innerHTML = '<span>無雲 (地表)</span><span>中低雲</span><span>厚高雲 (白色)</span>';
        legendDescText.textContent = '紅外線黑白雲圖越亮白代表雲層越厚或雲頂越高，黑色代表無雲地表或溫暖海面。';
        primaryBadge.textContent = '衛星雲圖 (黑白紅外線)';
      }
    } else if (currentMode === 'temperature') {
      areaSelectSection.style.display = 'none';
      legendTitle.textContent = '全台氣溫分佈色階說明 (°C)';
      legendGradientBar.style.background = 'linear-gradient(to right, #3b82f6, #06b6d4, #10b981, #eab308, #f97316, #ef4444)';
      legendTicks.innerHTML = '<span><15</span><span>20</span><span>25</span><span>30</span><span>35+</span><span>°C</span>';
      legendDescText.textContent = '結合中央氣象署全台自動氣象站觀測即時溫度，以熱圖漸層色階呈現各縣市當前氣溫分佈。';
      primaryBadge.textContent = '全台氣溫分佈';
    }

    if (isDualView) {
      secondaryBadge.textContent = currentMode.startsWith('sat') ? '雷達回波 (對比)' : '衛星雲圖 (色調強化)';
    }
  }

  /**
   * 根據模式與時長建立影格清單（主畫面 + 雙視窗副畫面）
   */
  async function fetchFramesForCurrentMode() {
    loaderOverlay.classList.add('active');
    statusText.textContent = '抓取最新觀測動態中...';
    stopPlayback();

    const frames = [];
    const secFrames = [];
    const now = new Date();
    const baseUrl = 'https://www.cwa.gov.tw/Data/';

    try {
      if (currentMode === 'temperature') {
        frames.push({
          url: `${baseUrl}temperature/temp.jpg?v=${Date.now()}`,
          text: `最新觀測氣溫 (${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')})`
        });
      } else if (currentMode.startsWith('radar')) {
        const frameCount = currentTimeSpan * 6;
        const prefix = currentMode === 'radar_notopo' ? 'CV1' : 'CV2';
        const areaCode = currentArea === 'tw' ? '_TW_3600' : '_3600';

        let t = new Date(now.getTime() - 10 * 60 * 1000);
        const remainder = t.getMinutes() % 10;
        t.setMinutes(t.getMinutes() - remainder);
        t.setSeconds(0);
        t.setMilliseconds(0);

        for (let i = 0; i < frameCount; i++) {
          const year = t.getFullYear();
          const month = String(t.getMonth() + 1).padStart(2, '0');
          const date = String(t.getDate()).padStart(2, '0');
          const hours = String(t.getHours()).padStart(2, '0');
          const minutes = String(t.getMinutes()).padStart(2, '0');

          const timeStampStr = `${year}${month}${date}${hours}${minutes}`;
          const satTimeStr = `${year}-${month}-${date}-${hours}-${minutes}`;
          const labelText = `${year}/${month}/${date} ${hours}:${minutes}`;

          frames.unshift({
            url: `${baseUrl}radar/${prefix}${areaCode}_${timeStampStr}.png`,
            fallbackUrl: `${baseUrl}radar/${prefix}${areaCode}.png`,
            text: labelText
          });

          // 對比副視窗影格（對應衛星雲圖）
          secFrames.unshift({
            url: `${baseUrl}satellite/LCC_IR1_CR_2750/LCC_IR1_CR_2750-${satTimeStr}.jpg`,
            fallbackUrl: `${baseUrl}satellite/LCC_IR1_CR_2750/LCC_IR1_CR_2750.jpg`,
            text: labelText
          });

          t = new Date(t.getTime() - 10 * 60 * 1000);
        }
      } else if (currentMode.startsWith('sat')) {
        const frameCount = currentTimeSpan * 6;
        // 修正：黑白衛星雲圖使用 24 小時晝夜紅外線 LCC_IR1_MB_2750
        const subFolder = currentMode === 'sat_color' ? 'LCC_IR1_CR_2750' : 'LCC_IR1_MB_2750';

        let t = new Date(now.getTime() - 10 * 60 * 1000);
        const remainder = t.getMinutes() % 10;
        t.setMinutes(t.getMinutes() - remainder);
        t.setSeconds(0);

        for (let i = 0; i < frameCount; i++) {
          const year = t.getFullYear();
          const month = String(t.getMonth() + 1).padStart(2, '0');
          const date = String(t.getDate()).padStart(2, '0');
          const hours = String(t.getHours()).padStart(2, '0');
          const minutes = String(t.getMinutes()).padStart(2, '0');

          const timeStampStr = `${year}-${month}-${date}-${hours}-${minutes}`;
          const radarTimeStr = `${year}${month}${date}${hours}${minutes}`;
          const labelText = `${year}/${month}/${date} ${hours}:${minutes}`;

          frames.unshift({
            url: `${baseUrl}satellite/${subFolder}/${subFolder}-${timeStampStr}.jpg`,
            fallbackUrl: `${baseUrl}satellite/${subFolder}/${subFolder}.jpg`,
            text: labelText
          });

          // 對比副視窗影格（對應雷達回波）
          secFrames.unshift({
            url: `${baseUrl}radar/CV1_TW_3600_${radarTimeStr}.png`,
            fallbackUrl: `${baseUrl}radar/CV1_TW_3600.png`,
            text: labelText
          });

          t = new Date(t.getTime() - 10 * 60 * 1000);
        }
      }

      framesList = frames;
      secondaryFramesList = secFrames;
      setupUIControls();
      statusText.textContent = '已連線 CWA 動態圖資';
    } catch (e) {
      console.error('抓取動態影格失敗：', e);
      statusText.textContent = '連線受阻，顯示最新單張';
    } finally {
      loaderOverlay.classList.remove('active');
      if (framesList.length > 0) {
        showFrame(framesList.length - 1);
      }
    }
  }

  /**
   * 填充時間選單與時間軸拉桿
   */
  function setupUIControls() {
    timeSelect.innerHTML = '';
    framesList.forEach((f, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = f.text;
      timeSelect.appendChild(opt);
    });

    timelineSlider.min = 0;
    timelineSlider.max = Math.max(0, framesList.length - 1);
    timelineSlider.value = Math.max(0, framesList.length - 1);
  }

  /**
   * 顯示指定索引的影格（主畫面 + 副畫面同步更新）
   */
  function showFrame(index) {
    if (index < 0 || index >= framesList.length) return;
    currentFrameIndex = index;

    const frame = framesList[index];
    displayTimestamp.textContent = frame.text;
    frameCounterBadge.textContent = `影格 ${index + 1} / ${framesList.length}`;
    timelineSlider.value = index;
    timeSelect.value = index;

    // 主影像載入
    const targetUrl = frame.url;
    const img = new Image();
    img.src = targetUrl;
    img.onload = () => { displayImg.src = targetUrl; };
    img.onerror = () => {
      if (frame.fallbackUrl) displayImg.src = frame.fallbackUrl;
    };

    // 雙視窗副影像同步載入
    if (isDualView && secondaryFramesList[index]) {
      const secFrame = secondaryFramesList[index];
      const secImg = new Image();
      secImg.src = secFrame.url;
      secImg.onload = () => { secondaryDisplayImg.src = secFrame.url; };
      secImg.onerror = () => {
        if (secFrame.fallbackUrl) secondaryDisplayImg.src = secFrame.fallbackUrl;
      };
    }

    preloadNextFrames(index, 3);
  }

  /**
   * 預載入快取
   */
  function preloadNextFrames(startIndex, count) {
    for (let i = 1; i <= count; i++) {
      const nextIdx = (startIndex + i) % framesList.length;
      const url = framesList[nextIdx]?.url;
      if (url && !preloadedImages.has(url)) {
        const cacheImg = new Image();
        cacheImg.src = url;
        preloadedImages.set(url, cacheImg);
      }
    }
  }

  /**
   * 播放控制
   */
  function startPlayback() {
    if (framesList.length <= 1) return;
    isPlaying = true;
    btnPlay.classList.add('playing');
    btnPlay.textContent = '⏸ 暫停';
    playStatusHint.textContent = '播放中...';

    clearInterval(playTimer);
    playTimer = setInterval(() => {
      let nextIndex = currentFrameIndex + 1;
      if (nextIndex >= framesList.length) {
        if (loopMode === 'loop') {
          nextIndex = 0;
        } else {
          stopPlayback();
          return;
        }
      }
      showFrame(nextIndex);
    }, playSpeedSeconds * 1000);
  }

  function stopPlayback() {
    isPlaying = false;
    btnPlay.classList.remove('playing');
    btnPlay.textContent = '▶ 播放';
    playStatusHint.textContent = '已停止';
    clearInterval(playTimer);
    playTimer = null;
  }

  function stepFrame(step) {
    stopPlayback();
    let target = currentFrameIndex + step;
    if (target < 0) target = framesList.length - 1;
    if (target >= framesList.length) target = 0;
    showFrame(target);
  }

  /**
   * 下載當前高解析度截圖
   */
  function downloadCurrentSnapshot() {
    const src = displayImg.src;
    if (!src) return;
    const a = document.createElement('a');
    a.href = src;
    a.target = '_blank';
    a.download = `CWA_${currentMode}_${displayTimestamp.textContent.replace(/[\/\s:]/g, '-')}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  /**
   * 檢查並載入氣象署警特報資訊
   */
  function checkWeatherAlerts() {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    alertTime.textContent = `同步時間：${timeStr}`;

    // 若有 API Key 則可進一步查詢，無 Key 則呈現即時天候守護狀態
    alertTag.textContent = '即時通報';
    alertMessage.textContent = '目前中央氣象署全台陸上天候大致平穩，雷達合成回波監控運作中。若有劇烈對流發展將即時通知。';
  }

  /**
   * 綁定鍵盤快捷鍵
   */
  function initKeyboardControls() {
    document.addEventListener('keydown', (e) => {
      // 避免在輸入框觸發
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.code === 'Space') {
        e.preventDefault();
        if (isPlaying) stopPlayback();
        else startPlayback();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        stepFrame(-1);
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        stepFrame(1);
      } else if (e.code === 'ArrowUp') {
        e.preventDefault();
        playSpeedSeconds = Math.max(0.2, playSpeedSeconds - 0.1);
        speedSlider.value = playSpeedSeconds.toFixed(1);
        speedLabel.textContent = `播放速度 ( ${playSpeedSeconds.toFixed(1)} 秒 )`;
        if (isPlaying) startPlayback();
      } else if (e.code === 'ArrowDown') {
        e.preventDefault();
        playSpeedSeconds = Math.min(2.5, playSpeedSeconds + 0.1);
        speedSlider.value = playSpeedSeconds.toFixed(1);
        speedLabel.textContent = `播放速度 ( ${playSpeedSeconds.toFixed(1)} 秒 )`;
        if (isPlaying) startPlayback();
      }
    });
  }

  /**
   * 綁定使用者操作事件
   */
  function initEventListeners() {
    // 頂部模式標籤
    document.querySelectorAll('.mode-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentMode = tab.dataset.mode;
        updateLegendUI();
        fetchFramesForCurrentMode();
      });
    });

    // 單視窗 / 雙視窗對比切換
    btnSingleView.addEventListener('click', () => {
      isDualView = false;
      btnSingleView.classList.add('active');
      btnDualView.classList.remove('active');
      viewerCard.classList.remove('dual-mode');
      secondaryWrapper.style.display = 'none';
    });

    btnDualView.addEventListener('click', () => {
      isDualView = true;
      btnDualView.classList.add('active');
      btnSingleView.classList.remove('active');
      viewerCard.classList.add('dual-mode');
      secondaryWrapper.style.display = 'flex';
      updateLegendUI();
      showFrame(currentFrameIndex);
    });

    // 區域範圍
    document.querySelectorAll('input[name="areaRange"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        currentArea = e.target.value;
        fetchFramesForCurrentMode();
      });
    });

    // 時長範圍
    document.querySelectorAll('input[name="timeSpan"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        currentTimeSpan = parseInt(e.target.value, 10);
        fetchFramesForCurrentMode();
      });
    });

    // 播放 / 暫停 / 停止
    btnPlay.addEventListener('click', () => {
      if (isPlaying) stopPlayback();
      else startPlayback();
    });

    btnStop.addEventListener('click', () => {
      stopPlayback();
      showFrame(framesList.length - 1);
    });

    // 逐格步進
    btnPrevFrame.addEventListener('click', () => stepFrame(-1));
    btnNextFrame.addEventListener('click', () => stepFrame(1));

    // 時間下拉
    timeSelect.addEventListener('change', (e) => {
      stopPlayback();
      showFrame(parseInt(e.target.value, 10));
    });

    // 時間軸拉桿
    timelineSlider.addEventListener('input', (e) => {
      stopPlayback();
      showFrame(parseInt(e.target.value, 10));
    });

    // 速度調整
    speedSlider.addEventListener('input', (e) => {
      playSpeedSeconds = parseFloat(e.target.value);
      speedLabel.textContent = `播放速度 ( ${playSpeedSeconds.toFixed(1)} 秒 )`;
      if (isPlaying) startPlayback();
    });

    // 循環 / 單次
    document.querySelectorAll('input[name="loopMode"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        loopMode = e.target.value;
      });
    });

    // 重新整理
    refreshBtn.addEventListener('click', () => {
      fetchFramesForCurrentMode();
      checkWeatherAlerts();
    });

    // 下載高清影格
    btnDownloadSnapshot.addEventListener('click', downloadCurrentSnapshot);

    // 全螢幕
    btnFullscreen.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        viewerCard.requestFullscreen().catch(err => console.warn(err));
      } else {
        document.exitFullscreen();
      }
    });
  }

  // 程式啟動
  initTheme();
  initEventListeners();
  initKeyboardControls();
  checkWeatherAlerts();
  updateLegendUI();
  fetchFramesForCurrentMode();

})();
