# 👋 哈囉，我是梁富翔！

歡迎來到我的 GitHub 🚀  
這裡主要用來存放與記錄我在**國立中興大學**的**週一課程（Vibe Coding）作業**及學習實作。

---

### 📌 關於我與這個空間

- 🏫 **學校**：國立中興大學 (NCHU)
- 💡 **學習主題**：Vibe Coding ｜ 現代網頁開發
- 🛠️ **使用技術**：HTML5 / CSS3 / JavaScript (ES6+)、Python (pandas / scikit-learn)
- 📝 **內容**：課堂練習、作業作品與專案紀錄

---

## 📂 課堂作業專案介紹

### 1️⃣ 作業一：興大個人化專屬首頁 (`01-personal-homepage/`)
- **簡介**：包含即時動態數位時鐘、興大校園快捷系統、個人資訊與學習專注工具。
- **特色**：深色科技感毛玻璃（Glassmorphism）流體光暈視覺風格，自適應跨平台排版。

---

### 2️⃣ 作業二：中央氣象署 (CWA) 雷達回波與動態雲圖觀測儀表板 (`02-weather-dashboard/`)
- 📖 詳細說明：[02-weather-dashboard/README.md](02-weather-dashboard/README.md)
- **簡介**：串接交通部中央氣象署開放觀測資料，打造對齊官方觀測格式的高互動性氣象儀表板。
- **特色**：
  - 📡 **多維度圖資**：無地形/有地形雷達、色調強化衛星雲圖、24小時紅外線黑白雲圖、全台氣溫熱圖。
  - 🔀 **雙視窗同步對比**：左雷達、右雲圖並排同步播放，零時差對照「雲層厚度 vs 降水強度」。
  - 🎬 **專業級播放器**：3~12 小時多段時長、時間軸拖曳（Scrubber）、0.2s~2.0s 速度調節。
  - ⌨️ **鍵盤快捷微調**：`Space`（播放/暫停）、`←/→`（逐影格倒退/前進）、`↑/↓`（調速）。
  - 🌙 **暗色戰情室主題**：經典明亮與暗色戰情室模式一鍵切換。
  - 🔒 **純前端隱私架構**：每次開啟時由前端背景自動重新抓取最新資料，不使用資料庫，且前端網頁不曝光 API Key。

#### 🔄 氣象儀表板簡易流程圖
```mermaid
flowchart TD
    Start([開啟 weather.html]) --> Fetch[背景非同步抓取 CWA 最新觀測影格]
    Fetch --> Preload[影像快取預載入確保流暢]
    Preload --> UI[渲染播放器、時間軸與圖例]
    UI --> Action{使用者操作}
    Action -->|切換圖資| Tab[無地形/有地形雷達/彩色/黑白雲圖/氣溫]
    Action -->|檢視模式| View[📺 單一視窗 / 🔀 雙視窗同步對照]
    Action -->|播放控制| Play[▶ 播放 / ⏸ 暫停 / ⌨️ 逐格微調]
    Action -->|主題切換| Theme[☀️ 明亮模式 / 🌙 暗色戰情室]
```

---

### 3️⃣ 作業三：50 Startups 回歸分析 — 訓練筆數 × 五種線性回歸 (`03-ml-regression/regression.html`)
- **簡介**：用 `R&D Spend`、`Administration`、`Marketing Spend`、`State` 預測新創公司 `Profit`，比較 `sklearn.linear_model` 五種模型：**LinearRegression、Ridge、Lasso、ElasticNet、SGDRegressor**。
- **實驗設計**：固定 10 筆作為預測集（`random_state=0`），分別用 **10 / 20 / 30 / 40 筆**訓練，比較最終模型的預測誤差；每種筆數都以訓練集 5-fold CV 網格搜尋最佳參數。
- **特色**：
  - 📏 **完整誤差指標**：MSE、RMSE、MAE、R²、Adjusted R²、MAPE、最大誤差、Train / CV RMSE。
  - 📉 **學習曲線**：訓練筆數 vs RMSE / R²，觀察資料量對預測的影響。
  - 📈 **特徵數量 vs 誤差**：依課堂 Forward Selection 做法畫出 RMSE / R² by Number of Features（訓練 40 筆時與講義結果一致）。
  - 🔍 **逐筆預測對照**：同一家公司在 10 / 20 / 30 / 40 筆訓練下的預測值與誤差。
- **檔案**：
  - `analyze.py`：執行所有實驗並輸出 `results.json` / `results.js`（`python analyze.py`）
  - `model_lab.py`：資料前處理、五種模型與誤差計算
  - `regression.html`：結果視覺化網頁
  - `data/50_Startups.csv`：資料集
  - [Startups_Multiple_Linear_Regression.ipynb](03-ml-regression/Startups_Multiple_Linear_Regression.ipynb)：多元線性回歸 Notebook

---

## 📁 資料夾結構

```
HomeWork/
├── 01-personal-homepage/   # 作業一：個人首頁 (index.html / style.css / script.js)
├── 02-weather-dashboard/   # 作業二：天氣儀表板 (weather.html / weather.css / weather.js / config.js / taiwan-map.js)
└── 03-ml-regression/       # 作業三：回歸分析 (regression.html / analyze.py / model_lab.py / Notebook)
```

---

## 🌐 GitHub Pages 線上預覽連結

本專案已部署於 GitHub Pages，可直接點擊下方連結線上體驗：

- 🏠 **個人作業首頁**：[https://shibu0805.github.io/HomeWork/01-personal-homepage/index.html](https://shibu0805.github.io/HomeWork/01-personal-homepage/index.html)
- 🌦️ **CWA 動態氣象觀測儀表板**：[https://shibu0805.github.io/HomeWork/02-weather-dashboard/weather.html](https://shibu0805.github.io/HomeWork/02-weather-dashboard/weather.html)
- 📊 **50 Startups 回歸分析比較**：[https://shibu0805.github.io/HomeWork/03-ml-regression/regression.html](https://shibu0805.github.io/HomeWork/03-ml-regression/regression.html)

---

> 隨性寫扣、享受心流，透過 Vibe Coding 打造有趣的酷東西 ✨
