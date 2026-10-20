"""
Car Price 回歸實驗共用模組：資料前處理、五種 sklearn.linear_model 模型、誤差指標

資料集：Kaggle「Car Price Prediction」(CarPrice_Assignment.csv)，205 筆、24 個特徵，預測 price。
預測集固定為 train_test_split(test_size=41, random_state=0) 的 41 筆（20%）；
訓練集則從其餘 164 筆依序取前 n 筆（40 / 80 / 120 / 164），比較訓練資料量對最終預測的影響。
"""

import warnings

import numpy as np
import pandas as pd
from sklearn.compose import ColumnTransformer, TransformedTargetRegressor
from sklearn.exceptions import ConvergenceWarning
from sklearn.linear_model import (ElasticNet, Lasso, LinearRegression, Ridge,
                                  SGDRegressor)
from sklearn.metrics import (max_error, mean_absolute_error,
                             mean_absolute_percentage_error,
                             mean_squared_error, r2_score)
from sklearn.model_selection import (KFold, ParameterGrid, cross_val_score,
                                     train_test_split)
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler

RANDOM_STATE = 0
TEST_SIZE = 41
TRAIN_SIZES = [40, 80, 120, 164]
CV = KFold(n_splits=5, shuffle=True, random_state=RANDOM_STATE)
TARGET = "price"

NUMERIC = ["symboling", "wheelbase", "carlength", "carwidth", "carheight",
           "curbweight", "cylindernumber", "enginesize", "boreratio", "stroke",
           "compressionratio", "horsepower", "peakrpm", "citympg", "highwaympg"]
CATEGORICAL = ["brand", "fueltype", "aspiration", "doornumber", "carbody",
               "drivewheel", "enginelocation", "enginetype", "fuelsystem"]
FEATURES = NUMERIC + CATEGORICAL  # 24 個原始特徵

# CarName 第一個字是廠牌，原始資料有拼錯的要修正
BRAND_FIX = {"maxda": "mazda", "porcshce": "porsche", "toyouta": "toyota",
             "vokswagen": "volkswagen", "vw": "volkswagen", "nissan": "nissan"}
CYLINDERS = {"two": 2, "three": 3, "four": 4, "five": 5, "six": 6,
             "eight": 8, "twelve": 12}

ALPHAS = np.logspace(-3, 4, 15).round(4).tolist()

