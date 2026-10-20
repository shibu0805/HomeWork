# 📊 50 Startups 多元線性回歸 — 訓練筆數 × 五種線性回歸

🌐 **線上預覽**：[https://shibu0805.github.io/HomeWork/03-ml-regression/regression.html](https://shibu0805.github.io/HomeWork/03-ml-regression/regression.html)

用新創公司的**研發、行政、行銷支出與所在州**，預測公司的**利潤（Profit）**；
比較 **5 種線性回歸方法**哪一種最準，以及**訓練資料從 10 筆增加到 40 筆**時，預測能進步多少。

---

## 📦 資料集

- `data/50_Startups.csv`：50 家新創公司，預測目標為 `Profit`
- **5 個特徵**（State 以 One-Hot 編碼，California 為基準）

| 特徵 | 說明 |
| :--- | :--- |
| `R&D Spend` | 研發支出 |
| `Administration` | 行政支出 |
| `Marketing Spend` | 行銷支出 |
| `State_Florida` / `State_New York` | 公司所在州 |

---

## 🔄 做法

```mermaid
flowchart LR
    A[50 家公司] --> B[① 準備資料<br/>State One-Hot、標準化]
    B --> C[② 藏起 10 家當考題<br/>其餘取 10 / 20 / 30 / 40 家訓練]
    C --> D[5 種模型各自<br/>5-fold CV 找最佳參數]
    D --> E[③ 預測那 10 家沒看過的公司<br/>比較 RMSE、R² 等誤差]
```

- **五種模型**（`sklearn.linear_model`）：LinearRegression、Ridge、Lasso、ElasticNet、SGDRegressor
- **Forward Selection**：依課堂做法，每次加入最有幫助的特徵，畫出 RMSE / R² by Number of Features（訓練 40 筆時與講義結果一致）

---

## 💡 重點發現

1. **資料越多越準**：以標準線性回歸為例，R² 從 10 筆時的 0.37 提升到 40 筆時的 0.93。
2. **資料充足（40 筆）時**，Lasso 最準：R² ≈ 0.95，平均約估錯 8,308 美元。
3. **研發支出（R&D Spend）最重要**：只用這 1 個特徵就能估得很準，加入全部 5 個特徵反而略差。

---

## 🌐 網站內容

| 區塊 | 看什麼 |
| :--- | :--- |
| 模型排名 | 切換訓練筆數，看 5 種模型誰預測最準 |
| 學習曲線 | 訓練筆數 vs RMSE / R² |
| 單一模型詳細結果 | 特徵數量 vs 誤差、10 家公司逐筆預測、標準化係數 |
| 五模型比較 | MSE、RMSE、MAE、R²、Adjusted R²、MAPE、最大誤差並排，Overfit 檢查 |

---

## 📂 檔案結構

| 檔案 | 說明 |
| :--- | :--- |
| `regression.html` | 結果視覺化網頁 |
| `analyze.py` | 執行所有實驗，輸出 `results.json` / `results.js` |
| `model_lab.py` | 資料前處理、五種模型與誤差計算 |
| `Startups_Multiple_Linear_Regression.ipynb` | 多元線性回歸 Notebook |
| `data/50_Startups.csv` | 資料集 |

---

## 🚀 本機執行

```bash
cd HomeWork/03-ml-regression
pip install numpy scikit-learn
python analyze.py              # 重新跑實驗

cd ..
python -m http.server 8000
```

開啟 `http://localhost:8000/03-ml-regression/regression.html`
