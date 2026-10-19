/**
 * 國立中興大學 (NCHU) 主題 - 梁富翔個人專屬首頁邏輯
 * 功能包含：
 * 1. 即時動態數位時鐘（每秒精準刷新時、分、秒、日期、星期與即時問候語）
 * 2. 網頁在線停留時間累加器
 * 3. 學習備忘與作業待辦清單（支援 LocalStorage 儲存）
 * 4. 學習專注番茄鐘計時器
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. 初始化即時時鐘
  initLiveClock();

  // 2. 初始化頁面停留計時器
  initSessionTimer();

  // 3. 初始化學習備忘待辦清單
  initTodoList();

  // 4. 初始化專注計時器
  initPomodoroTimer();
});

/* ============================================================
   1. 即時動態時鐘 (Live Clock)
   ============================================================ */
function initLiveClock() {
  const elHours = document.getElementById('clock-hours');
  const elMinutes = document.getElementById('clock-minutes');
  const elSeconds = document.getElementById('clock-seconds');
  const elAmpm = document.getElementById('clock-ampm');
  const elDateString = document.getElementById('date-string');
  const elDayString = document.getElementById('day-string');
  const elGreeting = document.getElementById('time-greeting');
  const elGreetingBadge = document.getElementById('greeting-badge');

  const daysOfWeek = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

  function updateClock() {
    const now = new Date();

    // 格式化時、分、秒 (補零)
    const rawHours = now.getHours();
    const rawMinutes = now.getMinutes();
    const rawSeconds = now.getSeconds();

    const hours12 = rawHours % 12 || 12;
    const ampm = rawHours >= 12 ? 'PM' : 'AM';

    const hoursStr = String(rawHours).padStart(2, '0');
    const minutesStr = String(rawMinutes).padStart(2, '0');
    const secondsStr = String(rawSeconds).padStart(2, '0');

    // 填入時間
    if (elHours) elHours.textContent = hoursStr;
    if (elMinutes) elMinutes.textContent = minutesStr;
    if (elSeconds) elSeconds.textContent = secondsStr;
    if (elAmpm) elAmpm.textContent = ampm;

    // 格式化年月日
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    const dayOfWeek = daysOfWeek[now.getDay()];

    if (elDateString) {
      elDateString.textContent = `${year} 年 ${month} 月 ${date} 日`;
    }
    if (elDayString) {
      elDayString.textContent = dayOfWeek;
    }

    // 時段問候語計算
    let greetingText = '';
    let badgeStatus = '';

    if (rawHours >= 0 && rawHours < 6) {
      greetingText = '夜深了，注意休息 🌙';
      badgeStatus = '深夜靜思 · 記得早點休息';
    } else if (rawHours >= 6 && rawHours < 11) {
      greetingText = '早安，富翔！迎向朝氣的一天 ☀️';
      badgeStatus = '晨光初露 · 元氣滿滿';
    } else if (rawHours >= 11 && rawHours < 14) {
      greetingText = '午安！享用美味午餐與小憩 🍃';
      badgeStatus = '午後片刻 · 愜意充電';
    } else if (rawHours >= 14 && rawHours < 18) {
      greetingText = '下午好！保持專注，收穫知識 ☕';
      badgeStatus = '學海無涯 · 專注研習中';
    } else {
      greetingText = '晚上好，富翔！歡迎回到個人空間 🌟';
      badgeStatus = '晚間時光 · 回顧與自省';
    }

    if (elGreeting) elGreeting.textContent = greetingText;
    if (elGreetingBadge) elGreetingBadge.textContent = badgeStatus;
  }

  // 立即執行一次，防止一秒空白
  updateClock();
  // 每秒定期更新
  setInterval(updateClock, 1000);
}

/* ============================================================
   2. 頁面停留時間累加器 (Session Timer)
   ============================================================ */
function initSessionTimer() {
  const elStayDuration = document.getElementById('stay-duration');
  let secondsElapsed = 0;

  setInterval(() => {
    secondsElapsed++;
    const h = String(Math.floor(secondsElapsed / 3600)).padStart(2, '0');
    const m = String(Math.floor((secondsElapsed % 3600) / 60)).padStart(2, '0');
    const s = String(secondsElapsed % 60).padStart(2, '0');

    if (elStayDuration) {
      elStayDuration.textContent = `${h}:${m}:${s}`;
    }
  }, 1000);
}

/* ============================================================
   3. 學習備忘與作業待辦清單 (Todo List)
   ============================================================ */
