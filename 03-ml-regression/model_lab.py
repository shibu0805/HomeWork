"""
50 Startups 回歸實驗共用模組：資料前處理、五種 sklearn.linear_model 模型、誤差指標

預測集固定為 train_test_split(test_size=10, random_state=0) 的 10 筆；
訓練集則從其餘 40 筆依序取前 n 筆（10 / 20 / 30 / 40），比較訓練資料量對最終預測的影響。
"""

import csv
import io
import warnings

import numpy as np
from sklearn.compose import TransformedTargetRegressor
from sklearn.exceptions import ConvergenceWarning
from sklearn.linear_model import (ElasticNet, Lasso, LinearRegression, Ridge,
                                  SGDRegressor)
from sklearn.metrics import (max_error, mean_absolute_error,
                             mean_absolute_percentage_error,
                             mean_squared_error, r2_score)
from sklearn.model_selection import (KFold, ParameterGrid, cross_val_score,
                                     train_test_split)
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler

RANDOM_STATE = 0
TEST_SIZE = 10
TRAIN_SIZES = [10, 20, 30, 40]
CV = KFold(n_splits=5, shuffle=True, random_state=RANDOM_STATE)
NUMERIC = ["R&D Spend", "Administration", "Marketing Spend"]
# 等同 pd.get_dummies(..., drop_first=True)：California 為基準類別
STATES = ["Florida", "New York"]
FEATURES = NUMERIC + [f"State_{s}" for s in STATES]

ALPHAS = np.logspace(-3, 4, 15).round(4).tolist()

MODELS = [
    {
        "key": "linear",
        "name": "標準線性回歸",
        "en": "Linear Regression (OLS)",
        "module": "sklearn.linear_model.LinearRegression",
        "desc": "最小平方法，沒有正則化，是其他模型的比較基準。",
        "grid": {"fit_intercept": [True]},
    },
    {
        "key": "ridge",
        "name": "Ridge 回歸",
        "en": "Ridge Regression (L2)",
        "module": "sklearn.linear_model.Ridge",
        "desc": "加上 L2 懲罰 α·Σβ²，讓係數變小但不會歸零，可降低共線性影響。",
        "grid": {"alpha": ALPHAS},
    },
    {
        "key": "lasso",
        "name": "Lasso 回歸",
        "en": "Lasso Regression (L1)",
        "module": "sklearn.linear_model.Lasso",
        "desc": "加上 L1 懲罰 α·Σ|β|，會把不重要特徵的係數壓成 0，等於自動做特徵選擇。",
        "grid": {"alpha": ALPHAS},
    },
    {
        "key": "elastic",
        "name": "ElasticNet 回歸",
        "en": "ElasticNet (L1 + L2)",
        "module": "sklearn.linear_model.ElasticNet",
        "desc": "L1 與 L2 混合：l1_ratio=1 等於 Lasso，越接近 0 越像 Ridge。",
        "grid": {"alpha": ALPHAS, "l1_ratio": [0.1, 0.3, 0.5, 0.7, 0.9, 0.99]},
    },
    {
        "key": "sgd",
        "name": "SGD 回歸",
        "en": "Stochastic Gradient Descent",
        "module": "sklearn.linear_model.SGDRegressor",
        "desc": "以隨機梯度下降逐步更新係數，需要標準化資料才能穩定收斂。",
        "grid": {"penalty": ["l2", "l1", "elasticnet"],
                 "alpha": [1e-5, 1e-4, 1e-3, 1e-2, 1e-1]},
    },
]


def _scaled(reg):
    # 先標準化特徵，正則化對每個特徵的懲罰才公平
    return Pipeline([("scale", StandardScaler()), ("reg", reg)])


def build(key, p):
    if key == "linear":
        return _scaled(LinearRegression(**p))
    if key == "ridge":
        return _scaled(Ridge(**p))
    if key == "lasso":
        return _scaled(Lasso(max_iter=100_000, **p))
    if key == "elastic":
        return _scaled(ElasticNet(max_iter=100_000, **p))
    if key == "sgd":
        # SGD 以梯度下降求解，目標值 y（Profit 約 10 萬級）也需標準化才會穩定收斂
        sgd = SGDRegressor(max_iter=1000, tol=1e-6, random_state=RANDOM_STATE, **p)
        return TransformedTargetRegressor(regressor=_scaled(sgd), transformer=StandardScaler())
    raise ValueError(f"未知模型 {key}")


