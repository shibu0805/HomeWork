"""
50 Startups — 五種 sklearn.linear_model 回歸模型 × 不同訓練筆數比較

預測集固定 10 筆（random_state=0）；訓練集分別取 10 / 20 / 30 / 40 筆，
每種筆數都只用自己的訓練資料以 5-fold CV 網格搜尋最佳參數，再預測同樣的 10 筆並計算誤差。
結果輸出 results.json / results.js 給 regression.html 使用。

執行：python analyze.py
"""

import json
from pathlib import Path

import sklearn

import model_lab as lab

BASE = Path(__file__).resolve().parent
data = lab.Data((BASE / "data" / "50_Startups.csv").read_text(encoding="utf-8"))

models = []
for m in lab.MODELS:
    runs = {}
    for n in lab.TRAIN_SIZES:
        runs[n] = lab.evaluate(data, m, n)
        print(f"{m['name']:<12} 訓練 {n:>2} 筆  RMSE={runs[n]['test']['rmse']:>10,.2f}  "
              f"R²={runs[n]['test']['r2']:.4f}  {runs[n]['best_params']}")
    models.append({**{k: m[k] for k in ("key", "name", "en", "module", "desc", "grid")},
                   "runs": runs})

output = {
    "dataset": {
        "name": "50 Startups",
        "n_total": len(data.y),
        "n_test": len(data.y_test),
        "train_sizes": lab.TRAIN_SIZES,
        "random_state": lab.RANDOM_STATE,
        "features": lab.FEATURES,
        "target": "Profit",
        "sklearn": sklearn.__version__,
    },
    "test_samples": data.samples(data.idx_test),
    "models": models,
}

text = json.dumps(output, ensure_ascii=False, indent=2)
(BASE / "results.json").write_text(text, encoding="utf-8")
# results.js 讓 regression.html 直接雙擊開啟（file://）也能讀到資料
(BASE / "results.js").write_text(f"window.RESULTS = {text};\n", encoding="utf-8")

print("\n訓練 40 筆時的排名（依 10 筆預測的 RMSE）：")
for i, m in enumerate(sorted(models, key=lambda m: m["runs"][40]["test"]["rmse"]), 1):
    r = m["runs"][40]["test"]
    print(f"  #{i} {m['name']}  RMSE={r['rmse']:,.2f}  MAE={r['mae']:,.2f}  R²={r['r2']:.4f}")
print("\n已輸出 results.json / results.js")