function initTodoList() {
  const todoInput = document.getElementById('todoInput');
  const addTodoBtn = document.getElementById('addTodoBtn');
  const todoList = document.getElementById('todoList');
  const taskCounter = document.getElementById('task-counter');

  const STORAGE_KEY = 'nchu_liang_homework_todos';

  // 預設示範資料
  const defaultTasks = [
    { id: 1, text: '完成中興大學週一個人化網頁作業', completed: true },
    { id: 2, text: '瀏覽中興大學圖書館最新專業館藏書籍', completed: false },
    { id: 3, text: '傍晚至中興湖畔散步，觀察黑天鵝倒影', completed: false }
  ];

  let tasks = [];
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    tasks = saved ? JSON.parse(saved) : defaultTasks;
  } catch (e) {
    tasks = defaultTasks;
  }

  function saveAndRender() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (e) {
      console.warn('LocalStorage not available');
    }
    renderTasks();
  }

  function renderTasks() {
    if (!todoList) return;
    todoList.innerHTML = '';

    const remainingCount = tasks.filter(t => !t.completed).length;
    if (taskCounter) {
      taskCounter.textContent = `${remainingCount} 項待辦`;
    }

    if (tasks.length === 0) {
      todoList.innerHTML = '<li style="text-align:center; color: var(--text-muted); padding: 1rem; font-size: 0.85rem;">目前沒有待辦事項，太棒了！🎉</li>';
      return;
    }

    tasks.forEach(task => {
      const li = document.createElement('li');
      li.className = `todo-item ${task.completed ? 'completed' : ''}`;

      const left = document.createElement('div');
      left.className = 'todo-item-left';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'todo-checkbox';
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', () => {
        task.completed = checkbox.checked;
        saveAndRender();
      });

      const span = document.createElement('span');
      span.className = 'todo-text';
      span.textContent = task.text;

      left.appendChild(checkbox);
      left.appendChild(span);

      const delBtn = document.createElement('button');
      delBtn.className = 'todo-delete-btn';
      delBtn.title = '刪除任務';
      delBtn.innerHTML = '✕';
      delBtn.addEventListener('click', () => {
        tasks = tasks.filter(t => t.id !== task.id);
        saveAndRender();
      });

      li.appendChild(left);
      li.appendChild(delBtn);
      todoList.appendChild(li);
    });
  }

  function addTask() {
    const text = todoInput.value.trim();
    if (!text) return;

    tasks.push({
      id: Date.now(),
      text: text,
      completed: false
    });

    todoInput.value = '';
    saveAndRender();
  }

  if (addTodoBtn) {
    addTodoBtn.addEventListener('click', addTask);
  }

  if (todoInput) {
    todoInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        addTask();
      }
    });
  }

  renderTasks();
}

/* ============================================================
   4. 專注番茄鐘 (Pomodoro Timer)
   ============================================================ */
function initPomodoroTimer() {
  const elMinutes = document.getElementById('pomo-minutes');
  const elSeconds = document.getElementById('pomo-seconds');
  const elStatus = document.getElementById('pomoStatus');
  const btnStart = document.getElementById('startTimerBtn');
  const btnPause = document.getElementById('pauseTimerBtn');
  const btnReset = document.getElementById('resetTimerBtn');

  const DEFAULT_SECONDS = 25 * 60; // 25 分鐘
  let timeLeft = DEFAULT_SECONDS;
  let timerInterval = null;
  let isRunning = false;

  function updateDisplay() {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    if (elMinutes) elMinutes.textContent = String(m).padStart(2, '0');
    if (elSeconds) elSeconds.textContent = String(s).padStart(2, '0');
  }

  function startTimer() {
    if (isRunning) return;
    isRunning = true;
    btnStart.disabled = true;
    btnPause.disabled = false;
    if (elStatus) elStatus.textContent = '🔥 保持心流，專注學習中...';

    timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(timerInterval);
        isRunning = false;
        btnStart.disabled = false;
        btnPause.disabled = true;
        if (elStatus) elStatus.textContent = '🎉 專注完成！請放鬆休息 5 分鐘。';
      }
    }, 1000);
  }

  function pauseTimer() {
    if (!isRunning) return;
    clearInterval(timerInterval);
    isRunning = false;
    btnStart.disabled = false;
    btnPause.disabled = true;
    if (elStatus) elStatus.textContent = '⏸️ 專注計時已暫停';
  }

  function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    timeLeft = DEFAULT_SECONDS;
    updateDisplay();
    btnStart.disabled = false;
    btnPause.disabled = true;
    if (elStatus) elStatus.textContent = '準備好開始專注研讀了嗎？';
  }

  if (btnStart) btnStart.addEventListener('click', startTimer);
  if (btnPause) btnPause.addEventListener('click', pauseTimer);
  if (btnReset) btnReset.addEventListener('click', resetTimer);

  updateDisplay();
}