# ---------------------------------------------------------------- 資料
class Data:
    def __init__(self, csv_text):
        rows = list(csv.DictReader(io.StringIO(csv_text)))
        self.rows = rows
        self.X = np.array([[float(r[c]) for c in NUMERIC] +
                           [1.0 if r["State"] == s else 0.0 for s in STATES]
                           for r in rows])
        self.y = np.array([float(r["Profit"]) for r in rows])
        idx = np.arange(len(rows))
        (self.X_train, self.X_test, self.y_train, self.y_test,
         self.idx_train, self.idx_test) = train_test_split(
            self.X, self.y, idx, test_size=TEST_SIZE, random_state=RANDOM_STATE)

    def train(self, n):
        """訓練集前 n 筆（train_test_split 已打亂順序，10 ⊂ 20 ⊂ 30 ⊂ 40）"""
        return self.X_train[:n], self.y_train[:n]

    def samples(self, idx):
        return [{"index": int(i),
                 "rd": float(self.rows[i]["R&D Spend"]),
                 "admin": float(self.rows[i]["Administration"]),
                 "marketing": float(self.rows[i]["Marketing Spend"]),
                 "state": self.rows[i]["State"],
                 "actual": float(self.rows[i]["Profit"])}
                for i in idx]


# ---------------------------------------------------------------- 誤差指標
def rmse(a, b):
    return float(np.sqrt(mean_squared_error(a, b)))


def metrics(y_true, y_hat, n_features):
    n = len(y_true)
    r2 = r2_score(y_true, y_hat)
    return {
        "mse": float(mean_squared_error(y_true, y_hat)),
        "rmse": rmse(y_true, y_hat),
        "mae": float(mean_absolute_error(y_true, y_hat)),
        "r2": float(r2),
        "adj_r2": float(1 - (1 - r2) * (n - 1) / (n - n_features - 1)),
        "mape": float(mean_absolute_percentage_error(y_true, y_hat) * 100),
        "max_error": float(max_error(y_true, y_hat)),
    }


def cv_rmse(X, y, key, params):
    with warnings.catch_warnings():
        warnings.simplefilter("ignore")
        scores = cross_val_score(build(key, params), X, y, cv=CV,
                                 scoring="neg_root_mean_squared_error")
    return float(-scores.mean())


def grid_search(X, y, key, grid):
    """等同 GridSearchCV：取訓練集 5-fold CV RMSE 最低的參數組合"""
    return min(ParameterGrid(grid), key=lambda p: cv_rmse(X, y, key, p))


def coefficients(est):
    """標準化係數：特徵增加 1 個標準差時 Profit 的變化量"""
    if isinstance(est, TransformedTargetRegressor):
        reg = est.regressor_.named_steps["reg"]
        return (reg.coef_ * float(est.transformer_.scale_[0])).tolist()
    return est.named_steps["reg"].coef_.tolist()


def forward_selection(X_train, y_train, X_test, y_test, key, params):
    """課堂 Part 2 的 Forward Selection：每一步加入讓預測集 RMSE 最低的特徵"""
    selected, curve = [], []
    for k in range(1, len(FEATURES) + 1):
        best = None
        for f in [i for i in range(len(FEATURES)) if i not in selected]:
            cols = selected + [f]
            est = build(key, params)
            with warnings.catch_warnings():
                warnings.simplefilter("ignore")
                est.fit(X_train[:, cols], y_train)
            pred_test = est.predict(X_test[:, cols])
            score = rmse(y_test, pred_test)
            if best is None or score < best[0]:
                best = (score, f, est.predict(X_train[:, cols]), pred_test)
        score, f, pred_train, pred_test = best
        selected.append(f)
        curve.append({"k": k, "features": [FEATURES[i] for i in selected],
                      "rmse": score,
                      "r2": float(r2_score(y_test, pred_test)),
                      "train_rmse": rmse(y_train, pred_train),
                      "train_r2": float(r2_score(y_train, pred_train))})
    return curve


def evaluate(data, model, n_train):
    """用前 n_train 筆訓練（含網格搜尋），預測固定的 10 筆並計算誤差"""
    X, y = data.train(n_train)
    key = model["key"]
    params = grid_search(X, y, key, model["grid"])
    est = build(key, params)
    with warnings.catch_warnings(record=True) as w:
        warnings.simplefilter("always")
        est.fit(X, y)
    pred_test = est.predict(data.X_test)
    pred_train = est.predict(X)
    return {
        "n_train": n_train,
        "best_params": params,
        "converged": not any(issubclass(x.category, ConvergenceWarning) for x in w),
        "test": metrics(data.y_test, pred_test, len(FEATURES)),
        "train": metrics(y, pred_train, len(FEATURES)),
        "cv_rmse": cv_rmse(X, y, key, params),
        "predictions": [round(float(v), 2) for v in pred_test],
        "coef": coefficients(est),
        "feature_curve": forward_selection(X, y, data.X_test, data.y_test, key, params),
    }
