# 🚗 Car Price 多元線性回歸 — 24 個特徵 × 五種線性回歸

🌐 **線上預覽**：[https://shibu0805.github.io/HomeWork/04-car-price-regression/regression.html](https://shibu0805.github.io/HomeWork/04-car-price-regression/regression.html)

讓電腦看 **205 台車的 24 項規格**（馬力、引擎大小、廠牌…）和它們的售價，學會**估車價**；
再比較 **5 種線性回歸方法**哪一種最準，以及**需要多少資料**才估得準。

---

## 📦 資料集

- 來源：[Kaggle — Car Price Prediction](https://www.kaggle.com/datasets/hellbuoy/car-price-prediction)（`CarPrice_Assignment.csv`）
- 205 筆，移除流水號 `car_ID` 後共 **24 個特徵**，預測目標為車價 `price`（美元）

| 類型 | 數量 | 特徵 |
| :--- | :---: | :--- |
| 數值 | 15 | 保險風險等級、軸距、車長、車寬、車高、車重、汽缸數、引擎排氣量、缸徑、衝程、壓縮比、馬力、最高轉速、市區油耗、高速油耗 |
| 類別 | 9 | 廠牌、燃料、進氣方式、車門數、車身型式、驅動方式、引擎位置、引擎型式、供油系統 |

---

## 🔄 做法

```mermaid
flowchart LR
    A[205 台車] --> B[① 準備資料<br/>廠牌拼字修正、One-Hot、標準化]
    B --> C[② 藏起 41 台當考題<br/>其餘取 40 / 80 / 120 / 164 台訓練]
    C --> D[5 種模型各自<br/>5-fold CV 找最佳參數]
    D --> E[③ 估那 41 台沒看過的車<br/>比較 RMSE、R² 等誤差]
```

- **五種模型**（`sklearn.linear_model`）：LinearRegression、Ridge、Lasso、ElasticNet、SGDRegressor
- **Forward Selection**：從 1 個特徵開始，每次加入最有幫助的一個，觀察特徵數量 1 ~ 24 對誤差的影響

---

## 💡 重點發現

1. **資料充足（164 筆）時**，標準線性回歸最準：R² ≈ 0.88，平均約估錯 3,088 美元。
2. **資料很少（40 筆）時**，正則化很有幫助：標準線性回歸 R² 只有 0.55，Lasso 能提升到 0.71。
3. **特徵不是越多越好**：約 11 個特徵誤差就最低，最重要的是引擎排氣量、廠牌、最高轉速。

---

## 🌐 網站內容

| 區塊 | 看什麼 |
| :--- | :--- |
| 三步驟 & 重點發現 | 一眼看懂在做什麼、得到什麼結論 |
| 資料集與 24 個特徵 | 每個特徵的中文名稱、和車價的相關程度 |
| 模型排名 | 切換訓練筆數，看 5 種模型誰估得最準 |
| 學習曲線 | 資料越多，誤差怎麼變化 |
| 單一模型詳細結果 | 特徵數量 vs 誤差、41 台車逐筆預測、影響車價最大的因素 |
| 五模型比較 | 所有誤差指標並排、Overfit 檢查 |

---

## 📂 檔案結構

| 檔案 | 說明 |
| :--- | :--- |
| `regression.html` | 結果視覺化網頁 |
| `analyze.py` | 執行所有實驗，輸出 `results.json` / `results.js` |
| `model_lab.py` | 資料前處理、五種模型與誤差計算 |
| `requirements.txt` | Python 套件（numpy、pandas、scikit-learn） |
| `data/CarPrice_Assignment.csv` | 資料集 |

---

## 🚀 本機執行

```bash
cd HomeWork/04-car-price-regression
pip install -r requirements.txt
python analyze.py              # 重新跑實驗（約 3 分鐘）

cd ..
python -m http.server 8000
```

開啟 `http://localhost:8000/04-car-price-regression/regression.html`

---

## ⚙️ GitHub Actions 自動部署

每次 push 到 `main`，[`.github/workflows/pages.yml`](../.github/workflows/pages.yml) 會在雲端自動：

1. 安裝 Python 套件
2. 執行 `analyze.py` 產生最新結果
3. 部署整個網站到 GitHub Pages

> 第一次使用前，需到 repo 的 **Settings → Pages → Source** 選擇 **GitHub Actions**。