MODELS = [
    {
        "key": "linear",
        "name": "標準線性回歸",
        "en": "Linear Regression (OLS)",
        "module": "sklearn.linear_model.LinearRegression",
        "desc": "最小平方法，沒有正則化，是其他模型的比較基準；One-Hot 後欄位多、資料少時容易 overfit。",
        "grid": {"fit_intercept": [True]},
    },
    {
        "key": "ridge",
        "name": "Ridge 回歸",
        "en": "Ridge Regression (L2)",
        "module": "sklearn.linear_model.Ridge",
        "desc": "加上 L2 懲罰 α·Σβ²，讓係數變小但不會歸零，可降低引擎大小、馬力、車重等特徵的共線性影響。",
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


# ---------------------------------------------------------------- 資料
def load(path):
    df = pd.read_csv(path)
    df["brand"] = df["CarName"].str.split().str[0].str.lower().replace(BRAND_FIX)
    df["cylindernumber"] = df["cylindernumber"].map(CYLINDERS)
    return df


class Data:
    def __init__(self, df):
        self.df = df
        self.X = df[FEATURES]
        self.y = df[TARGET].to_numpy(dtype=float)
        # 類別清單取自全部資料（不含 price，不算資料洩漏），讓每次訓練的 One-Hot 欄位一致
        self.categories = {c: sorted(df[c].unique()) for c in CATEGORICAL}
        idx = np.arange(len(df))
        (self.X_train, self.X_test, self.y_train, self.y_test,
         self.idx_train, self.idx_test) = train_test_split(
            self.X, self.y, idx, test_size=TEST_SIZE, random_state=RANDOM_STATE)

    def train(self, n):
        """訓練集前 n 筆（train_test_split 已打亂順序，40 ⊂ 80 ⊂ 120 ⊂ 164）"""
        return self.X_train.iloc[:n], self.y_train[:n]

    def samples(self, idx):
        return [{"index": int(i),
                 "name": self.df.at[i, "CarName"],
                 "brand": self.df.at[i, "brand"],
                 "carbody": self.df.at[i, "carbody"],
                 "enginesize": int(self.df.at[i, "enginesize"]),
                 "horsepower": int(self.df.at[i, "horsepower"]),
                 "actual": float(self.df.at[i, TARGET])}
                for i in idx]

    def describe(self):
        """24 個特徵的型態、類別數與（數值特徵）和 price 的相關係數"""
        out = []
        for c in FEATURES:
            if c in NUMERIC:
                out.append({"name": c, "type": "numeric",
                            "corr": round(float(self.df[c].corr(self.df[TARGET])), 4)})
            else:
                out.append({"name": c, "type": "categorical",
                            "levels": len(self.categories[c])})
        return out


# ---------------------------------------------------------------- 模型
def _regressor(key, p):
    if key == "linear":
        return LinearRegression(**p)
    if key == "ridge":
        return Ridge(**p)
    if key == "lasso":
        return Lasso(max_iter=100_000, **p)
    if key == "elastic":
        return ElasticNet(max_iter=100_000, **p)
    if key == "sgd":
        return SGDRegressor(max_iter=1000, tol=1e-6, random_state=RANDOM_STATE, **p)
    raise ValueError(f"未知模型 {key}")


def build(data, key, p, features=FEATURES):
    """One-Hot 類別特徵 → 標準化全部欄位（正則化對每個特徵才公平）→ 回歸"""
    cat = [c for c in features if c in CATEGORICAL]
    num = [c for c in features if c in NUMERIC]
    prep = ColumnTransformer(
        [("cat", OneHotEncoder(categories=[data.categories[c] for c in cat],
                               handle_unknown="ignore", sparse_output=False), cat),
         ("num", "passthrough", num)],
        verbose_feature_names_out=False)
    pipe = Pipeline([("prep", prep), ("scale", StandardScaler()),
                     ("reg", _regressor(key, p))])
    if key == "sgd":
        # SGD 以梯度下降求解，目標值 price（約萬元級）也需標準化才會穩定收斂
        return TransformedTargetRegressor(regressor=pipe, transformer=StandardScaler())
    return pipe


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


def _fit(est, X, y):
    with warnings.catch_warnings():
        warnings.simplefilter("ignore")
        return est.fit(X, y)


def cv_rmse(data, X, y, key, params):
    with warnings.catch_warnings():
        warnings.simplefilter("ignore")
        scores = cross_val_score(build(data, key, params), X, y, cv=CV,
                                 scoring="neg_root_mean_squared_error")
    return float(-scores.mean())


def grid_search(data, X, y, key, grid):
    """等同 GridSearchCV：取訓練集 5-fold CV RMSE 最低的參數組合"""
    return min(ParameterGrid(grid), key=lambda p: cv_rmse(data, X, y, key, p))


def coefficients(est):
    """標準化係數（One-Hot 展開後的欄位）：欄位增加 1 個標準差時 price 的變化量"""
    if isinstance(est, TransformedTargetRegressor):
        pipe, scale = est.regressor_, float(est.transformer_.scale_[0])
    else:
        pipe, scale = est, 1.0
    names = pipe.named_steps["prep"].get_feature_names_out().tolist()
    coef = (pipe.named_steps["reg"].coef_ * scale).tolist()
    return [{"name": nm, "value": round(v, 4)} for nm, v in zip(names, coef)]


def forward_selection(data, X_train, y_train, X_test, y_test, key, params):
    """課堂 Forward Selection：每一步加入讓預測集 RMSE 最低的原始特徵（類別特徵整組 One-Hot 一起加入）"""
    selected, curve = [], []
    for k in range(1, len(FEATURES) + 1):
        best = None
        for f in [c for c in FEATURES if c not in selected]:
            cols = selected + [f]
            est = _fit(build(data, key, params, cols), X_train[cols], y_train)
            pred_test = est.predict(X_test[cols])
            score = rmse(y_test, pred_test)
            if best is None or score < best[0]:
                best = (score, f, est.predict(X_train[cols]), pred_test)
        score, f, pred_train, pred_test = best
        selected.append(f)
        curve.append({"k": k, "added": f,
                      "rmse": score,
                      "r2": float(r2_score(y_test, pred_test)),
                      "train_rmse": rmse(y_train, pred_train),
                      "train_r2": float(r2_score(y_train, pred_train))})
    return curve


def evaluate(data, model, n_train):
    """用前 n_train 筆訓練（含網格搜尋），預測固定的 41 筆並計算誤差"""
    X, y = data.train(n_train)
    key = model["key"]
    params = grid_search(data, X, y, key, model["grid"])
    est = build(data, key, params)
    with warnings.catch_warnings(record=True) as w:
        warnings.simplefilter("always")
        est.fit(X, y)
    pred_test = est.predict(data.X_test)
    pred_train = est.predict(X)
    coef = coefficients(est)
    return {
        "n_train": n_train,
        "best_params": params,
        "converged": not any(issubclass(x.category, ConvergenceWarning) for x in w),
        # Adjusted R² 的 p 用 24 個原始特徵（One-Hot 展開後欄位數會超過 n，公式失去意義）
        "test": metrics(data.y_test, pred_test, len(FEATURES)),
        "train": metrics(y, pred_train, len(FEATURES)),
        "cv_rmse": cv_rmse(data, X, y, key, params),
        "predictions": [round(float(v), 2) for v in pred_test],
        "coef": coef,
        "feature_curve": forward_selection(data, X, y, data.X_test, data.y_test, key, params),
    }
