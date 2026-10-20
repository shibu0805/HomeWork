window.RESULTS = {
  "dataset": {
    "name": "Car Price Prediction",
    "source": "https://www.kaggle.com/datasets/hellbuoy/car-price-prediction",
    "n_total": 205,
    "n_test": 41,
    "train_sizes": [
      40,
      80,
      120,
      164
    ],
    "random_state": 0,
    "features": [
      "symboling",
      "wheelbase",
      "carlength",
      "carwidth",
      "carheight",
      "curbweight",
      "cylindernumber",
      "enginesize",
      "boreratio",
      "stroke",
      "compressionratio",
      "horsepower",
      "peakrpm",
      "citympg",
      "highwaympg",
      "brand",
      "fueltype",
      "aspiration",
      "doornumber",
      "carbody",
      "drivewheel",
      "enginelocation",
      "enginetype",
      "fuelsystem"
    ],
    "feature_info": [
      {
        "name": "symboling",
        "type": "numeric",
        "corr": -0.08
      },
      {
        "name": "wheelbase",
        "type": "numeric",
        "corr": 0.5778
      },
      {
        "name": "carlength",
        "type": "numeric",
        "corr": 0.6829
      },
      {
        "name": "carwidth",
        "type": "numeric",
        "corr": 0.7593
      },
      {
        "name": "carheight",
        "type": "numeric",
        "corr": 0.1193
      },
      {
        "name": "curbweight",
        "type": "numeric",
        "corr": 0.8353
      },
      {
        "name": "cylindernumber",
        "type": "numeric",
        "corr": 0.7183
      },
      {
        "name": "enginesize",
        "type": "numeric",
        "corr": 0.8741
      },
      {
        "name": "boreratio",
        "type": "numeric",
        "corr": 0.5532
      },
      {
        "name": "stroke",
        "type": "numeric",
        "corr": 0.0794
      },
      {
        "name": "compressionratio",
        "type": "numeric",
        "corr": 0.068
      },
      {
        "name": "horsepower",
        "type": "numeric",
        "corr": 0.8081
      },
      {
        "name": "peakrpm",
        "type": "numeric",
        "corr": -0.0853
      },
      {
        "name": "citympg",
        "type": "numeric",
        "corr": -0.6858
      },
      {
        "name": "highwaympg",
        "type": "numeric",
        "corr": -0.6976
      },
      {
        "name": "brand",
        "type": "categorical",
        "levels": 22
      },
      {
        "name": "fueltype",
        "type": "categorical",
        "levels": 2
      },
      {
        "name": "aspiration",
        "type": "categorical",
        "levels": 2
      },
      {
        "name": "doornumber",
        "type": "categorical",
        "levels": 2
      },
      {
        "name": "carbody",
        "type": "categorical",
        "levels": 5
      },
      {
        "name": "drivewheel",
        "type": "categorical",
        "levels": 3
      },
      {
        "name": "enginelocation",
        "type": "categorical",
        "levels": 2
      },
      {
        "name": "enginetype",
        "type": "categorical",
        "levels": 7
      },
      {
        "name": "fuelsystem",
        "type": "categorical",
        "levels": 8
      }
    ],
    "target": "price",
    "sklearn": "1.9.1"
  },
  "test_samples": [
    {
      "index": 52,
      "name": "mazda rx2 coupe",
      "brand": "mazda",
      "carbody": "hatchback",
      "enginesize": 91,
      "horsepower": 68,
      "actual": 6795.0
    },
    {
      "index": 181,
      "name": "toyouta tercel",
      "brand": "toyota",
      "carbody": "wagon",
      "enginesize": 161,
      "horsepower": 156,
      "actual": 15750.0
    },
    {
      "index": 5,
      "name": "audi fox",
      "brand": "audi",
      "carbody": "sedan",
      "enginesize": 136,
      "horsepower": 110,
      "actual": 15250.0
    },
    {
      "index": 18,
      "name": "chevrolet impala",
      "brand": "chevrolet",
      "carbody": "hatchback",
      "enginesize": 61,
      "horsepower": 48,
      "actual": 5151.0
    },
    {
      "index": 188,
      "name": "volkswagen dasher",
      "brand": "volkswagen",
      "carbody": "sedan",
      "enginesize": 109,
      "horsepower": 100,
      "actual": 9995.0
    },
    {
      "index": 170,
      "name": "toyota tercel",
      "brand": "toyota",
      "carbody": "hardtop",
      "enginesize": 146,
      "horsepower": 116,
      "actual": 11199.0
    },
    {
      "index": 76,
      "name": "mitsubishi mirage",
      "brand": "mitsubishi",
      "carbody": "hatchback",
      "enginesize": 92,
      "horsepower": 68,
      "actual": 5389.0
    },
    {
      "index": 154,
      "name": "toyota corolla 1600 (sw)",
      "brand": "toyota",
      "carbody": "wagon",
      "enginesize": 92,
      "horsepower": 62,
      "actual": 7898.0
    },
    {
      "index": 104,
      "name": "nissan teana",
      "brand": "nissan",
      "carbody": "hatchback",
      "enginesize": 181,
      "horsepower": 160,
      "actual": 17199.0
    },
    {
      "index": 33,
      "name": "honda accord cvcc",
      "brand": "honda",
      "carbody": "hatchback",
      "enginesize": 92,
      "horsepower": 76,
      "actual": 6529.0
    },
    {
      "index": 12,
      "name": "bmw x1",
      "brand": "bmw",
      "carbody": "sedan",
      "enginesize": 164,
      "horsepower": 121,
      "actual": 20970.0
    },
    {
      "index": 129,
      "name": "porsche cayenne",
      "brand": "porsche",
      "carbody": "hatchback",
      "enginesize": 203,
      "horsepower": 288,
      "actual": 31400.5
    },
    {
      "index": 55,
      "name": "mazda 626",
      "brand": "mazda",
      "carbody": "hatchback",
      "enginesize": 70,
      "horsepower": 101,
      "actual": 10945.0
    },
    {
      "index": 66,
      "name": "mazda rx-7 gs",
      "brand": "mazda",
      "carbody": "sedan",
      "enginesize": 134,
      "horsepower": 72,
      "actual": 18344.0
    },
    {
      "index": 45,
      "name": "isuzu D-Max V-Cross",
      "brand": "isuzu",
      "carbody": "sedan",
      "enginesize": 90,
      "horsepower": 70,
      "actual": 8916.5
    },
    {
      "index": 169,
      "name": "toyota starlet",
      "brand": "toyota",
      "carbody": "hatchback",
      "enginesize": 146,
      "horsepower": 116,
      "actual": 9989.0
    },
    {
      "index": 130,
      "name": "renault 12tl",
      "brand": "renault",
      "carbody": "wagon",
      "enginesize": 132,
      "horsepower": 90,
      "actual": 9295.0
    },
    {
      "index": 7,
      "name": "audi 5000",
      "brand": "audi",
      "carbody": "wagon",
      "enginesize": 136,
      "horsepower": 110,
      "actual": 18920.0
    },
    {
      "index": 37,
      "name": "honda accord",
      "brand": "honda",
      "carbody": "hatchback",
      "enginesize": 110,
      "horsepower": 86,
      "actual": 7895.0
    },
    {
      "index": 152,
      "name": "toyota corolla 1200",
      "brand": "toyota",
      "carbody": "hatchback",
      "enginesize": 92,
      "horsepower": 62,
      "actual": 6488.0
    },
    {
      "index": 80,
      "name": "mitsubishi mirage g4",
      "brand": "mitsubishi",
      "carbody": "hatchback",
      "enginesize": 110,
      "horsepower": 116,
      "actual": 9959.0
    },
    {
      "index": 111,
      "name": "peugeot 504",
      "brand": "peugeot",
      "carbody": "sedan",
      "enginesize": 120,
      "horsepower": 95,
      "actual": 15580.0
    },
    {
      "index": 131,
      "name": "renault 5 gtl",
      "brand": "renault",
      "carbody": "hatchback",
      "enginesize": 132,
      "horsepower": 90,
      "actual": 9895.0
    },
    {
      "index": 171,
      "name": "toyota corolla",
      "brand": "toyota",
      "carbody": "hatchback",
      "enginesize": 146,
      "horsepower": 116,
      "actual": 11549.0
    },
    {
      "index": 179,
      "name": "toyota corona",
      "brand": "toyota",
      "carbody": "hatchback",
      "enginesize": 171,
      "horsepower": 161,
      "actual": 15998.0
    },
    {
      "index": 138,
      "name": "subaru",
      "brand": "subaru",
      "carbody": "hatchback",
      "enginesize": 97,
      "horsepower": 69,
      "actual": 5118.0
    },
    {
      "index": 156,
      "name": "toyota mark ii",
      "brand": "toyota",
      "carbody": "sedan",
      "enginesize": 98,
      "horsepower": 70,
      "actual": 6938.0
    },
    {
      "index": 113,
      "name": "peugeot 504",
      "brand": "peugeot",
      "carbody": "wagon",
      "enginesize": 120,
      "horsepower": 95,
      "actual": 16695.0
    },
    {
      "index": 161,
      "name": "toyota corolla",
      "brand": "toyota",
      "carbody": "hatchback",
      "enginesize": 98,
      "horsepower": 70,
      "actual": 8358.0
    },
    {
      "index": 89,
      "name": "Nissan versa",
      "brand": "nissan",
      "carbody": "sedan",
      "enginesize": 97,
      "horsepower": 69,
      "actual": 5499.0
    },
    {
      "index": 183,
      "name": "volkswagen 1131 deluxe sedan",
      "brand": "volkswagen",
      "carbody": "sedan",
      "enginesize": 109,
      "horsepower": 85,
      "actual": 7975.0
    },
    {
      "index": 193,
      "name": "volkswagen dasher",
      "brand": "volkswagen",
      "carbody": "wagon",
      "enginesize": 109,
      "horsepower": 88,
      "actual": 12290.0
    },
    {
      "index": 125,
      "name": "porsche macan",
      "brand": "porsche",
      "carbody": "hatchback",
      "enginesize": 151,
      "horsepower": 143,
      "actual": 22018.0
    },
    {
      "index": 173,
      "name": "toyota corolla",
      "brand": "toyota",
      "carbody": "sedan",
      "enginesize": 122,
      "horsepower": 92,
      "actual": 8948.0
    },
    {
      "index": 92,
      "name": "nissan latio",
      "brand": "nissan",
      "carbody": "sedan",
      "enginesize": 97,
      "horsepower": 69,
      "actual": 6849.0
    },
    {
      "index": 16,
      "name": "bmw x5",
      "brand": "bmw",
      "carbody": "sedan",
      "enginesize": 209,
      "horsepower": 182,
      "actual": 41315.0
    },
    {
      "index": 189,
      "name": "vw dasher",
      "brand": "volkswagen",
      "carbody": "convertible",
      "enginesize": 109,
      "horsepower": 90,
      "actual": 11595.0
    },
    {
      "index": 136,
      "name": "saab 99gle",
      "brand": "saab",
      "carbody": "hatchback",
      "enginesize": 121,
      "horsepower": 160,
      "actual": 18150.0
    },
    {
      "index": 22,
      "name": "dodge challenger se",
      "brand": "dodge",
      "carbody": "hatchback",
      "enginesize": 90,
      "horsepower": 68,
      "actual": 6377.0
    },
    {
      "index": 74,
      "name": "buick regal sport coupe (turbo)",
      "brand": "buick",
      "carbody": "hardtop",
      "enginesize": 304,
      "horsepower": 184,
      "actual": 45400.0
    },
    {
      "index": 44,
      "name": "isuzu D-Max ",
      "brand": "isuzu",
      "carbody": "sedan",
      "enginesize": 90,
      "horsepower": 70,
      "actual": 8916.5
    }
  ],
  "models": [
    {
      "key": "linear",
      "name": "標準線性回歸",
      "en": "Linear Regression (OLS)",
      "module": "sklearn.linear_model.LinearRegression",
      "desc": "最小平方法，沒有正則化，是其他模型的比較基準；One-Hot 後欄位多、資料少時容易 overfit。",
      "grid": {
        "fit_intercept": [
          true
        ]
      },
      "runs": {
        "40": {
          "n_train": 40,
          "best_params": {
            "fit_intercept": true
          },
          "converged": true,
          "test": {
            "mse": 34701539.75624539,
            "rmse": 5890.801283038275,
            "mae": 4183.6495608809555,
            "r2": 0.551754428222391,
            "adj_r2": -0.12061392944402272,
            "mape": 36.28694580403977,
            "max_error": 15474.531776883341
          },
          "train": {
            "mse": 1.5865324148767072e-22,
            "rmse": 1.259576283865613e-11,
            "mae": 9.686118573881686e-12,
            "r2": 1.0,
            "adj_r2": 1.0,
            "mape": 9.272184187750938e-14,
            "max_error": 3.637978807091713e-11
          },
          "cv_rmse": 3752.9657086961647,
          "predictions": [
            6145.23,
            8476.76,
            17586.66,
            967.24,
            10806.47,
            13612.11,
            6964.68,
            539.59,
            26064.59,
            8522.82,
            8254.57,
            38899.54,
            11845.0,
            4044.0,
            5129.7,
            11765.39,
            9756.45,
            18215.61,
            10344.1,
            -37.61,
            10445.99,
            18317.59,
            13208.73,
            13403.03,
            16960.1,
            11125.88,
            2924.51,
            16234.78,
            2039.62,
            8362.5,
            9519.25,
            8660.19,
            31204.0,
            -5884.21,
            7167.45,
            25840.47,
            11852.52,
            21489.54,
            6980.95,
            41472.69,
            8098.08
          ],
          "coef": [
            {
              "name": "brand_alfa-romero",
              "value": 0.0
            },
            {
              "name": "brand_audi",
              "value": 462.0904
            },
            {
              "name": "brand_bmw",
              "value": 0.0
            },
            {
              "name": "brand_buick",
              "value": 3434.2995
            },
            {
              "name": "brand_chevrolet",
              "value": -100.562
            },
            {
              "name": "brand_dodge",
              "value": -15.9235
            },
            {
              "name": "brand_honda",
              "value": 181.1588
            },
            {
              "name": "brand_isuzu",
              "value": 0.0
            },
            {
              "name": "brand_jaguar",
              "value": -0.0
            },
            {
              "name": "brand_mazda",
              "value": 213.9026
            },
            {
              "name": "brand_mercury",
              "value": -903.8892
            },
            {
              "name": "brand_mitsubishi",
              "value": -593.0443
            },
            {
              "name": "brand_nissan",
              "value": 262.5245
            },
            {
              "name": "brand_peugeot",
              "value": 422.5556
            },
            {
              "name": "brand_plymouth",
              "value": -531.2048
            },
            {
              "name": "brand_porsche",
              "value": -0.0
            },
            {
              "name": "brand_renault",
              "value": -0.0
            },
            {
              "name": "brand_saab",
              "value": -1074.0438
            },
            {
              "name": "brand_subaru",
              "value": -537.021
            },
            {
              "name": "brand_toyota",
              "value": -565.8718
            },
            {
              "name": "brand_volkswagen",
              "value": -266.077
            },
            {
              "name": "brand_volvo",
              "value": 348.9398
            },
            {
              "name": "fueltype_diesel",
              "value": -456.6226
            },
            {
              "name": "fueltype_gas",
              "value": 456.6226
            },
            {
              "name": "aspiration_std",
              "value": -865.2656
            },
            {
              "name": "aspiration_turbo",
              "value": 865.2656
            },
            {
              "name": "doornumber_four",
              "value": -395.1541
            },
            {
              "name": "doornumber_two",
              "value": 395.1541
            },
            {
              "name": "carbody_convertible",
              "value": 0.0
            },
            {
              "name": "carbody_hardtop",
              "value": 0.0
            },
            {
              "name": "carbody_hatchback",
              "value": -256.9554
            },
            {
              "name": "carbody_sedan",
              "value": 295.7391
            },
            {
              "name": "carbody_wagon",
              "value": -86.0089
            },
            {
              "name": "drivewheel_4wd",
              "value": -350.0256
            },
            {
              "name": "drivewheel_fwd",
              "value": 98.597
            },
            {
              "name": "drivewheel_rwd",
              "value": 133.8988
            },
            {
              "name": "enginelocation_front",
              "value": -0.0
            },
            {
              "name": "enginelocation_rear",
              "value": 0.0
            },
            {
              "name": "enginetype_dohc",
              "value": -70.3734
            },
            {
              "name": "enginetype_dohcv",
              "value": 0.0
            },
            {
              "name": "enginetype_l",
              "value": 422.5556
            },
            {
              "name": "enginetype_ohc",
              "value": 961.268
            },
            {
              "name": "enginetype_ohcf",
              "value": -537.021
            },
            {
              "name": "enginetype_ohcv",
              "value": -1131.3079
            },
            {
              "name": "enginetype_rotor",
              "value": -442.431
            },
            {
              "name": "fuelsystem_1bbl",
              "value": 181.1588
            },
            {
              "name": "fuelsystem_2bbl",
              "value": 598.2179
            },
            {
              "name": "fuelsystem_4bbl",
              "value": -442.431
            },
            {
              "name": "fuelsystem_idi",
              "value": -456.6226
            },
            {
              "name": "fuelsystem_mfi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_mpfi",
              "value": 46.6043
            },
            {
              "name": "fuelsystem_spdi",
              "value": -864.8351
            },
            {
              "name": "fuelsystem_spfi",
              "value": 0.0
            },
            {
              "name": "symboling",
              "value": 1781.0474
            },
            {
              "name": "wheelbase",
              "value": -4284.7149
            },
            {
              "name": "carlength",
              "value": 1408.2553
            },
            {
              "name": "carwidth",
              "value": 1328.1384
            },
            {
              "name": "carheight",
              "value": -246.1948
            },
            {
              "name": "curbweight",
              "value": 4888.3067
            },
            {
              "name": "cylindernumber",
              "value": 781.2509
            },
            {
              "name": "enginesize",
              "value": 463.4284
            },
            {
              "name": "boreratio",
              "value": 2241.1719
            },
            {
              "name": "stroke",
              "value": -1976.5948
            },
            {
              "name": "compressionratio",
              "value": 2429.2785
            },
            {
              "name": "horsepower",
              "value": 112.2362
            },
            {
              "name": "peakrpm",
              "value": 2391.3764
            },
            {
              "name": "citympg",
              "value": -1.7224
            },
            {
              "name": "highwaympg",
              "value": 435.5629
            }
          ],
          "feature_curve": [
            {
              "k": 1,
              "added": "enginesize",
              "rmse": 4363.3906660490575,
              "r2": 0.7540677636899356,
              "train_rmse": 3216.914667502933,
              "train_r2": 0.6695124367408547
            },
            {
              "k": 2,
              "added": "peakrpm",
              "rmse": 4114.106005457748,
              "r2": 0.7813657395822554,
              "train_rmse": 3012.1148668120054,
              "train_r2": 0.7102528996130414
            },
            {
              "k": 3,
              "added": "enginetype",
              "rmse": 3907.4966499994143,
              "r2": 0.802773852705198,
              "train_rmse": 2517.9159892969906,
              "train_r2": 0.7975310126996791
            },
            {
              "k": 4,
              "added": "stroke",
              "rmse": 3358.7625232886808,
              "r2": 0.8542777528300848,
              "train_rmse": 2300.5062000466132,
              "train_r2": 0.8309859318304568
            },
            {
              "k": 5,
              "added": "aspiration",
              "rmse": 3196.8189917613995,
              "r2": 0.8679910564023767,
              "train_rmse": 2129.6854860878843,
              "train_r2": 0.8551538415351337
            },
            {
              "k": 6,
              "added": "symboling",
              "rmse": 3079.408575547506,
              "r2": 0.8775096453395613,
              "train_rmse": 2076.074634070945,
              "train_r2": 0.8623545171582142
            },
            {
              "k": 7,
              "added": "citympg",
              "rmse": 3003.8542183151208,
              "r2": 0.8834465948528263,
              "train_rmse": 2069.2752762695,
              "train_r2": 0.8632546469381954
            },
            {
              "k": 8,
              "added": "carbody",
              "rmse": 2958.783241450669,
              "r2": 0.8869179786943254,
              "train_rmse": 1998.1475969876042,
              "train_r2": 0.8724938392038554
            },
            {
              "k": 9,
              "added": "compressionratio",
              "rmse": 2956.0411156875657,
              "r2": 0.8871274847034739,
              "train_rmse": 1995.6040780991275,
              "train_r2": 0.8728182475836797
            },
            {
              "k": 10,
              "added": "enginelocation",
              "rmse": 2956.041115687566,
              "r2": 0.8871274847034739,
              "train_rmse": 1995.6040780991273,
              "train_r2": 0.8728182475836797
            },
            {
              "k": 11,
              "added": "doornumber",
              "rmse": 2988.907278114194,
              "r2": 0.8846036300038271,
              "train_rmse": 1993.137073307967,
              "train_r2": 0.8731325023590802
            },
            {
              "k": 12,
              "added": "fueltype",
              "rmse": 3004.1034074623612,
              "r2": 0.8834272563322371,
              "train_rmse": 1988.5268864954896,
              "train_r2": 0.8737187203833514
            },
            {
              "k": 13,
              "added": "carheight",
              "rmse": 3050.7703094888448,
              "r2": 0.879777353326974,
              "train_rmse": 1900.842462547973,
              "train_r2": 0.8846099691970616
            },
            {
              "k": 14,
              "added": "curbweight",
              "rmse": 3181.088946147033,
              "r2": 0.869286968340001,
              "train_rmse": 1795.1300034207184,
              "train_r2": 0.8970875658339821
            },
            {
              "k": 15,
              "added": "fuelsystem",
              "rmse": 3318.4592181532366,
              "r2": 0.8577539445740827,
              "train_rmse": 1694.0796559165938,
              "train_r2": 0.9083476313300035
            },
            {
              "k": 16,
              "added": "drivewheel",
              "rmse": 3609.7979329119153,
              "r2": 0.8316810372420711,
              "train_rmse": 1605.6935980340222,
              "train_r2": 0.9176617957818852
            },
            {
              "k": 17,
              "added": "carlength",
              "rmse": 4251.001532669587,
              "r2": 0.7665737003684108,
              "train_rmse": 1545.683649154351,
              "train_r2": 0.9237012777804495
            },
            {
              "k": 18,
              "added": "carwidth",
              "rmse": 4781.452534297341,
              "r2": 0.7046840117159419,
              "train_rmse": 1225.6643922323287,
              "train_r2": 0.952024536667921
            },
            {
              "k": 19,
              "added": "boreratio",
              "rmse": 4538.358724579928,
              "r2": 0.7339489949416491,
              "train_rmse": 1224.0821169423864,
              "train_r2": 0.9521483248635422
            },
            {
              "k": 20,
              "added": "wheelbase",
              "rmse": 4543.72225569786,
              "r2": 0.7333197736107582,
              "train_rmse": 1224.065140583744,
              "train_r2": 0.9521496521299966
            },
            {
              "k": 21,
              "added": "highwaympg",
              "rmse": 4660.781380739826,
              "r2": 0.7194018993155791,
              "train_rmse": 1222.1134417851786,
              "train_r2": 0.9523021195296312
            },
            {
              "k": 22,
              "added": "brand",
              "rmse": 6042.681004507527,
              "r2": 0.528342658312098,
              "train_rmse": 8.277151335737708e-12,
              "train_r2": 1.0
            },
            {
              "k": 23,
              "added": "cylindernumber",
              "rmse": 5884.711130385115,
              "r2": 0.5526807785418042,
              "train_rmse": 9.488867670928763e-12,
              "train_r2": 1.0
            },
            {
              "k": 24,
              "added": "horsepower",
              "rmse": 5890.8012830382995,
              "r2": 0.5517544282223872,
              "train_rmse": 1.2635922512347413e-11,
              "train_r2": 1.0
            }
          ]
        },
        "80": {
          "n_train": 80,
          "best_params": {
            "fit_intercept": true
          },
          "converged": true,
          "test": {
            "mse": 14242383.922415946,
            "rmse": 3773.90830869219,
            "mae": 2623.7186960362005,
            "r2": 0.8160287534898047,
            "adj_r2": 0.5400718837245119,
            "mape": 21.03512003909966,
            "max_error": 13791.159150574298
          },
          "train": {
            "mse": 695205.6777228017,
            "rmse": 833.7899482020647,
            "mae": 617.1881842773455,
            "r2": 0.9879380097151238,
            "adj_r2": 0.9826745957726324,
            "mape": 5.802236129265929,
            "max_error": 2367.3748980898836
          },
          "cv_rmse": 9137.725135956387,
          "predictions": [
            6821.68,
            17434.87,
            16970.75,
            -1834.41,
            8051.16,
            10782.57,
            5534.99,
            6294.59,
            14991.33,
            9912.73,
            23170.06,
            26244.67,
            11845.0,
            15533.83,
            6715.98,
            11006.5,
            12451.11,
            20815.08,
            10979.83,
            8209.3,
            11065.92,
            9137.4,
            12908.96,
            11561.08,
            17131.29,
            5650.56,
            7868.03,
            10593.79,
            7903.7,
            6737.47,
            7464.45,
            10163.1,
            18512.52,
            10751.67,
            7862.25,
            27523.84,
            13875.38,
            15661.52,
            5221.26,
            35137.15,
            5508.1
          ],
          "coef": [
            {
              "name": "brand_alfa-romero",
              "value": 17.4001
            },
            {
              "name": "brand_audi",
              "value": 526.2622
            },
            {
              "name": "brand_bmw",
              "value": 1062.9572
            },
            {
              "name": "brand_buick",
              "value": 1187.6044
            },
            {
              "name": "brand_chevrolet",
              "value": -241.0261
            },
            {
              "name": "brand_dodge",
              "value": -859.3385
            },
            {
              "name": "brand_honda",
              "value": 291.7697
            },
            {
              "name": "brand_isuzu",
              "value": -450.4197
            },
            {
              "name": "brand_jaguar",
              "value": 637.742
            },
            {
              "name": "brand_mazda",
              "value": -294.0015
            },
            {
              "name": "brand_mercury",
              "value": 212.3155
            },
            {
              "name": "brand_mitsubishi",
              "value": -721.6865
            },
            {
              "name": "brand_nissan",
              "value": -195.6609
            },
            {
              "name": "brand_peugeot",
              "value": -541.7365
            },
            {
              "name": "brand_plymouth",
              "value": -873.5485
            },
            {
              "name": "brand_porsche",
              "value": 718.7238
            },
            {
              "name": "brand_renault",
              "value": 0.0
            },
            {
              "name": "brand_saab",
              "value": 915.9827
            },
            {
              "name": "brand_subaru",
              "value": 211.8935
            },
            {
              "name": "brand_toyota",
              "value": -304.2969
            },
            {
              "name": "brand_volkswagen",
              "value": -494.6815
            },
            {
              "name": "brand_volvo",
              "value": 553.1411
            },
            {
              "name": "fueltype_diesel",
              "value": 235.0937
            },
            {
              "name": "fueltype_gas",
              "value": -235.0937
            },
            {
              "name": "aspiration_std",
              "value": -651.1086
            },
            {
              "name": "aspiration_turbo",
              "value": 651.1086
            },
            {
              "name": "doornumber_four",
              "value": 231.9112
            },
            {
              "name": "doornumber_two",
              "value": -231.9112
            },
            {
              "name": "carbody_convertible",
              "value": 721.4343
            },
            {
              "name": "carbody_hardtop",
              "value": -128.6731
            },
            {
              "name": "carbody_hatchback",
              "value": -7.8589
            },
            {
              "name": "carbody_sedan",
              "value": -44.0806
            },
            {
              "name": "carbody_wagon",
              "value": -96.3937
            },
            {
              "name": "drivewheel_4wd",
              "value": -102.7448
            },
            {
              "name": "drivewheel_fwd",
              "value": -310.6545
            },
            {
              "name": "drivewheel_rwd",
              "value": 371.1925
            },
            {
              "name": "enginelocation_front",
              "value": -718.7238
            },
            {
              "name": "enginelocation_rear",
              "value": 718.7238
            },
            {
              "name": "enginetype_dohc",
              "value": -59.2951
            },
            {
              "name": "enginetype_dohcv",
              "value": 0.0
            },
            {
              "name": "enginetype_l",
              "value": -541.7365
            },
            {
              "name": "enginetype_ohc",
              "value": 159.7905
            },
            {
              "name": "enginetype_ohcf",
              "value": 465.7531
            },
            {
              "name": "enginetype_ohcv",
              "value": -340.2997
            },
            {
              "name": "enginetype_rotor",
              "value": 326.9075
            },
            {
              "name": "fuelsystem_1bbl",
              "value": -413.2616
            },
            {
              "name": "fuelsystem_2bbl",
              "value": -23.6751
            },
            {
              "name": "fuelsystem_4bbl",
              "value": 326.9075
            },
            {
              "name": "fuelsystem_idi",
              "value": 235.0937
            },
            {
              "name": "fuelsystem_mfi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_mpfi",
              "value": -129.1382
            },
            {
              "name": "fuelsystem_spdi",
              "value": 12.158
            },
            {
              "name": "fuelsystem_spfi",
              "value": 244.7117
            },
            {
              "name": "symboling",
              "value": -147.5838
            },
            {
              "name": "wheelbase",
              "value": 2334.3051
            },
            {
              "name": "carlength",
              "value": -1332.5516
            },
            {
              "name": "carwidth",
              "value": 689.0237
            },
            {
              "name": "carheight",
              "value": -631.065
            },
            {
              "name": "curbweight",
              "value": 1803.8566
            },
            {
              "name": "cylindernumber",
              "value": 1334.0004
            },
            {
              "name": "enginesize",
              "value": 3212.916
            },
            {
              "name": "boreratio",
              "value": -1141.6466
            },
            {
              "name": "stroke",
              "value": 817.0467
            },
            {
              "name": "compressionratio",
              "value": -1106.4002
            },
            {
              "name": "horsepower",
              "value": -1377.958
            },
            {
              "name": "peakrpm",
              "value": 556.3516
            },
            {
              "name": "citympg",
              "value": -1711.6885
            },
            {
              "name": "highwaympg",
              "value": 1828.5646
            }
          ],
          "feature_curve": [
            {
              "k": 1,
              "added": "enginesize",
              "rmse": 4237.184730936213,
              "r2": 0.7680886203333048,
              "train_rmse": 3297.240004843054,
              "train_r2": 0.8113717286005744
            },
            {
              "k": 2,
              "added": "brand",
              "rmse": 3526.6850390738155,
              "r2": 0.8393426447530539,
              "train_rmse": 1674.7043573830454,
              "train_r2": 0.95133889523236
            },
            {
              "k": 3,
              "added": "enginetype",
              "rmse": 3331.98892256319,
              "r2": 0.8565916760354442,
              "train_rmse": 1446.4062309299838,
              "train_r2": 0.9637017044836651
            },
            {
              "k": 4,
              "added": "boreratio",
              "rmse": 3289.338935381776,
              "r2": 0.8602394780601118,
              "train_rmse": 1443.9253110304278,
              "train_r2": 0.9638261175714707
            },
            {
              "k": 5,
              "added": "peakrpm",
              "rmse": 3238.0724563946933,
              "r2": 0.8645620451071967,
              "train_rmse": 1440.4456276883727,
              "train_r2": 0.9640002567531695
            },
            {
              "k": 6,
              "added": "symboling",
              "rmse": 3208.12660360903,
              "r2": 0.8670555352753072,
              "train_rmse": 1414.2031276313587,
              "train_r2": 0.9653000178973938
            },
            {
              "k": 7,
              "added": "cylindernumber",
              "rmse": 3149.2536598016222,
              "r2": 0.8718901425805992,
              "train_rmse": 1390.2324455619357,
              "train_r2": 0.9664663749590223
            },
            {
              "k": 8,
              "added": "fueltype",
              "rmse": 3147.555290941742,
              "r2": 0.8720282826905726,
              "train_rmse": 1390.21510507042,
              "train_r2": 0.9664672114895116
            },
            {
              "k": 9,
              "added": "compressionratio",
              "rmse": 3102.119531951224,
              "r2": 0.8756962247837294,
              "train_rmse": 1252.8703474938193,
              "train_r2": 0.9727655928838684
            },
            {
              "k": 10,
              "added": "doornumber",
              "rmse": 3096.7426348951035,
              "r2": 0.876126762263167,
              "train_rmse": 1242.4067689482526,
              "train_r2": 0.9732185996477468
            },
            {
              "k": 11,
              "added": "horsepower",
              "rmse": 3086.799533658107,
              "r2": 0.8769209559865232,
              "train_rmse": 1204.8107356278701,
              "train_r2": 0.9748149207703134
            },
            {
              "k": 12,
              "added": "carheight",
              "rmse": 3085.6062061161915,
              "r2": 0.8770160999837132,
              "train_rmse": 1203.3761029775987,
              "train_r2": 0.9748748635051115
            },
            {
              "k": 13,
              "added": "drivewheel",
              "rmse": 3082.2494991906083,
              "r2": 0.877283532919561,
              "train_rmse": 1200.0245042826184,
              "train_r2": 0.9750146238112347
            },
            {
              "k": 14,
              "added": "enginelocation",
              "rmse": 3086.8512015852275,
              "r2": 0.8769168356721144,
              "train_rmse": 1200.0245042826186,
              "train_r2": 0.9750146238112347
            },
            {
              "k": 15,
              "added": "carbody",
              "rmse": 3138.791257371182,
              "r2": 0.8727399378685063,
              "train_rmse": 1187.6832497127148,
              "train_r2": 0.9755258889073787
            },
            {
              "k": 16,
              "added": "highwaympg",
              "rmse": 3226.921607106791,
              "r2": 0.8654932459038343,
              "train_rmse": 1185.4277663576713,
              "train_r2": 0.9756187563199935
            },
            {
              "k": 17,
              "added": "citympg",
              "rmse": 3288.3003160756903,
              "r2": 0.8603277237910131,
              "train_rmse": 1174.7558464556396,
              "train_r2": 0.9760557689732031
            },
            {
              "k": 18,
              "added": "curbweight",
              "rmse": 3334.058076501245,
              "r2": 0.8564135085561657,
              "train_rmse": 1047.3947172768046,
              "train_r2": 0.9809661596495115
            },
            {
              "k": 19,
              "added": "stroke",
              "rmse": 3327.653149773186,
              "r2": 0.8569646552810647,
              "train_rmse": 1047.3788015898665,
              "train_r2": 0.9809667381025772
            },
            {
              "k": 20,
              "added": "fuelsystem",
              "rmse": 3374.7025572366147,
              "r2": 0.8528913318664074,
              "train_rmse": 993.9885722535541,
              "train_r2": 0.9828577254358988
            },
            {
              "k": 21,
              "added": "wheelbase",
              "rmse": 3462.7018703503154,
              "r2": 0.8451192420016097,
              "train_rmse": 948.4165628817146,
              "train_r2": 0.9843935572500179
            },
            {
              "k": 22,
              "added": "carlength",
              "rmse": 3466.909478131258,
              "r2": 0.8447426150548203,
              "train_rmse": 939.1102375540431,
              "train_r2": 0.9846983306227822
            },
            {
              "k": 23,
              "added": "carwidth",
              "rmse": 3471.357794696372,
              "r2": 0.8443439446710452,
              "train_rmse": 913.9613119183192,
              "train_r2": 0.9855068999993541
            },
            {
              "k": 24,
              "added": "aspiration",
              "rmse": 3773.908308692153,
              "r2": 0.8160287534898083,
              "train_rmse": 833.7899482020647,
              "train_r2": 0.9879380097151238
            }
          ]
        },
        "120": {
          "n_train": 120,
          "best_params": {
            "fit_intercept": true
          },
          "converged": true,
          "test": {
            "mse": 9521288.906445093,
            "rmse": 3085.6585855283947,
            "mae": 2109.4729406829815,
            "r2": 0.8770119245454756,
            "adj_r2": 0.6925298113636891,
            "mape": 17.579845136873182,
            "max_error": 11337.444835747865
          },
          "train": {
            "mse": 1137154.3741217733,
            "rmse": 1066.3744061640703,
            "mae": 861.093818080638,
            "r2": 0.9810628609170851,
            "adj_r2": 0.9762787415698223,
            "mape": 7.9161561540107215,
            "max_error": 3301.252443661717
          },
          "cv_rmse": 2422.703757822558,
          "predictions": [
            6345.11,
            18191.95,
            15745.04,
            -1587.74,
            9392.33,
            13524.19,
            6591.05,
            5060.0,
            15819.31,
            7857.41,
            21439.59,
            29762.98,
            12732.65,
            15243.73,
            7418.95,
            12084.8,
            10013.73,
            19023.44,
            8595.13,
            7721.86,
            9936.49,
            11131.29,
            10570.36,
            12890.13,
            18649.94,
            6393.76,
            7612.74,
            12416.0,
            7275.15,
            5904.78,
            7996.49,
            10289.26,
            18892.57,
            10288.56,
            7367.37,
            29977.56,
            13733.45,
            15461.59,
            4615.92,
            36630.91,
            6133.13
          ],
          "coef": [
            {
              "name": "brand_alfa-romero",
              "value": 270.9914
            },
            {
              "name": "brand_audi",
              "value": 428.6138
            },
            {
              "name": "brand_bmw",
              "value": 1253.4925
            },
            {
              "name": "brand_buick",
              "value": 795.3839
            },
            {
              "name": "brand_chevrolet",
              "value": -399.8352
            },
            {
              "name": "brand_dodge",
              "value": -647.6829
            },
            {
              "name": "brand_honda",
              "value": 90.9827
            },
            {
              "name": "brand_isuzu",
              "value": -385.5068
            },
            {
              "name": "brand_jaguar",
              "value": 249.713
            },
            {
              "name": "brand_mazda",
              "value": -30.3683
            },
            {
              "name": "brand_mercury",
              "value": -141.319
            },
            {
              "name": "brand_mitsubishi",
              "value": -618.4667
            },
            {
              "name": "brand_nissan",
              "value": -169.1239
            },
            {
              "name": "brand_peugeot",
              "value": -469.6585
            },
            {
              "name": "brand_plymouth",
              "value": -813.9228
            },
            {
              "name": "brand_porsche",
              "value": 579.1866
            },
            {
              "name": "brand_renault",
              "value": 0.0
            },
            {
              "name": "brand_saab",
              "value": 767.9386
            },
            {
              "name": "brand_subaru",
              "value": 34.4898
            },
            {
              "name": "brand_toyota",
              "value": -266.91
            },
            {
              "name": "brand_volkswagen",
              "value": -171.8237
            },
            {
              "name": "brand_volvo",
              "value": 46.4361
            },
            {
              "name": "fueltype_diesel",
              "value": 829.7359
            },
            {
              "name": "fueltype_gas",
              "value": -829.7359
            },
            {
              "name": "aspiration_std",
              "value": -442.1963
            },
            {
              "name": "aspiration_turbo",
              "value": 442.1963
            },
            {
              "name": "doornumber_four",
              "value": 296.701
            },
            {
              "name": "doornumber_two",
              "value": -296.701
            },
            {
              "name": "carbody_convertible",
              "value": 770.1928
            },
            {
              "name": "carbody_hardtop",
              "value": 95.3492
            },
            {
              "name": "carbody_hatchback",
              "value": -90.6342
            },
            {
              "name": "carbody_sedan",
              "value": -32.3405
            },
            {
              "name": "carbody_wagon",
              "value": -257.2112
            },
            {
              "name": "drivewheel_4wd",
              "value": -178.9647
            },
            {
              "name": "drivewheel_fwd",
              "value": -344.9424
            },
            {
              "name": "drivewheel_rwd",
              "value": 427.9856
            },
            {
              "name": "enginelocation_front",
              "value": -579.1866
            },
            {
              "name": "enginelocation_rear",
              "value": 579.1866
            },
            {
              "name": "enginetype_dohc",
              "value": -112.0767
            },
            {
              "name": "enginetype_dohcv",
              "value": 0.0
            },
            {
              "name": "enginetype_l",
              "value": -469.6585
            },
            {
              "name": "enginetype_ohc",
              "value": 301.404
            },
            {
              "name": "enginetype_ohcf",
              "value": 312.1986
            },
            {
              "name": "enginetype_ohcv",
              "value": -516.7089
            },
            {
              "name": "enginetype_rotor",
              "value": 369.9966
            },
            {
              "name": "fuelsystem_1bbl",
              "value": -581.1281
            },
            {
              "name": "fuelsystem_2bbl",
              "value": -19.6395
            },
            {
              "name": "fuelsystem_4bbl",
              "value": 369.9966
            },
            {
              "name": "fuelsystem_idi",
              "value": 829.7359
            },
            {
              "name": "fuelsystem_mfi",
              "value": -0.0
            },
            {
              "name": "fuelsystem_mpfi",
              "value": -308.0488
            },
            {
              "name": "fuelsystem_spdi",
              "value": -279.0773
            },
            {
              "name": "fuelsystem_spfi",
              "value": 156.0852
            },
            {
              "name": "symboling",
              "value": 125.7652
            },
            {
              "name": "wheelbase",
              "value": 2298.8599
            },
            {
              "name": "carlength",
              "value": -1315.8825
            },
            {
              "name": "carwidth",
              "value": 290.5174
            },
            {
              "name": "carheight",
              "value": -488.7253
            },
            {
              "name": "curbweight",
              "value": 2524.843
            },
            {
              "name": "cylindernumber",
              "value": 432.0909
            },
            {
              "name": "enginesize",
              "value": 3348.6593
            },
            {
              "name": "boreratio",
              "value": -782.686
            },
            {
              "name": "stroke",
              "value": 135.1424
            },
            {
              "name": "compressionratio",
              "value": -3155.0166
            },
            {
              "name": "horsepower",
              "value": 520.8508
            },
            {
              "name": "peakrpm",
              "value": 963.6752
            },
            {
              "name": "citympg",
              "value": 761.0303
            },
            {
              "name": "highwaympg",
              "value": 531.076
            }
          ],
          "feature_curve": [
            {
              "k": 1,
              "added": "enginesize",
              "rmse": 4105.210035979613,
              "r2": 0.782310227108082,
              "train_rmse": 3627.346544582245,
              "train_r2": 0.7808845304534857
            },
            {
              "k": 2,
              "added": "brand",
              "rmse": 3425.582418545767,
              "r2": 0.848422023772148,
              "train_rmse": 2019.5163136846888,
              "train_r2": 0.9320812516080229
            },
            {
              "k": 3,
              "added": "peakrpm",
              "rmse": 3195.475323180014,
              "r2": 0.8681020035617523,
              "train_rmse": 1933.9574659563389,
              "train_r2": 0.937714238393865
            },
            {
              "k": 4,
              "added": "enginelocation",
              "rmse": 2992.4152164600087,
              "r2": 0.8843326005855073,
              "train_rmse": 1933.9574659563384,
              "train_r2": 0.9377142383938651
            },
            {
              "k": 5,
              "added": "horsepower",
              "rmse": 2893.7317682295056,
              "r2": 0.8918357342200504,
              "train_rmse": 1747.3423632200024,
              "train_r2": 0.9491546834975222
            },
            {
              "k": 6,
              "added": "fueltype",
              "rmse": 2860.1771606517714,
              "r2": 0.8943296536006612,
              "train_rmse": 1702.484820712473,
              "train_r2": 0.9517317626635419
            },
            {
              "k": 7,
              "added": "compressionratio",
              "rmse": 2816.4678536890856,
              "r2": 0.8975346896569673,
              "train_rmse": 1680.1598479772829,
              "train_r2": 0.9529893618834955
            },
            {
              "k": 8,
              "added": "boreratio",
              "rmse": 2800.8035367011507,
              "r2": 0.8986712804458777,
              "train_rmse": 1678.035878487815,
              "train_r2": 0.9531081434972064
            },
            {
              "k": 9,
              "added": "carbody",
              "rmse": 2798.327504597376,
              "r2": 0.8988503592417533,
              "train_rmse": 1628.5407125241113,
              "train_r2": 0.9558335815436235
            },
            {
              "k": 10,
              "added": "cylindernumber",
              "rmse": 2790.672671168866,
              "r2": 0.8994029926432704,
              "train_rmse": 1524.5808487709742,
              "train_r2": 0.9612924340293701
            },
            {
              "k": 11,
              "added": "carwidth",
              "rmse": 2736.891705356178,
              "r2": 0.9032429788889179,
              "train_rmse": 1411.3028864627659,
              "train_r2": 0.9668307690564953
            },
            {
              "k": 12,
              "added": "carheight",
              "rmse": 2733.8400190082566,
              "r2": 0.9034586304346606,
              "train_rmse": 1407.9951844636862,
              "train_r2": 0.9669860657869971
            },
            {
              "k": 13,
              "added": "carlength",
              "rmse": 2738.9196707924493,
              "r2": 0.9030995369024776,
              "train_rmse": 1407.6188921937783,
              "train_r2": 0.9670037096374132
            },
            {
              "k": 14,
              "added": "curbweight",
              "rmse": 2759.060810188382,
              "r2": 0.9016691468168869,
              "train_rmse": 1348.8000342595362,
              "train_r2": 0.969703666053069
            },
            {
              "k": 15,
              "added": "citympg",
              "rmse": 2723.834084120605,
              "r2": 0.9041640256892036,
              "train_rmse": 1346.951067926123,
              "train_r2": 0.969786670954372
            },
            {
              "k": 16,
              "added": "fuelsystem",
              "rmse": 2688.631589092805,
              "r2": 0.9066251631067322,
              "train_rmse": 1282.5182435339023,
              "train_r2": 0.9726081070495587
            },
            {
              "k": 17,
              "added": "symboling",
              "rmse": 2681.3956740687963,
              "r2": 0.9071270862382922,
              "train_rmse": 1282.2388203355677,
              "train_r2": 0.9726200415332847
            },
            {
              "k": 18,
              "added": "highwaympg",
              "rmse": 2682.744236872958,
              "r2": 0.9070336450105422,
              "train_rmse": 1282.1412898138274,
              "train_r2": 0.9726242065609441
            },
            {
              "k": 19,
              "added": "wheelbase",
              "rmse": 2697.3931080070365,
              "r2": 0.9060156051484424,
              "train_rmse": 1192.3581523699195,
              "train_r2": 0.9763239966141741
            },
            {
              "k": 20,
              "added": "drivewheel",
              "rmse": 2717.115474683832,
              "r2": 0.9046362206605283,
              "train_rmse": 1180.977045097577,
              "train_r2": 0.976773816384449
            },
            {
              "k": 21,
              "added": "aspiration",
              "rmse": 2770.2853659842235,
              "r2": 0.9008674499133611,
              "train_rmse": 1143.6083112486529,
              "train_r2": 0.9782204175920939
            },
            {
              "k": 22,
              "added": "doornumber",
              "rmse": 2898.2968430945425,
              "r2": 0.8914941908455191,
              "train_rmse": 1111.0939245893132,
              "train_r2": 0.9794412602736644
            },
            {
              "k": 23,
              "added": "stroke",
              "rmse": 2983.2608762258965,
              "r2": 0.88503921315858,
              "train_rmse": 1104.3355682678136,
              "train_r2": 0.9796906014252557
            },
            {
              "k": 24,
              "added": "enginetype",
              "rmse": 3085.6585855283965,
              "r2": 0.8770119245454755,
              "train_rmse": 1066.3744061640703,
              "train_r2": 0.9810628609170851
            }
          ]
        },
        "164": {
          "n_train": 164,
          "best_params": {
            "fit_intercept": true
          },
          "converged": true,
          "test": {
            "mse": 9538762.884187074,
            "rmse": 3088.4887702867036,
            "mae": 1859.1244667849082,
            "r2": 0.8767862102630777,
            "adj_r2": 0.6919655256576942,
            "mape": 15.39969536592383,
            "max_error": 12251.88440651793
          },
          "train": {
            "mse": 1512655.604112855,
            "rmse": 1229.9006480658732,
            "mae": 986.3392866867412,
            "r2": 0.9748016781943257,
            "adj_r2": 0.9704508888178064,
            "mape": 8.430446720940814,
            "max_error": 3617.5236137776556
          },
          "cv_rmse": 2167.803233388518,
          "predictions": [
            6448.08,
            16705.08,
            15030.93,
            -1295.37,
            9487.06,
            11294.68,
            6678.59,
            4900.52,
            16382.14,
            8058.93,
            21256.41,
            29795.65,
            12731.05,
            14237.87,
            7920.25,
            10780.04,
            9982.1,
            19510.1,
            8369.06,
            7674.78,
            9972.67,
            13164.36,
            10690.42,
            11689.43,
            17888.73,
            7275.57,
            7532.5,
            14114.01,
            7202.05,
            5829.31,
            8482.94,
            10748.54,
            20100.34,
            9602.58,
            7254.02,
            29063.12,
            13546.13,
            14891.13,
            4787.53,
            35082.81,
            6876.51
          ],
          "coef": [
            {
              "name": "brand_alfa-romero",
              "value": 329.8922
            },
            {
              "name": "brand_audi",
              "value": 224.8817
            },
            {
              "name": "brand_bmw",
              "value": 1247.4246
            },
            {
              "name": "brand_buick",
              "value": 888.3995
            },
            {
              "name": "brand_chevrolet",
              "value": -281.2914
            },
            {
              "name": "brand_dodge",
              "value": -693.8477
            },
            {
              "name": "brand_honda",
              "value": 171.7569
            },
            {
              "name": "brand_isuzu",
              "value": -213.0713
            },
            {
              "name": "brand_jaguar",
              "value": 367.6791
            },
            {
              "name": "brand_mazda",
              "value": -45.4513
            },
            {
              "name": "brand_mercury",
              "value": -33.9026
            },
            {
              "name": "brand_mitsubishi",
              "value": -748.481
            },
            {
              "name": "brand_nissan",
              "value": -142.6917
            },
            {
              "name": "brand_peugeot",
              "value": -443.5578
            },
            {
              "name": "brand_plymouth",
              "value": -620.6131
            },
            {
              "name": "brand_porsche",
              "value": 742.5683
            },
            {
              "name": "brand_renault",
              "value": -0.0
            },
            {
              "name": "brand_saab",
              "value": 605.9893
            },
            {
              "name": "brand_subaru",
              "value": -84.8255
            },
            {
              "name": "brand_toyota",
              "value": -328.5947
            },
            {
              "name": "brand_volkswagen",
              "value": -117.1071
            },
            {
              "name": "brand_volvo",
              "value": 158.8979
            },
            {
              "name": "fueltype_diesel",
              "value": 1002.6464
            },
            {
              "name": "fueltype_gas",
              "value": -1002.6464
            },
            {
              "name": "aspiration_std",
              "value": -446.5487
            },
            {
              "name": "aspiration_turbo",
              "value": 446.5487
            },
            {
              "name": "doornumber_four",
              "value": 280.8139
            },
            {
              "name": "doornumber_two",
              "value": -280.8139
            },
            {
              "name": "carbody_convertible",
              "value": 691.1245
            },
            {
              "name": "carbody_hardtop",
              "value": -82.7734
            },
            {
              "name": "carbody_hatchback",
              "value": -111.7444
            },
            {
              "name": "carbody_sedan",
              "value": 29.1251
            },
            {
              "name": "carbody_wagon",
              "value": -206.5854
            },
            {
              "name": "drivewheel_4wd",
              "value": -249.6231
            },
            {
              "name": "drivewheel_fwd",
              "value": -213.3234
            },
            {
              "name": "drivewheel_rwd",
              "value": 329.1442
            },
            {
              "name": "enginelocation_front",
              "value": -742.5683
            },
            {
              "name": "enginelocation_rear",
              "value": 742.5683
            },
            {
              "name": "enginetype_dohc",
              "value": -170.4295
            },
            {
              "name": "enginetype_dohcv",
              "value": 0.0
            },
            {
              "name": "enginetype_l",
              "value": -443.5578
            },
            {
              "name": "enginetype_ohc",
              "value": 93.4886
            },
            {
              "name": "enginetype_ohcf",
              "value": 280.1853
            },
            {
              "name": "enginetype_ohcv",
              "value": -488.1175
            },
            {
              "name": "enginetype_rotor",
              "value": 1056.978
            },
            {
              "name": "fuelsystem_1bbl",
              "value": -632.6934
            },
            {
              "name": "fuelsystem_2bbl",
              "value": 28.2663
            },
            {
              "name": "fuelsystem_4bbl",
              "value": -268.8152
            },
            {
              "name": "fuelsystem_idi",
              "value": 1002.6464
            },
            {
              "name": "fuelsystem_mfi",
              "value": -80.1369
            },
            {
              "name": "fuelsystem_mpfi",
              "value": -208.5634
            },
            {
              "name": "fuelsystem_spdi",
              "value": -257.9955
            },
            {
              "name": "fuelsystem_spfi",
              "value": 59.4888
            },
            {
              "name": "symboling",
              "value": 376.356
            },
            {
              "name": "wheelbase",
              "value": 2051.3131
            },
            {
              "name": "carlength",
              "value": -1601.0664
            },
            {
              "name": "carwidth",
              "value": 956.7044
            },
            {
              "name": "carheight",
              "value": -447.4795
            },
            {
              "name": "curbweight",
              "value": 2906.4331
            },
            {
              "name": "cylindernumber",
              "value": 848.6802
            },
            {
              "name": "enginesize",
              "value": 2612.6233
            },
            {
              "name": "boreratio",
              "value": -608.6932
            },
            {
              "name": "stroke",
              "value": -40.3722
            },
            {
              "name": "compressionratio",
              "value": -3647.1928
            },
            {
              "name": "horsepower",
              "value": -349.8511
            },
            {
              "name": "peakrpm",
              "value": 963.7498
            },
            {
              "name": "citympg",
              "value": 682.4934
            },
            {
              "name": "highwaympg",
              "value": 188.2531
            }
          ],
          "feature_curve": [
            {
              "k": 1,
              "added": "enginesize",
              "rmse": 4103.113944084135,
              "r2": 0.7825324721447277,
              "train_rmse": 3813.510392325479,
              "train_r2": 0.757740160174077
            },
            {
              "k": 2,
              "added": "brand",
              "rmse": 3315.44922166307,
              "r2": 0.8580118750887502,
              "train_rmse": 2198.0168353563454,
              "train_r2": 0.9195189588032444
            },
            {
              "k": 3,
              "added": "peakrpm",
              "rmse": 3105.572794384981,
              "r2": 0.8754193221858401,
              "train_rmse": 2110.4204221160876,
              "train_r2": 0.925805874746434
            },
            {
              "k": 4,
              "added": "enginelocation",
              "rmse": 2921.4481939604784,
              "r2": 0.8897537969236498,
              "train_rmse": 2110.420422116087,
              "train_r2": 0.925805874746434
            },
            {
              "k": 5,
              "added": "horsepower",
              "rmse": 2846.417438070821,
              "r2": 0.8953439244907361,
              "train_rmse": 1908.4920405163564,
              "train_r2": 0.9393246537515912
            },
            {
              "k": 6,
              "added": "fueltype",
              "rmse": 2785.1056125503146,
              "r2": 0.8998039503382892,
              "train_rmse": 1874.207735684568,
              "train_r2": 0.9414850269406639
            },
            {
              "k": 7,
              "added": "compressionratio",
              "rmse": 2765.0068360562523,
              "r2": 0.901244866343422,
              "train_rmse": 1870.9821960713666,
              "train_r2": 0.9416862639175038
            },
            {
              "k": 8,
              "added": "boreratio",
              "rmse": 2743.4987869560077,
              "r2": 0.9027752562006753,
              "train_rmse": 1866.9035417516877,
              "train_r2": 0.9419402292735363
            },
            {
              "k": 9,
              "added": "cylindernumber",
              "rmse": 2690.908189639863,
              "r2": 0.9064669657504574,
              "train_rmse": 1818.1779090790492,
              "train_r2": 0.9449313651065596
            },
            {
              "k": 10,
              "added": "stroke",
              "rmse": 2681.350681028926,
              "r2": 0.9071302029731285,
              "train_rmse": 1818.1178020205602,
              "train_r2": 0.9449350060692279
            },
            {
              "k": 11,
              "added": "wheelbase",
              "rmse": 2635.8002396910397,
              "r2": 0.910258722276553,
              "train_rmse": 1771.2291227408793,
              "train_r2": 0.9477385992437931
            },
            {
              "k": 12,
              "added": "carlength",
              "rmse": 2640.4843982151783,
              "r2": 0.9099394751015373,
              "train_rmse": 1771.0517891934237,
              "train_r2": 0.9477490634299744
            },
            {
              "k": 13,
              "added": "doornumber",
              "rmse": 2641.064808951595,
              "r2": 0.9098998779422915,
              "train_rmse": 1769.0101998303746,
              "train_r2": 0.947869459086273
            },
            {
              "k": 14,
              "added": "carheight",
              "rmse": 2694.7379359965166,
              "r2": 0.9062005406808527,
              "train_rmse": 1713.4022053105346,
              "train_r2": 0.951095344903879
            },
            {
              "k": 15,
              "added": "carwidth",
              "rmse": 2725.355680193786,
              "r2": 0.9040569234444351,
              "train_rmse": 1642.0965735869668,
              "train_r2": 0.9550811171082654
            },
            {
              "k": 16,
              "added": "fuelsystem",
              "rmse": 2706.850306180744,
              "r2": 0.9053554216662867,
              "train_rmse": 1611.8903385614678,
              "train_r2": 0.9567184762778118
            },
            {
              "k": 17,
              "added": "aspiration",
              "rmse": 2767.051619523247,
              "r2": 0.9010987491412159,
              "train_rmse": 1579.9528970033732,
              "train_r2": 0.9584166152662045
            },
            {
              "k": 18,
              "added": "highwaympg",
              "rmse": 2828.516713899772,
              "r2": 0.8966561204306657,
              "train_rmse": 1572.963053034319,
              "train_r2": 0.9587837381296993
            },
            {
              "k": 19,
              "added": "curbweight",
              "rmse": 2792.8672245604616,
              "r2": 0.8992447137381828,
              "train_rmse": 1463.300791420097,
              "train_r2": 0.9643303562182104
            },
            {
              "k": 20,
              "added": "citympg",
              "rmse": 2784.448180714957,
              "r2": 0.899851247861145,
              "train_rmse": 1461.7630610549645,
              "train_r2": 0.9644052847285669
            },
            {
              "k": 21,
              "added": "enginetype",
              "rmse": 2846.8004607142657,
              "r2": 0.8953157569119533,
              "train_rmse": 1374.1273287735457,
              "train_r2": 0.9685453026215561
            },
            {
              "k": 22,
              "added": "carbody",
              "rmse": 2917.31624150002,
              "r2": 0.890065429989699,
              "train_rmse": 1259.0162203132734,
              "train_r2": 0.9735945114057583
            },
            {
              "k": 23,
              "added": "symboling",
              "rmse": 2996.322161980503,
              "r2": 0.8840303689743669,
              "train_rmse": 1245.7013194053413,
              "train_r2": 0.974150067931041
            },
            {
              "k": 24,
              "added": "drivewheel",
              "rmse": 3088.488770286698,
              "r2": 0.8767862102630781,
              "train_rmse": 1229.9006480658736,
              "train_r2": 0.9748016781943257
            }
          ]
        }
      }
    },
    {
      "key": "ridge",
      "name": "Ridge 回歸",
      "en": "Ridge Regression (L2)",
      "module": "sklearn.linear_model.Ridge",
      "desc": "加上 L2 懲罰 α·Σβ²，讓係數變小但不會歸零，可降低引擎大小、馬力、車重等特徵的共線性影響。",
      "grid": {
        "alpha": [
          0.001,
          0.0032,
          0.01,
          0.0316,
          0.1,
          0.3162,
          1.0,
          3.1623,
          10.0,
          31.6228,
          100.0,
          316.2278,
          1000.0,
          3162.2777,
          10000.0
        ]
      },
      "runs": {
        "40": {
          "n_train": 40,
          "best_params": {
            "alpha": 31.6228
          },
          "converged": true,
          "test": {
            "mse": 24997307.973951254,
            "rmse": 4999.730790147731,
            "mae": 2861.610921584879,
            "r2": 0.6771056072902886,
            "adj_r2": 0.19276401822572142,
            "mape": 19.649758499039688,
            "max_error": 21925.501824374976
          },
          "train": {
            "mse": 1611538.4195321675,
            "rmse": 1269.4638315179238,
            "mae": 865.1607845424347,
            "r2": 0.9485344399787647,
            "adj_r2": 0.8661895439447883,
            "mape": 7.263393874016708,
            "max_error": 4359.047751114136
          },
          "cv_rmse": 2399.948948582676,
          "predictions": [
            7108.92,
            16000.16,
            16045.83,
            1333.01,
            10178.97,
            12938.59,
            6799.59,
            7912.46,
            16778.36,
            8841.8,
            15068.06,
            21558.9,
            11329.16,
            12109.66,
            6804.24,
            12909.22,
            11752.83,
            18523.56,
            10774.18,
            6936.35,
            12442.25,
            13856.53,
            12025.09,
            13062.19,
            16819.69,
            6302.09,
            7703.91,
            14456.19,
            7886.82,
            7389.78,
            9864.73,
            10874.9,
            14535.59,
            11200.21,
            7342.49,
            19389.5,
            9122.81,
            16053.9,
            7085.48,
            30894.71,
            6889.69
          ],
          "coef": [
            {
              "name": "brand_alfa-romero",
              "value": 0.0
            },
            {
              "name": "brand_audi",
              "value": 517.6071
            },
            {
              "name": "brand_bmw",
              "value": 0.0
            },
            {
              "name": "brand_buick",
              "value": 882.9152
            },
            {
              "name": "brand_chevrolet",
              "value": -51.1247
            },
            {
              "name": "brand_dodge",
              "value": -49.7257
            },
            {
              "name": "brand_honda",
              "value": 57.9503
            },
            {
              "name": "brand_isuzu",
              "value": 0.0
            },
            {
              "name": "brand_jaguar",
              "value": 0.0
            },
            {
              "name": "brand_mazda",
              "value": -122.8527
            },
            {
              "name": "brand_mercury",
              "value": -47.53
            },
            {
              "name": "brand_mitsubishi",
              "value": -109.956
            },
            {
              "name": "brand_nissan",
              "value": -148.1117
            },
            {
              "name": "brand_peugeot",
              "value": -202.266
            },
            {
              "name": "brand_plymouth",
              "value": -36.3453
            },
            {
              "name": "brand_porsche",
              "value": 0.0
            },
            {
              "name": "brand_renault",
              "value": 0.0
            },
            {
              "name": "brand_saab",
              "value": 257.3238
            },
            {
              "name": "brand_subaru",
              "value": -155.0234
            },
            {
              "name": "brand_toyota",
              "value": -109.5256
            },
            {
              "name": "brand_volkswagen",
              "value": -229.4709
            },
            {
              "name": "brand_volvo",
              "value": 107.9363
            },
            {
              "name": "fueltype_diesel",
              "value": 24.7662
            },
            {
              "name": "fueltype_gas",
              "value": -24.7662
            },
            {
              "name": "aspiration_std",
              "value": -252.24
            },
            {
              "name": "aspiration_turbo",
              "value": 252.24
            },
            {
              "name": "doornumber_four",
              "value": -21.8444
            },
            {
              "name": "doornumber_two",
              "value": 21.8444
            },
            {
              "name": "carbody_convertible",
              "value": 0.0
            },
            {
              "name": "carbody_hardtop",
              "value": 0.0
            },
            {
              "name": "carbody_hatchback",
              "value": 41.5894
            },
            {
              "name": "carbody_sedan",
              "value": 52.1922
            },
            {
              "name": "carbody_wagon",
              "value": -135.6424
            },
            {
              "name": "drivewheel_4wd",
              "value": -11.8075
            },
            {
              "name": "drivewheel_fwd",
              "value": -205.6781
            },
            {
              "name": "drivewheel_rwd",
              "value": 234.7378
            },
            {
              "name": "enginelocation_front",
              "value": 0.0
            },
            {
              "name": "enginelocation_rear",
              "value": 0.0
            },
            {
              "name": "enginetype_dohc",
              "value": -38.865
            },
            {
              "name": "enginetype_dohcv",
              "value": 0.0
            },
            {
              "name": "enginetype_l",
              "value": -202.266
            },
            {
              "name": "enginetype_ohc",
              "value": 69.1087
            },
            {
              "name": "enginetype_ohcf",
              "value": -155.0234
            },
            {
              "name": "enginetype_ohcv",
              "value": 248.3841
            },
            {
              "name": "enginetype_rotor",
              "value": 104.4827
            },
            {
              "name": "fuelsystem_1bbl",
              "value": 57.9503
            },
            {
              "name": "fuelsystem_2bbl",
              "value": -332.3247
            },
            {
              "name": "fuelsystem_4bbl",
              "value": 104.4827
            },
            {
              "name": "fuelsystem_idi",
              "value": 24.7662
            },
            {
              "name": "fuelsystem_mfi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_mpfi",
              "value": 228.7712
            },
            {
              "name": "fuelsystem_spdi",
              "value": 95.557
            },
            {
              "name": "fuelsystem_spfi",
              "value": 0.0
            },
            {
              "name": "symboling",
              "value": 27.2941
            },
            {
              "name": "wheelbase",
              "value": 414.6537
            },
            {
              "name": "carlength",
              "value": 435.0994
            },
            {
              "name": "carwidth",
              "value": 646.6333
            },
            {
              "name": "carheight",
              "value": 58.106
            },
            {
              "name": "curbweight",
              "value": 456.6171
            },
            {
              "name": "cylindernumber",
              "value": 534.7958
            },
            {
              "name": "enginesize",
              "value": 466.9743
            },
            {
              "name": "boreratio",
              "value": -47.9979
            },
            {
              "name": "stroke",
              "value": 16.9711
            },
            {
              "name": "compressionratio",
              "value": -0.238
            },
            {
              "name": "horsepower",
              "value": 371.9479
            },
            {
              "name": "peakrpm",
              "value": 91.6295
            },
            {
              "name": "citympg",
              "value": -242.5674
            },
            {
              "name": "highwaympg",
              "value": -272.3852
            }
          ],
          "feature_curve": [
            {
              "k": 1,
              "added": "enginesize",
              "rmse": 5985.6910737441085,
              "r2": 0.5371973255643187,
              "train_rmse": 3799.3834178418842,
              "train_r2": 0.5389985566598852
            },
            {
              "k": 2,
              "added": "horsepower",
              "rmse": 5276.019447842828,
              "r2": 0.6404328251385345,
              "train_rmse": 3233.4566324892903,
              "train_r2": 0.6661048426933764
            },
            {
              "k": 3,
              "added": "carwidth",
              "rmse": 5061.513059106884,
              "r2": 0.6690762128853718,
              "train_rmse": 2623.3825534025837,
              "train_r2": 0.7802143714380169
            },
            {
              "k": 4,
              "added": "cylindernumber",
              "rmse": 4909.8989847633975,
              "r2": 0.6886044681746468,
              "train_rmse": 2524.654713532831,
              "train_r2": 0.7964458228576334
            },
            {
              "k": 5,
              "added": "drivewheel",
              "rmse": 4771.667056530094,
              "r2": 0.7058915322130388,
              "train_rmse": 2442.311080578137,
              "train_r2": 0.8095074484986805
            },
            {
              "k": 6,
              "added": "brand",
              "rmse": 4616.825153868399,
              "r2": 0.7246696306713816,
              "train_rmse": 1625.3191222621094,
              "train_r2": 0.915636744744173
            },
            {
              "k": 7,
              "added": "curbweight",
              "rmse": 4586.636963165736,
              "r2": 0.7282584828971135,
              "train_rmse": 1513.2043004681066,
              "train_r2": 0.926874108629712
            },
            {
              "k": 8,
              "added": "boreratio",
              "rmse": 4581.031165336165,
              "r2": 0.7289223231406636,
              "train_rmse": 1514.796609716281,
              "train_r2": 0.9267201303518284
            },
            {
              "k": 9,
              "added": "peakrpm",
              "rmse": 4572.669682959743,
              "r2": 0.7299109838072168,
              "train_rmse": 1487.9723250654695,
              "train_r2": 0.9292924569148736
            },
            {
              "k": 10,
              "added": "fueltype",
              "rmse": 4570.0997081941405,
              "r2": 0.730214494423869,
              "train_rmse": 1472.2572503752572,
              "train_r2": 0.9307781116175577
            },
            {
              "k": 11,
              "added": "symboling",
              "rmse": 4569.820326142246,
              "r2": 0.7302474787914108,
              "train_rmse": 1471.6579894394924,
              "train_r2": 0.9308344516780728
            },
            {
              "k": 12,
              "added": "enginelocation",
              "rmse": 4569.820326142246,
              "r2": 0.7302474787914108,
              "train_rmse": 1471.6579894394924,
              "train_r2": 0.9308344516780728
            },
            {
              "k": 13,
              "added": "compressionratio",
              "rmse": 4570.083524581341,
              "r2": 0.730216405146483,
              "train_rmse": 1472.0933360698866,
              "train_r2": 0.9307935244485921
            },
            {
              "k": 14,
              "added": "stroke",
              "rmse": 4573.052284597622,
              "r2": 0.7298657844684113,
              "train_rmse": 1471.4520941602502,
              "train_r2": 0.9308538038153081
            },
            {
              "k": 15,
              "added": "carheight",
              "rmse": 4577.5007504053165,
              "r2": 0.7293399792867612,
              "train_rmse": 1472.0125905849436,
              "train_r2": 0.9308011163003267
            },
            {
              "k": 16,
              "added": "doornumber",
              "rmse": 4574.479125437747,
              "r2": 0.7296971886870817,
              "train_rmse": 1471.5595547548648,
              "train_r2": 0.9308437039109859
            },
            {
              "k": 17,
              "added": "carbody",
              "rmse": 4588.6746486875945,
              "r2": 0.7280169783874806,
              "train_rmse": 1471.061926929236,
              "train_r2": 0.9308904682819463
            },
            {
              "k": 18,
              "added": "citympg",
              "rmse": 4614.262586355993,
              "r2": 0.724975189936768,
              "train_rmse": 1455.2497071111172,
              "train_r2": 0.9323681791122687
            },
            {
              "k": 19,
              "added": "carlength",
              "rmse": 4655.4176162695685,
              "r2": 0.7200473688045286,
              "train_rmse": 1427.8796518827835,
              "train_r2": 0.9348882678966772
            },
            {
              "k": 20,
              "added": "enginetype",
              "rmse": 4698.604735257698,
              "r2": 0.7148291786753365,
              "train_rmse": 1409.7871339012386,
              "train_r2": 0.9365278623825125
            },
            {
              "k": 21,
              "added": "highwaympg",
              "rmse": 4740.708683467452,
              "r2": 0.7096954786092988,
              "train_rmse": 1410.9945569608474,
              "train_r2": 0.9364190934212382
            },
            {
              "k": 22,
              "added": "wheelbase",
              "rmse": 4785.886557698113,
              "r2": 0.7041360421861007,
              "train_rmse": 1404.1033526101946,
              "train_r2": 0.9370386267460414
            },
            {
              "k": 23,
              "added": "fuelsystem",
              "rmse": 4872.711853360313,
              "r2": 0.6933035685076598,
              "train_rmse": 1347.0918636133706,
              "train_r2": 0.9420477282320379
            },
            {
              "k": 24,
              "added": "aspiration",
              "rmse": 4999.730790147731,
              "r2": 0.6771056072902886,
              "train_rmse": 1269.4638315179236,
              "train_r2": 0.9485344399787647
            }
          ]
        },
        "80": {
          "n_train": 80,
          "best_params": {
            "alpha": 31.6228
          },
          "converged": true,
          "test": {
            "mse": 14595759.33690548,
            "rmse": 3820.4396784801456,
            "mae": 2457.975842774263,
            "r2": 0.8114641443735333,
            "adj_r2": 0.5286603609338333,
            "mape": 19.462822000164607,
            "max_error": 16542.220840785463
          },
          "train": {
            "mse": 1881043.3331668992,
            "rmse": 1371.5113317675866,
            "mae": 966.8322462188291,
            "r2": 0.967363433387929,
            "adj_r2": 0.9531220225026616,
            "mape": 8.113742844057906,
            "max_error": 4830.324089543137
          },
          "cv_rmse": 3154.7645606756873,
          "predictions": [
            5924.86,
            18650.28,
            16004.37,
            -308.46,
            9886.79,
            15330.57,
            4897.0,
            7364.66,
            17734.73,
            7925.44,
            19980.91,
            27828.08,
            11374.33,
            13473.25,
            4699.03,
            13508.45,
            12392.77,
            18955.13,
            10582.62,
            6378.35,
            9965.66,
            13351.17,
            12378.3,
            13721.77,
            19172.28,
            5493.98,
            7704.08,
            13954.03,
            7619.21,
            6889.18,
            9278.3,
            10536.59,
            19476.66,
            12157.82,
            7222.2,
            24772.78,
            8460.4,
            17505.22,
            5973.06,
            35823.9,
            4410.3
          ],
          "coef": [
            {
              "name": "brand_alfa-romero",
              "value": -2.4977
            },
            {
              "name": "brand_audi",
              "value": 405.2891
            },
            {
              "name": "brand_bmw",
              "value": 536.7997
            },
            {
              "name": "brand_buick",
              "value": 1066.9528
            },
            {
              "name": "brand_chevrolet",
              "value": 32.0238
            },
            {
              "name": "brand_dodge",
              "value": -64.784
            },
            {
              "name": "brand_honda",
              "value": 137.9184
            },
            {
              "name": "brand_isuzu",
              "value": -278.5103
            },
            {
              "name": "brand_jaguar",
              "value": 760.0228
            },
            {
              "name": "brand_mazda",
              "value": -252.8576
            },
            {
              "name": "brand_mercury",
              "value": -90.4973
            },
            {
              "name": "brand_mitsubishi",
              "value": -275.8905
            },
            {
              "name": "brand_nissan",
              "value": -163.1656
            },
            {
              "name": "brand_peugeot",
              "value": -408.2755
            },
            {
              "name": "brand_plymouth",
              "value": -211.7423
            },
            {
              "name": "brand_porsche",
              "value": 478.416
            },
            {
              "name": "brand_renault",
              "value": 0.0
            },
            {
              "name": "brand_saab",
              "value": 231.3599
            },
            {
              "name": "brand_subaru",
              "value": -256.6631
            },
            {
              "name": "brand_toyota",
              "value": -186.0621
            },
            {
              "name": "brand_volkswagen",
              "value": -345.8499
            },
            {
              "name": "brand_volvo",
              "value": 47.7634
            },
            {
              "name": "fueltype_diesel",
              "value": 24.8301
            },
            {
              "name": "fueltype_gas",
              "value": -24.8301
            },
            {
              "name": "aspiration_std",
              "value": -151.2362
            },
            {
              "name": "aspiration_turbo",
              "value": 151.2362
            },
            {
              "name": "doornumber_four",
              "value": 65.0893
            },
            {
              "name": "doornumber_two",
              "value": -65.0893
            },
            {
              "name": "carbody_convertible",
              "value": 29.1287
            },
            {
              "name": "carbody_hardtop",
              "value": 285.4077
            },
            {
              "name": "carbody_hatchback",
              "value": -67.025
            },
            {
              "name": "carbody_sedan",
              "value": 72.9694
            },
            {
              "name": "carbody_wagon",
              "value": -202.672
            },
            {
              "name": "drivewheel_4wd",
              "value": -44.1384
            },
            {
              "name": "drivewheel_fwd",
              "value": -275.0046
            },
            {
              "name": "drivewheel_rwd",
              "value": 305.022
            },
            {
              "name": "enginelocation_front",
              "value": -478.416
            },
            {
              "name": "enginelocation_rear",
              "value": 478.416
            },
            {
              "name": "enginetype_dohc",
              "value": 215.6233
            },
            {
              "name": "enginetype_dohcv",
              "value": 0.0
            },
            {
              "name": "enginetype_l",
              "value": -408.2755
            },
            {
              "name": "enginetype_ohc",
              "value": 15.3328
            },
            {
              "name": "enginetype_ohcf",
              "value": -64.5706
            },
            {
              "name": "enginetype_ohcv",
              "value": 226.3242
            },
            {
              "name": "enginetype_rotor",
              "value": 133.9664
            },
            {
              "name": "fuelsystem_1bbl",
              "value": 53.3471
            },
            {
              "name": "fuelsystem_2bbl",
              "value": -277.5345
            },
            {
              "name": "fuelsystem_4bbl",
              "value": 133.9664
            },
            {
              "name": "fuelsystem_idi",
              "value": 24.8301
            },
            {
              "name": "fuelsystem_mfi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_mpfi",
              "value": 216.3494
            },
            {
              "name": "fuelsystem_spdi",
              "value": -38.166
            },
            {
              "name": "fuelsystem_spfi",
              "value": 39.2269
            },
            {
              "name": "symboling",
              "value": 29.3205
            },
            {
              "name": "wheelbase",
              "value": 570.5113
            },
            {
              "name": "carlength",
              "value": 535.0447
            },
            {
              "name": "carwidth",
              "value": 713.3546
            },
            {
              "name": "carheight",
              "value": -24.0857
            },
            {
              "name": "curbweight",
              "value": 693.854
            },
            {
              "name": "cylindernumber",
              "value": 746.7918
            },
            {
              "name": "enginesize",
              "value": 953.6613
            },
            {
              "name": "boreratio",
              "value": 52.4305
            },
            {
              "name": "stroke",
              "value": 125.0749
            },
            {
              "name": "compressionratio",
              "value": 3.012
            },
            {
              "name": "horsepower",
              "value": 596.762
            },
            {
              "name": "peakrpm",
              "value": -166.9024
            },
            {
              "name": "citympg",
              "value": -224.5716
            },
            {
              "name": "highwaympg",
              "value": -239.4517
            }
          ],
          "feature_curve": [
            {
              "k": 1,
              "added": "enginesize",
              "rmse": 5074.631828192526,
              "r2": 0.6673585688725464,
              "train_rmse": 3824.271811373861,
              "train_r2": 0.7462516840428417
            },
            {
              "k": 2,
              "added": "brand",
              "rmse": 4065.9845582327894,
              "r2": 0.7864504245945142,
              "train_rmse": 2191.021914724383,
              "train_r2": 0.9167088023547074
            },
            {
              "k": 3,
              "added": "horsepower",
              "rmse": 3641.2410286310624,
              "r2": 0.8287359863850327,
              "train_rmse": 1845.5318205358542,
              "train_r2": 0.9409052718186356
            },
            {
              "k": 4,
              "added": "carbody",
              "rmse": 3500.173944943178,
              "r2": 0.8417489801096374,
              "train_rmse": 1848.5962218475247,
              "train_r2": 0.9407088619758354
            },
            {
              "k": 5,
              "added": "curbweight",
              "rmse": 3384.034193830809,
              "r2": 0.8520766451949449,
              "train_rmse": 1607.8250525769065,
              "train_r2": 0.9551478519699879
            },
            {
              "k": 6,
              "added": "cylindernumber",
              "rmse": 3359.5047330705115,
              "r2": 0.8542133431395603,
              "train_rmse": 1663.221135998614,
              "train_r2": 0.9520039325872252
            },
            {
              "k": 7,
              "added": "peakrpm",
              "rmse": 3353.640968331739,
              "r2": 0.8547218184534875,
              "train_rmse": 1661.987697471604,
              "train_r2": 0.9520750935965329
            },
            {
              "k": 8,
              "added": "fueltype",
              "rmse": 3351.042978939441,
              "r2": 0.8549468186753234,
              "train_rmse": 1658.6144221142588,
              "train_r2": 0.9522694390112132
            },
            {
              "k": 9,
              "added": "compressionratio",
              "rmse": 3349.551776763864,
              "r2": 0.8550758862484672,
              "train_rmse": 1657.546521466639,
              "train_r2": 0.9523308819690046
            },
            {
              "k": 10,
              "added": "carheight",
              "rmse": 3351.93456299828,
              "r2": 0.8548696222266607,
              "train_rmse": 1660.2865704839965,
              "train_r2": 0.9521731504337159
            },
            {
              "k": 11,
              "added": "symboling",
              "rmse": 3357.8439416951355,
              "r2": 0.8543574485327955,
              "train_rmse": 1656.5676349938428,
              "train_r2": 0.9523871686259113
            },
            {
              "k": 12,
              "added": "wheelbase",
              "rmse": 3371.7897407246724,
              "r2": 0.8531451709078512,
              "train_rmse": 1566.7468618670346,
              "train_r2": 0.9574104225751394
            },
            {
              "k": 13,
              "added": "doornumber",
              "rmse": 3385.205165239062,
              "r2": 0.8519742561659707,
              "train_rmse": 1559.9480305513816,
              "train_r2": 0.9577792518921223
            },
            {
              "k": 14,
              "added": "enginetype",
              "rmse": 3398.2047180465415,
              "r2": 0.8508352036838136,
              "train_rmse": 1513.521360668814,
              "train_r2": 0.9602549751112546
            },
            {
              "k": 15,
              "added": "stroke",
              "rmse": 3411.7263230899835,
              "r2": 0.8496457755057656,
              "train_rmse": 1505.793257270898,
              "train_r2": 0.9606598184126172
            },
            {
              "k": 16,
              "added": "boreratio",
              "rmse": 3445.088884172773,
              "r2": 0.8466908326301379,
              "train_rmse": 1518.2334987974514,
              "train_r2": 0.9600071086542818
            },
            {
              "k": 17,
              "added": "carlength",
              "rmse": 3486.5664655882883,
              "r2": 0.8429770400194232,
              "train_rmse": 1500.5224867376048,
              "train_r2": 0.9609347434954485
            },
            {
              "k": 18,
              "added": "aspiration",
              "rmse": 3537.4677312811946,
              "r2": 0.8383587366129935,
              "train_rmse": 1455.918252361353,
              "train_r2": 0.9632227166862375
            },
            {
              "k": 19,
              "added": "carwidth",
              "rmse": 3572.195723522837,
              "r2": 0.8351694321433814,
              "train_rmse": 1427.3501956599873,
              "train_r2": 0.9646518457210711
            },
            {
              "k": 20,
              "added": "highwaympg",
              "rmse": 3607.1749660156684,
              "r2": 0.8319255576695326,
              "train_rmse": 1446.589414173988,
              "train_r2": 0.9636925097492455
            },
            {
              "k": 21,
              "added": "citympg",
              "rmse": 3636.4662906853396,
              "r2": 0.8291848468854927,
              "train_rmse": 1459.5803181060223,
              "train_r2": 0.963037472480005
            },
            {
              "k": 22,
              "added": "drivewheel",
              "rmse": 3668.7364591764185,
              "r2": 0.826139752424669,
              "train_rmse": 1448.7943151923923,
              "train_r2": 0.9635817451726755
            },
            {
              "k": 23,
              "added": "enginelocation",
              "rmse": 3732.2680774930363,
              "r2": 0.8200661291468373,
              "train_rmse": 1370.5971100889035,
              "train_r2": 0.9674069286353029
            },
            {
              "k": 24,
              "added": "fuelsystem",
              "rmse": 3820.4396784801443,
              "r2": 0.8114641443735335,
              "train_rmse": 1371.5113317675869,
              "train_r2": 0.967363433387929
            }
          ]
        },
        "120": {
          "n_train": 120,
          "best_params": {
            "alpha": 31.6228
          },
          "converged": true,
          "test": {
            "mse": 12462061.458781201,
            "rmse": 3530.164508741937,
            "mae": 2287.3446416844,
            "r2": 0.8390254754296966,
            "adj_r2": 0.5975636885742416,
            "mape": 18.870020608505616,
            "max_error": 13746.117277126297
          },
          "train": {
            "mse": 2145358.9510440594,
            "rmse": 1464.7043903272972,
            "mae": 1067.5863024473188,
            "r2": 0.9642731349733635,
            "adj_r2": 0.9552474006508449,
            "mape": 8.719848402935543,
            "max_error": 6570.757342396886
          },
          "cv_rmse": 2222.0324426372163,
          "predictions": [
            5919.51,
            18683.86,
            15371.76,
            -1602.05,
            10253.6,
            14870.51,
            5324.15,
            7033.17,
            17666.81,
            7211.82,
            21522.06,
            30627.65,
            12363.02,
            14318.81,
            4258.69,
            13809.29,
            12077.31,
            18596.5,
            9834.18,
            6142.77,
            10281.79,
            12964.86,
            12139.5,
            14061.81,
            19582.7,
            5346.65,
            7297.28,
            13423.31,
            7265.94,
            6635.28,
            9183.9,
            10518.14,
            20661.02,
            11419.71,
            7219.55,
            27568.88,
            11135.87,
            16143.31,
            5639.89,
            35567.7,
            3795.61
          ],
          "coef": [
            {
              "name": "brand_alfa-romero",
              "value": -4.0035
            },
            {
              "name": "brand_audi",
              "value": 229.9811
            },
            {
              "name": "brand_bmw",
              "value": 989.2742
            },
            {
              "name": "brand_buick",
              "value": 938.0881
            },
            {
              "name": "brand_chevrolet",
              "value": 12.1434
            },
            {
              "name": "brand_dodge",
              "value": -116.4698
            },
            {
              "name": "brand_honda",
              "value": 58.0497
            },
            {
              "name": "brand_isuzu",
              "value": -300.4625
            },
            {
              "name": "brand_jaguar",
              "value": 536.6077
            },
            {
              "name": "brand_mazda",
              "value": -174.4403
            },
            {
              "name": "brand_mercury",
              "value": -164.3729
            },
            {
              "name": "brand_mitsubishi",
              "value": -230.638
            },
            {
              "name": "brand_nissan",
              "value": -177.4748
            },
            {
              "name": "brand_peugeot",
              "value": -418.0465
            },
            {
              "name": "brand_plymouth",
              "value": -240.1014
            },
            {
              "name": "brand_porsche",
              "value": 566.2251
            },
            {
              "name": "brand_renault",
              "value": 0.0
            },
            {
              "name": "brand_saab",
              "value": 99.8829
            },
            {
              "name": "brand_subaru",
              "value": -228.7141
            },
            {
              "name": "brand_toyota",
              "value": -286.8296
            },
            {
              "name": "brand_volkswagen",
              "value": -299.5203
            },
            {
              "name": "brand_volvo",
              "value": -36.319
            },
            {
              "name": "fueltype_diesel",
              "value": 52.7427
            },
            {
              "name": "fueltype_gas",
              "value": -52.7427
            },
            {
              "name": "aspiration_std",
              "value": -175.2978
            },
            {
              "name": "aspiration_turbo",
              "value": 175.2978
            },
            {
              "name": "doornumber_four",
              "value": 123.582
            },
            {
              "name": "doornumber_two",
              "value": -123.582
            },
            {
              "name": "carbody_convertible",
              "value": 431.4517
            },
            {
              "name": "carbody_hardtop",
              "value": 114.5909
            },
            {
              "name": "carbody_hatchback",
              "value": -59.5524
            },
            {
              "name": "carbody_sedan",
              "value": 46.3672
            },
            {
              "name": "carbody_wagon",
              "value": -269.5075
            },
            {
              "name": "drivewheel_4wd",
              "value": -54.1442
            },
            {
              "name": "drivewheel_fwd",
              "value": -423.2303
            },
            {
              "name": "drivewheel_rwd",
              "value": 455.8106
            },
            {
              "name": "enginelocation_front",
              "value": -566.2251
            },
            {
              "name": "enginelocation_rear",
              "value": 566.2251
            },
            {
              "name": "enginetype_dohc",
              "value": 90.8877
            },
            {
              "name": "enginetype_dohcv",
              "value": 0.0
            },
            {
              "name": "enginetype_l",
              "value": -418.0465
            },
            {
              "name": "enginetype_ohc",
              "value": 128.1329
            },
            {
              "name": "enginetype_ohcf",
              "value": 71.6929
            },
            {
              "name": "enginetype_ohcv",
              "value": -106.9017
            },
            {
              "name": "enginetype_rotor",
              "value": 186.7986
            },
            {
              "name": "fuelsystem_1bbl",
              "value": -17.3455
            },
            {
              "name": "fuelsystem_2bbl",
              "value": -162.5663
            },
            {
              "name": "fuelsystem_4bbl",
              "value": 186.7986
            },
            {
              "name": "fuelsystem_idi",
              "value": 52.7427
            },
            {
              "name": "fuelsystem_mfi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_mpfi",
              "value": 113.2377
            },
            {
              "name": "fuelsystem_spdi",
              "value": -106.2077
            },
            {
              "name": "fuelsystem_spfi",
              "value": 40.2568
            },
            {
              "name": "symboling",
              "value": 116.3082
            },
            {
              "name": "wheelbase",
              "value": 650.7647
            },
            {
              "name": "carlength",
              "value": 421.9594
            },
            {
              "name": "carwidth",
              "value": 763.999
            },
            {
              "name": "carheight",
              "value": 41.4457
            },
            {
              "name": "curbweight",
              "value": 791.678
            },
            {
              "name": "cylindernumber",
              "value": 792.5024
            },
            {
              "name": "enginesize",
              "value": 1120.427
            },
            {
              "name": "boreratio",
              "value": 2.9613
            },
            {
              "name": "stroke",
              "value": 141.6604
            },
            {
              "name": "compressionratio",
              "value": -17.2447
            },
            {
              "name": "horsepower",
              "value": 844.1532
            },
            {
              "name": "peakrpm",
              "value": 42.3839
            },
            {
              "name": "citympg",
              "value": -196.0699
            },
            {
              "name": "highwaympg",
              "value": -172.4815
            }
          ],
          "feature_curve": [
            {
              "k": 1,
              "added": "enginesize",
              "rmse": 4597.920630558333,
              "r2": 0.7269198059635087,
              "train_rmse": 3898.375276712479,
              "train_r2": 0.7469174330024533
            },
            {
              "k": 2,
              "added": "brand",
              "rmse": 3621.2989607236805,
              "r2": 0.8306067804778279,
              "train_rmse": 2285.880245820344,
              "train_r2": 0.9129834437560636
            },
            {
              "k": 3,
              "added": "enginetype",
              "rmse": 3410.1061627837544,
              "r2": 0.8497885420019322,
              "train_rmse": 2099.258375109647,
              "train_r2": 0.9266117162235326
            },
            {
              "k": 4,
              "added": "carbody",
              "rmse": 3268.0287284161723,
              "r2": 0.8620445082278192,
              "train_rmse": 2107.53898877191,
              "train_r2": 0.9260316079512341
            },
            {
              "k": 5,
              "added": "horsepower",
              "rmse": 3171.2721065275355,
              "r2": 0.8700924842683048,
              "train_rmse": 1818.3680070194894,
              "train_r2": 0.9449371728691768
            },
            {
              "k": 6,
              "added": "symboling",
              "rmse": 3155.6361980011457,
              "r2": 0.8713703402896451,
              "train_rmse": 1813.963250876254,
              "train_r2": 0.9452036146088194
            },
            {
              "k": 7,
              "added": "enginelocation",
              "rmse": 3145.327807583769,
              "r2": 0.8722093463920633,
              "train_rmse": 1804.494404515423,
              "train_r2": 0.9457741932457355
            },
            {
              "k": 8,
              "added": "curbweight",
              "rmse": 3136.933621431102,
              "r2": 0.8728905263533258,
              "train_rmse": 1607.2100718560037,
              "train_r2": 0.9569829887282396
            },
            {
              "k": 9,
              "added": "cylindernumber",
              "rmse": 3121.1658892993655,
              "r2": 0.8741651411634895,
              "train_rmse": 1607.8168451920562,
              "train_r2": 0.9569505019948819
            },
            {
              "k": 10,
              "added": "peakrpm",
              "rmse": 3124.549610099517,
              "r2": 0.8738921528967658,
              "train_rmse": 1607.672051178521,
              "train_r2": 0.9569582554015477
            },
            {
              "k": 11,
              "added": "fueltype",
              "rmse": 3124.385899874515,
              "r2": 0.8739053673473269,
              "train_rmse": 1603.0078739106873,
              "train_r2": 0.9572076384923417
            },
            {
              "k": 12,
              "added": "compressionratio",
              "rmse": 3123.2314841201264,
              "r2": 0.8739985304474922,
              "train_rmse": 1601.690485383113,
              "train_r2": 0.957277945073171
            },
            {
              "k": 13,
              "added": "carheight",
              "rmse": 3135.494446611941,
              "r2": 0.8730071311735191,
              "train_rmse": 1602.1335146428055,
              "train_r2": 0.957254307874636
            },
            {
              "k": 14,
              "added": "carwidth",
              "rmse": 3143.8259987649026,
              "r2": 0.8723313504086108,
              "train_rmse": 1525.0993976352675,
              "train_r2": 0.9612660986889393
            },
            {
              "k": 15,
              "added": "boreratio",
              "rmse": 3165.1211191909624,
              "r2": 0.8705959318004024,
              "train_rmse": 1542.5064097912255,
              "train_r2": 0.9603768592284906
            },
            {
              "k": 16,
              "added": "wheelbase",
              "rmse": 3181.197717193884,
              "r2": 0.8692780292398337,
              "train_rmse": 1497.8963990484199,
              "train_r2": 0.9626355584153452
            },
            {
              "k": 17,
              "added": "doornumber",
              "rmse": 3199.6835907244204,
              "r2": 0.8677543698016952,
              "train_rmse": 1490.6869281877007,
              "train_r2": 0.962994367725005
            },
            {
              "k": 18,
              "added": "stroke",
              "rmse": 3221.211532508544,
              "r2": 0.8659688472120353,
              "train_rmse": 1489.6981423437596,
              "train_r2": 0.9630434437706835
            },
            {
              "k": 19,
              "added": "carlength",
              "rmse": 3249.658340666041,
              "r2": 0.8635911120909124,
              "train_rmse": 1507.8468331999525,
              "train_r2": 0.9621374901738154
            },
            {
              "k": 20,
              "added": "aspiration",
              "rmse": 3288.9950784944863,
              "r2": 0.860268696761553,
              "train_rmse": 1472.092900064553,
              "train_r2": 0.9639117868834187
            },
            {
              "k": 21,
              "added": "highwaympg",
              "rmse": 3336.667780744975,
              "r2": 0.8561886384902236,
              "train_rmse": 1491.078911147065,
              "train_r2": 0.9629749035650503
            },
            {
              "k": 22,
              "added": "citympg",
              "rmse": 3365.4949993222767,
              "r2": 0.853692981036961,
              "train_rmse": 1502.3182362047357,
              "train_r2": 0.9624146307960957
            },
            {
              "k": 23,
              "added": "fuelsystem",
              "rmse": 3419.902220115632,
              "r2": 0.8489242911480743,
              "train_rmse": 1500.7208786221688,
              "train_r2": 0.9624945144790269
            },
            {
              "k": 24,
              "added": "drivewheel",
              "rmse": 3530.164508741937,
              "r2": 0.8390254754296966,
              "train_rmse": 1464.7043903272975,
              "train_r2": 0.9642731349733635
            }
          ]
        },
        "164": {
          "n_train": 164,
          "best_params": {
            "alpha": 10.0
          },
          "converged": true,
          "test": {
            "mse": 10926710.223622736,
            "rmse": 3305.5574754680542,
            "mae": 1960.2451154737469,
            "r2": 0.8588578631887788,
            "adj_r2": 0.6471446579719469,
            "mape": 15.695236729585238,
            "max_error": 13313.867413051652
          },
          "train": {
            "mse": 1866507.9115404915,
            "rmse": 1366.2020024654082,
            "mae": 1034.678602090329,
            "r2": 0.9689070883815499,
            "adj_r2": 0.9635385281021053,
            "mape": 8.431070533040378,
            "max_error": 5290.617567517584
          },
          "cv_rmse": 1947.5230573842869,
          "predictions": [
            6382.07,
            16881.75,
            14759.75,
            -624.62,
            10332.33,
            11690.1,
            5948.69,
            6283.55,
            17072.17,
            7398.87,
            21684.77,
            31244.54,
            12777.2,
            13213.81,
            5508.27,
            12260.84,
            11202.2,
            18795.37,
            9169.87,
            6637.35,
            10406.22,
            13539.29,
            11701.89,
            12632.24,
            18613.41,
            5995.28,
            7055.31,
            14041.93,
            7146.75,
            6369.18,
            8944.15,
            10419.56,
            20872.4,
            10271.3,
            7308.4,
            28001.13,
            12364.81,
            16109.77,
            5576.29,
            34248.51,
            4892.04
          ],
          "coef": [
            {
              "name": "brand_alfa-romero",
              "value": 67.6569
            },
            {
              "name": "brand_audi",
              "value": 158.2573
            },
            {
              "name": "brand_bmw",
              "value": 1178.0677
            },
            {
              "name": "brand_buick",
              "value": 1251.6976
            },
            {
              "name": "brand_chevrolet",
              "value": -92.7024
            },
            {
              "name": "brand_dodge",
              "value": -339.1842
            },
            {
              "name": "brand_honda",
              "value": 67.8522
            },
            {
              "name": "brand_isuzu",
              "value": -234.7068
            },
            {
              "name": "brand_jaguar",
              "value": 710.3798
            },
            {
              "name": "brand_mazda",
              "value": -164.5204
            },
            {
              "name": "brand_mercury",
              "value": -130.6728
            },
            {
              "name": "brand_mitsubishi",
              "value": -486.6535
            },
            {
              "name": "brand_nissan",
              "value": -218.2623
            },
            {
              "name": "brand_peugeot",
              "value": -333.3723
            },
            {
              "name": "brand_plymouth",
              "value": -364.9478
            },
            {
              "name": "brand_porsche",
              "value": 696.9832
            },
            {
              "name": "brand_renault",
              "value": 0.0
            },
            {
              "name": "brand_saab",
              "value": 154.8123
            },
            {
              "name": "brand_subaru",
              "value": -225.4229
            },
            {
              "name": "brand_toyota",
              "value": -435.4233
            },
            {
              "name": "brand_volkswagen",
              "value": -264.8378
            },
            {
              "name": "brand_volvo",
              "value": 74.6358
            },
            {
              "name": "fueltype_diesel",
              "value": 58.771
            },
            {
              "name": "fueltype_gas",
              "value": -58.771
            },
            {
              "name": "aspiration_std",
              "value": -332.5291
            },
            {
              "name": "aspiration_turbo",
              "value": 332.5291
            },
            {
              "name": "doornumber_four",
              "value": 201.8465
            },
            {
              "name": "doornumber_two",
              "value": -201.8465
            },
            {
              "name": "carbody_convertible",
              "value": 657.6837
            },
            {
              "name": "carbody_hardtop",
              "value": -159.0381
            },
            {
              "name": "carbody_hatchback",
              "value": 7.0746
            },
            {
              "name": "carbody_sedan",
              "value": 10.3237
            },
            {
              "name": "carbody_wagon",
              "value": -286.3642
            },
            {
              "name": "drivewheel_4wd",
              "value": -71.3675
            },
            {
              "name": "drivewheel_fwd",
              "value": -309.899
            },
            {
              "name": "drivewheel_rwd",
              "value": 348.343
            },
            {
              "name": "enginelocation_front",
              "value": -696.9832
            },
            {
              "name": "enginelocation_rear",
              "value": 696.9832
            },
            {
              "name": "enginetype_dohc",
              "value": -48.3411
            },
            {
              "name": "enginetype_dohcv",
              "value": 0.0
            },
            {
              "name": "enginetype_l",
              "value": -333.3723
            },
            {
              "name": "enginetype_ohc",
              "value": 55.6927
            },
            {
              "name": "enginetype_ohcf",
              "value": 132.4571
            },
            {
              "name": "enginetype_ohcv",
              "value": -216.4706
            },
            {
              "name": "enginetype_rotor",
              "value": 589.898
            },
            {
              "name": "fuelsystem_1bbl",
              "value": -182.3594
            },
            {
              "name": "fuelsystem_2bbl",
              "value": 45.437
            },
            {
              "name": "fuelsystem_4bbl",
              "value": -69.0545
            },
            {
              "name": "fuelsystem_idi",
              "value": 58.771
            },
            {
              "name": "fuelsystem_mfi",
              "value": -87.8198
            },
            {
              "name": "fuelsystem_mpfi",
              "value": 79.5737
            },
            {
              "name": "fuelsystem_spdi",
              "value": -136.2995
            },
            {
              "name": "fuelsystem_spfi",
              "value": 74.756
            },
            {
              "name": "symboling",
              "value": 361.7183
            },
            {
              "name": "wheelbase",
              "value": 963.6073
            },
            {
              "name": "carlength",
              "value": -45.1829
            },
            {
              "name": "carwidth",
              "value": 1032.7711
            },
            {
              "name": "carheight",
              "value": -20.5899
            },
            {
              "name": "curbweight",
              "value": 1187.0135
            },
            {
              "name": "cylindernumber",
              "value": 732.5136
            },
            {
              "name": "enginesize",
              "value": 1347.8465
            },
            {
              "name": "boreratio",
              "value": -329.9054
            },
            {
              "name": "stroke",
              "value": 74.8502
            },
            {
              "name": "compressionratio",
              "value": -238.6914
            },
            {
              "name": "horsepower",
              "value": 678.0823
            },
            {
              "name": "peakrpm",
              "value": 271.5461
            },
            {
              "name": "citympg",
              "value": -9.5057
            },
            {
              "name": "highwaympg",
              "value": 2.8019
            }
          ],
          "feature_curve": [
            {
              "k": 1,
              "added": "enginesize",
              "rmse": 4189.7486119622445,
              "r2": 0.7732521416073508,
              "train_rmse": 3833.158375313333,
              "train_r2": 0.755237385170199
            },
            {
              "k": 2,
              "added": "brand",
              "rmse": 3350.8846448280583,
              "r2": 0.8549605256460364,
              "train_rmse": 2215.201214164704,
              "train_r2": 0.9182556172511221
            },
            {
              "k": 3,
              "added": "enginetype",
              "rmse": 3138.6798282201053,
              "r2": 0.8727489733396915,
              "train_rmse": 1946.8038050034525,
              "train_r2": 0.9368641647849922
            },
            {
              "k": 4,
              "added": "enginelocation",
              "rmse": 3094.819280750322,
              "r2": 0.8762805871981885,
              "train_rmse": 1947.807565054015,
              "train_r2": 0.9367990431056447
            },
            {
              "k": 5,
              "added": "horsepower",
              "rmse": 2916.202223080219,
              "r2": 0.8901493740962292,
              "train_rmse": 1818.0271654794353,
              "train_r2": 0.9449404961163289
            },
            {
              "k": 6,
              "added": "fueltype",
              "rmse": 2886.98096071158,
              "r2": 0.892339819917772,
              "train_rmse": 1799.320470006128,
              "train_r2": 0.9460677425790063
            },
            {
              "k": 7,
              "added": "symboling",
              "rmse": 2871.146609826008,
              "r2": 0.8935175582471068,
              "train_rmse": 1797.3193749920667,
              "train_r2": 0.9461876362390824
            },
            {
              "k": 8,
              "added": "boreratio",
              "rmse": 2869.4814929649224,
              "r2": 0.893641031074642,
              "train_rmse": 1795.2611722803476,
              "train_r2": 0.9463108122732745
            },
            {
              "k": 9,
              "added": "compressionratio",
              "rmse": 2868.2498493114344,
              "r2": 0.893732314629635,
              "train_rmse": 1793.156010839044,
              "train_r2": 0.9464366526157816
            },
            {
              "k": 10,
              "added": "carheight",
              "rmse": 2874.067705147608,
              "r2": 0.8933007782403685,
              "train_rmse": 1794.135385334852,
              "train_r2": 0.9463781268636818
            },
            {
              "k": 11,
              "added": "peakrpm",
              "rmse": 2886.627662843332,
              "r2": 0.8923661684010338,
              "train_rmse": 1793.9129149278576,
              "train_r2": 0.9463914241214367
            },
            {
              "k": 12,
              "added": "wheelbase",
              "rmse": 2903.2937792926828,
              "r2": 0.8911197198828757,
              "train_rmse": 1705.7814835348677,
              "train_r2": 0.9515294052342211
            },
            {
              "k": 13,
              "added": "stroke",
              "rmse": 2889.7227111302573,
              "r2": 0.8921352342194189,
              "train_rmse": 1704.5488983808673,
              "train_r2": 0.9515994289163326
            },
            {
              "k": 14,
              "added": "drivewheel",
              "rmse": 2935.2072752807667,
              "r2": 0.888712903232488,
              "train_rmse": 1708.5175814089707,
              "train_r2": 0.951373785472842
            },
            {
              "k": 15,
              "added": "carlength",
              "rmse": 2993.4637506348636,
              "r2": 0.8842515272980565,
              "train_rmse": 1707.604320330009,
              "train_r2": 0.951425756328414
            },
            {
              "k": 16,
              "added": "carwidth",
              "rmse": 3020.3350007858844,
              "r2": 0.8821641352491625,
              "train_rmse": 1628.7243266723247,
              "train_r2": 0.9558097230500259
            },
            {
              "k": 17,
              "added": "fuelsystem",
              "rmse": 3038.631589631941,
              "r2": 0.8807321585573799,
              "train_rmse": 1622.2091398965053,
              "train_r2": 0.9561625538660188
            },
            {
              "k": 18,
              "added": "curbweight",
              "rmse": 3058.0217277234933,
              "r2": 0.8792051563522315,
              "train_rmse": 1559.4261735307114,
              "train_r2": 0.9594900977135077
            },
            {
              "k": 19,
              "added": "highwaympg",
              "rmse": 3080.6437725661026,
              "r2": 0.8774113601906661,
              "train_rmse": 1562.7307907975778,
              "train_r2": 0.9593182247924119
            },
            {
              "k": 20,
              "added": "aspiration",
              "rmse": 3086.3772818083307,
              "r2": 0.876954626329448,
              "train_rmse": 1526.0337728553654,
              "train_r2": 0.9612064210722023
            },
            {
              "k": 21,
              "added": "citympg",
              "rmse": 3090.5158584738606,
              "r2": 0.8766244177481753,
              "train_rmse": 1526.5775427309368,
              "train_r2": 0.9611787696030132
            },
            {
              "k": 22,
              "added": "cylindernumber",
              "rmse": 3146.3017080841396,
              "r2": 0.8721301974721946,
              "train_rmse": 1521.1722355277348,
              "train_r2": 0.961453199389128
            },
            {
              "k": 23,
              "added": "carbody",
              "rmse": 3226.7102942287324,
              "r2": 0.8655108615029443,
              "train_rmse": 1388.9376097345016,
              "train_r2": 0.9678636141543038
            },
            {
              "k": 24,
              "added": "doornumber",
              "rmse": 3305.557475468056,
              "r2": 0.8588578631887787,
              "train_rmse": 1366.2020024654096,
              "train_r2": 0.9689070883815498
            }
          ]
        }
      }
    },
    {
      "key": "lasso",
      "name": "Lasso 回歸",
      "en": "Lasso Regression (L1)",
      "module": "sklearn.linear_model.Lasso",
      "desc": "加上 L1 懲罰 α·Σ|β|，會把不重要特徵的係數壓成 0，等於自動做特徵選擇。",
      "grid": {
        "alpha": [
          0.001,
          0.0032,
          0.01,
          0.0316,
          0.1,
          0.3162,
          1.0,
          3.1623,
          10.0,
          31.6228,
          100.0,
          316.2278,
          1000.0,
          3162.2777,
          10000.0
        ]
      },
      "runs": {
        "40": {
          "n_train": 40,
          "best_params": {
            "alpha": 100.0
          },
          "converged": true,
          "test": {
            "mse": 22811902.55952227,
            "rmse": 4776.180750298535,
            "mae": 2625.0779627753022,
            "r2": 0.705334853209565,
            "adj_r2": 0.2633371330239125,
            "mape": 17.00795754800464,
            "max_error": 23038.821895170207
          },
          "train": {
            "mse": 733764.1624056572,
            "rmse": 856.6003516259243,
            "mae": 688.3313125867029,
            "r2": 0.9765667494587671,
            "adj_r2": 0.9390735485927945,
            "mape": 6.454205878285804,
            "max_error": 2056.565447760626
          },
          "cv_rmse": 2612.3307921115825,
          "predictions": [
            6922.09,
            15902.85,
            17046.9,
            3380.67,
            10049.86,
            12896.18,
            6724.31,
            7207.84,
            16406.92,
            8110.73,
            12862.9,
            24188.34,
            11540.51,
            11296.55,
            6721.03,
            12640.96,
            11332.57,
            20116.16,
            9865.6,
            6642.02,
            12037.67,
            13664.44,
            11204.48,
            12965.96,
            16418.94,
            6181.5,
            7543.41,
            14116.94,
            7625.16,
            6857.44,
            9248.63,
            10678.04,
            15227.78,
            10951.51,
            6955.14,
            18276.18,
            8841.19,
            17846.89,
            6673.98,
            34861.6,
            6651.25
          ],
          "coef": [
            {
              "name": "brand_alfa-romero",
              "value": 0.0
            },
            {
              "name": "brand_audi",
              "value": 1097.2943
            },
            {
              "name": "brand_bmw",
              "value": 0.0
            },
            {
              "name": "brand_buick",
              "value": 2180.8611
            },
            {
              "name": "brand_chevrolet",
              "value": -0.0
            },
            {
              "name": "brand_dodge",
              "value": 0.0
            },
            {
              "name": "brand_honda",
              "value": 0.0
            },
            {
              "name": "brand_isuzu",
              "value": 0.0
            },
            {
              "name": "brand_jaguar",
              "value": 0.0
            },
            {
              "name": "brand_mazda",
              "value": -0.0
            },
            {
              "name": "brand_mercury",
              "value": -73.3694
            },
            {
              "name": "brand_mitsubishi",
              "value": -61.625
            },
            {
              "name": "brand_nissan",
              "value": 0.0
            },
            {
              "name": "brand_peugeot",
              "value": -110.8926
            },
            {
              "name": "brand_plymouth",
              "value": 0.0
            },
            {
              "name": "brand_porsche",
              "value": 0.0
            },
            {
              "name": "brand_renault",
              "value": 0.0
            },
            {
              "name": "brand_saab",
              "value": 476.2941
            },
            {
              "name": "brand_subaru",
              "value": -211.4519
            },
            {
              "name": "brand_toyota",
              "value": 0.0
            },
            {
              "name": "brand_volkswagen",
              "value": -152.8441
            },
            {
              "name": "brand_volvo",
              "value": 103.8942
            },
            {
              "name": "fueltype_diesel",
              "value": 0.0
            },
            {
              "name": "fueltype_gas",
              "value": -0.0
            },
            {
              "name": "aspiration_std",
              "value": -316.4172
            },
            {
              "name": "aspiration_turbo",
              "value": 0.0
            },
            {
              "name": "doornumber_four",
              "value": -0.0
            },
            {
              "name": "doornumber_two",
              "value": 0.0
            },
            {
              "name": "carbody_convertible",
              "value": 0.0
            },
            {
              "name": "carbody_hardtop",
              "value": 0.0
            },
            {
              "name": "carbody_hatchback",
              "value": 0.0
            },
            {
              "name": "carbody_sedan",
              "value": 0.0
            },
            {
              "name": "carbody_wagon",
              "value": -43.5801
            },
            {
              "name": "drivewheel_4wd",
              "value": -0.0
            },
            {
              "name": "drivewheel_fwd",
              "value": -0.0
            },
            {
              "name": "drivewheel_rwd",
              "value": 253.5126
            },
            {
              "name": "enginelocation_front",
              "value": 0.0
            },
            {
              "name": "enginelocation_rear",
              "value": 0.0
            },
            {
              "name": "enginetype_dohc",
              "value": 0.0
            },
            {
              "name": "enginetype_dohcv",
              "value": 0.0
            },
            {
              "name": "enginetype_l",
              "value": -0.0
            },
            {
              "name": "enginetype_ohc",
              "value": 0.0
            },
            {
              "name": "enginetype_ohcf",
              "value": -44.9978
            },
            {
              "name": "enginetype_ohcv",
              "value": 0.0
            },
            {
              "name": "enginetype_rotor",
              "value": 0.0
            },
            {
              "name": "fuelsystem_1bbl",
              "value": 0.0
            },
            {
              "name": "fuelsystem_2bbl",
              "value": -486.5082
            },
            {
              "name": "fuelsystem_4bbl",
              "value": 0.0
            },
            {
              "name": "fuelsystem_idi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_mfi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_mpfi",
              "value": -0.0
            },
            {
              "name": "fuelsystem_spdi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_spfi",
              "value": 0.0
            },
            {
              "name": "symboling",
              "value": 0.0
            },
            {
              "name": "wheelbase",
              "value": 0.0
            },
            {
              "name": "carlength",
              "value": 158.8174
            },
            {
              "name": "carwidth",
              "value": 842.5386
            },
            {
              "name": "carheight",
              "value": -0.0
            },
            {
              "name": "curbweight",
              "value": 970.1437
            },
            {
              "name": "cylindernumber",
              "value": 0.0
            },
            {
              "name": "enginesize",
              "value": 34.4601
            },
            {
              "name": "boreratio",
              "value": -0.0
            },
            {
              "name": "stroke",
              "value": 0.0
            },
            {
              "name": "compressionratio",
              "value": 0.0
            },
            {
              "name": "horsepower",
              "value": 1409.7021
            },
            {
              "name": "peakrpm",
              "value": 0.0
            },
            {
              "name": "citympg",
              "value": -0.0
            },
            {
              "name": "highwaympg",
              "value": -0.0
            }
          ],
          "feature_curve": [
            {
              "k": 1,
              "added": "enginesize",
              "rmse": 4415.569569407608,
              "r2": 0.7481507129756698,
              "train_rmse": 3218.4685765120507,
              "train_r2": 0.669193080035501
            },
            {
              "k": 2,
              "added": "enginetype",
              "rmse": 3998.9225019268156,
              "r2": 0.7934366645028628,
              "train_rmse": 2719.889053524978,
              "train_r2": 0.763746409454578
            },
            {
              "k": 3,
              "added": "stroke",
              "rmse": 3603.7659516452522,
              "r2": 0.8322430900590306,
              "train_rmse": 2505.3198937759594,
              "train_r2": 0.7995516834594848
            },
            {
              "k": 4,
              "added": "peakrpm",
              "rmse": 3347.2803899582873,
              "r2": 0.855272370513188,
              "train_rmse": 2366.642846190552,
              "train_r2": 0.821128361660508
            },
            {
              "k": 5,
              "added": "carbody",
              "rmse": 3241.770612469135,
              "r2": 0.864252504958876,
              "train_rmse": 2298.715213883967,
              "train_r2": 0.8312489904806888
            },
            {
              "k": 6,
              "added": "symboling",
              "rmse": 3226.559672708026,
              "r2": 0.8655234170061774,
              "train_rmse": 2269.64599535358,
              "train_r2": 0.8354900057021805
            },
            {
              "k": 7,
              "added": "fueltype",
              "rmse": 3226.5475461313945,
              "r2": 0.8655244278274172,
              "train_rmse": 2269.647470473544,
              "train_r2": 0.8354897918608535
            },
            {
              "k": 8,
              "added": "enginelocation",
              "rmse": 3226.5475461313945,
              "r2": 0.8655244278274172,
              "train_rmse": 2269.647470473544,
              "train_r2": 0.8354897918608535
            },
            {
              "k": 9,
              "added": "compressionratio",
              "rmse": 3226.574109624393,
              "r2": 0.8655222135996253,
              "train_rmse": 2269.655802790995,
              "train_r2": 0.8354885839606733
            },
            {
              "k": 10,
              "added": "doornumber",
              "rmse": 3229.70180064513,
              "r2": 0.8652613742026856,
              "train_rmse": 2269.707022987582,
              "train_r2": 0.8354811586919256
            },
            {
              "k": 11,
              "added": "boreratio",
              "rmse": 3256.4411180336574,
              "r2": 0.8630210849652077,
              "train_rmse": 2252.586016024212,
              "train_r2": 0.8379538166448093
            },
            {
              "k": 12,
              "added": "carheight",
              "rmse": 3310.9866483198225,
              "r2": 0.8583938480561333,
              "train_rmse": 2206.5539168731552,
              "train_r2": 0.8445090464377671
            },
            {
              "k": 13,
              "added": "citympg",
              "rmse": 3454.123646278583,
              "r2": 0.8458856701895184,
              "train_rmse": 2214.8126037042325,
              "train_r2": 0.8433429256009938
            },
            {
              "k": 14,
              "added": "drivewheel",
              "rmse": 3553.414941495337,
              "r2": 0.8368980660366013,
              "train_rmse": 1971.6354052656066,
              "train_r2": 0.8758549934166153
            },
            {
              "k": 15,
              "added": "horsepower",
              "rmse": 3567.601891981664,
              "r2": 0.8355931026470954,
              "train_rmse": 1951.579249058908,
              "train_r2": 0.8783678390681042
            },
            {
              "k": 16,
              "added": "highwaympg",
              "rmse": 3633.692945122874,
              "r2": 0.829445291374462,
              "train_rmse": 1958.8037645906456,
              "train_r2": 0.8774656364853972
            },
            {
              "k": 17,
              "added": "curbweight",
              "rmse": 3818.8963068750554,
              "r2": 0.8116164420857004,
              "train_rmse": 1954.4065945966697,
              "train_r2": 0.8780151552024962
            },
            {
              "k": 18,
              "added": "aspiration",
              "rmse": 4020.746926639962,
              "r2": 0.7911758416524033,
              "train_rmse": 1869.1699180383823,
              "train_r2": 0.8884232761980346
            },
            {
              "k": 19,
              "added": "fuelsystem",
              "rmse": 4078.840543435762,
              "r2": 0.785097871291925,
              "train_rmse": 1806.627910378532,
              "train_r2": 0.8957650242132696
            },
            {
              "k": 20,
              "added": "cylindernumber",
              "rmse": 4300.466126867799,
              "r2": 0.7611098050458727,
              "train_rmse": 1216.0272356886883,
              "train_r2": 0.9527760137959614
            },
            {
              "k": 21,
              "added": "carlength",
              "rmse": 4430.3267773714,
              "r2": 0.7464644965866102,
              "train_rmse": 1204.3263804768278,
              "train_r2": 0.953680438603368
            },
            {
              "k": 22,
              "added": "wheelbase",
              "rmse": 4446.306439362418,
              "r2": 0.7446322533543137,
              "train_rmse": 1214.997467653586,
              "train_r2": 0.9528559612831499
            },
            {
              "k": 23,
              "added": "carwidth",
              "rmse": 4738.639984030593,
              "r2": 0.7099487832557659,
              "train_rmse": 1274.305929903673,
              "train_r2": 0.9481410824660065
            },
            {
              "k": 24,
              "added": "brand",
              "rmse": 4780.463961266511,
              "r2": 0.7048061132069914,
              "train_rmse": 856.630237354428,
              "train_r2": 0.9765651143158934
            }
          ]
        },
        "80": {
          "n_train": 80,
          "best_params": {
            "alpha": 316.2278
          },
          "converged": true,
          "test": {
            "mse": 11845343.009054512,
            "rmse": 3441.7064094798257,
            "mae": 2308.99508232002,
            "r2": 0.8469917304162289,
            "adj_r2": 0.6174793260405722,
            "mape": 17.65799803557498,
            "max_error": 14574.770465616348
          },
          "train": {
            "mse": 2773485.3202945394,
            "rmse": 1665.3784315567857,
            "mae": 1269.9109205103437,
            "r2": 0.9518793444003224,
            "adj_r2": 0.9308812401386449,
            "mape": 10.651792260626655,
            "max_error": 4853.083693387023
          },
          "cv_rmse": 3345.7412631372995,
          "predictions": [
            6527.14,
            17941.76,
            15791.66,
            1910.94,
            10960.03,
            14194.85,
            6023.47,
            7218.22,
            18842.1,
            7110.2,
            19632.63,
            35598.28,
            9066.46,
            11716.15,
            6304.67,
            13923.68,
            12724.36,
            18701.0,
            9700.4,
            6376.76,
            10729.67,
            14211.29,
            12393.02,
            14269.0,
            18562.43,
            6833.83,
            7516.72,
            14943.29,
            7603.58,
            6815.92,
            10192.84,
            11765.16,
            25097.5,
            11686.18,
            6919.73,
            26740.23,
            9779.99,
            15526.12,
            6253.86,
            37118.28,
            6230.52
          ],
          "coef": [
            {
              "name": "brand_alfa-romero",
              "value": 0.0
            },
            {
              "name": "brand_audi",
              "value": 463.4795
            },
            {
              "name": "brand_bmw",
              "value": 722.173
            },
            {
              "name": "brand_buick",
              "value": 1638.5437
            },
            {
              "name": "brand_chevrolet",
              "value": 0.0
            },
            {
              "name": "brand_dodge",
              "value": 0.0
            },
            {
              "name": "brand_honda",
              "value": 0.0
            },
            {
              "name": "brand_isuzu",
              "value": -0.0
            },
            {
              "name": "brand_jaguar",
              "value": 710.8919
            },
            {
              "name": "brand_mazda",
              "value": -0.0
            },
            {
              "name": "brand_mercury",
              "value": -0.0
            },
            {
              "name": "brand_mitsubishi",
              "value": -113.1518
            },
            {
              "name": "brand_nissan",
              "value": -0.0
            },
            {
              "name": "brand_peugeot",
              "value": -0.0
            },
            {
              "name": "brand_plymouth",
              "value": -0.0
            },
            {
              "name": "brand_porsche",
              "value": 973.6792
            },
            {
              "name": "brand_renault",
              "value": 0.0
            },
            {
              "name": "brand_saab",
              "value": 0.0
            },
            {
              "name": "brand_subaru",
              "value": -0.0
            },
            {
              "name": "brand_toyota",
              "value": -0.0
            },
            {
              "name": "brand_volkswagen",
              "value": -0.0
            },
            {
              "name": "brand_volvo",
              "value": 121.7165
            },
            {
              "name": "fueltype_diesel",
              "value": -0.0
            },
            {
              "name": "fueltype_gas",
              "value": 0.0
            },
            {
              "name": "aspiration_std",
              "value": 0.0
            },
            {
              "name": "aspiration_turbo",
              "value": -0.0
            },
            {
              "name": "doornumber_four",
              "value": 0.0
            },
            {
              "name": "doornumber_two",
              "value": -0.0
            },
            {
              "name": "carbody_convertible",
              "value": 0.0
            },
            {
              "name": "carbody_hardtop",
              "value": 0.0
            },
            {
              "name": "carbody_hatchback",
              "value": -0.0
            },
            {
              "name": "carbody_sedan",
              "value": 0.0
            },
            {
              "name": "carbody_wagon",
              "value": -0.0
            },
            {
              "name": "drivewheel_4wd",
              "value": -0.0
            },
            {
              "name": "drivewheel_fwd",
              "value": -0.0
            },
            {
              "name": "drivewheel_rwd",
              "value": 26.0454
            },
            {
              "name": "enginelocation_front",
              "value": -151.0203
            },
            {
              "name": "enginelocation_rear",
              "value": 0.0
            },
            {
              "name": "enginetype_dohc",
              "value": 0.0
            },
            {
              "name": "enginetype_dohcv",
              "value": 0.0
            },
            {
              "name": "enginetype_l",
              "value": -0.0
            },
            {
              "name": "enginetype_ohc",
              "value": 0.0
            },
            {
              "name": "enginetype_ohcf",
              "value": -0.0
            },
            {
              "name": "enginetype_ohcv",
              "value": 0.0
            },
            {
              "name": "enginetype_rotor",
              "value": 0.0
            },
            {
              "name": "fuelsystem_1bbl",
              "value": 0.0
            },
            {
              "name": "fuelsystem_2bbl",
              "value": -213.3401
            },
            {
              "name": "fuelsystem_4bbl",
              "value": 0.0
            },
            {
              "name": "fuelsystem_idi",
              "value": -0.0
            },
            {
              "name": "fuelsystem_mfi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_mpfi",
              "value": 216.0998
            },
            {
              "name": "fuelsystem_spdi",
              "value": -0.0
            },
            {
              "name": "fuelsystem_spfi",
              "value": -0.0
            },
            {
              "name": "symboling",
              "value": 0.0
            },
            {
              "name": "wheelbase",
              "value": 0.0
            },
            {
              "name": "carlength",
              "value": 279.8835
            },
            {
              "name": "carwidth",
              "value": 669.7952
            },
            {
              "name": "carheight",
              "value": 0.0
            },
            {
              "name": "curbweight",
              "value": 1123.1907
            },
            {
              "name": "cylindernumber",
              "value": 0.0
            },
            {
              "name": "enginesize",
              "value": 1959.9724
            },
            {
              "name": "boreratio",
              "value": -0.0
            },
            {
              "name": "stroke",
              "value": 0.0
            },
            {
              "name": "compressionratio",
              "value": -0.0
            },
            {
              "name": "horsepower",
              "value": 1499.4143
            },
            {
              "name": "peakrpm",
              "value": 0.0
            },
            {
              "name": "citympg",
              "value": -0.0
            },
            {
              "name": "highwaympg",
              "value": -0.0
            }
          ],
          "feature_curve": [
            {
              "k": 1,
              "added": "enginesize",
              "rmse": 4328.71589166072,
              "r2": 0.7579609568182268,
              "train_rmse": 3312.369494943199,
              "train_r2": 0.8096367035189539
            },
            {
              "k": 2,
              "added": "brand",
              "rmse": 3436.7684488143486,
              "r2": 0.8474304702261183,
              "train_rmse": 2113.6458434290353,
              "train_r2": 0.9224877928009237
            },
            {
              "k": 3,
              "added": "enginetype",
              "rmse": 3288.4089732302464,
              "r2": 0.86031849309954,
              "train_rmse": 1978.0060998848876,
              "train_r2": 0.9321170171935345
            },
            {
              "k": 4,
              "added": "wheelbase",
              "rmse": 3251.9638998387995,
              "r2": 0.8633974853802452,
              "train_rmse": 1920.8584386716066,
              "train_r2": 0.935982842919704
            },
            {
              "k": 5,
              "added": "carbody",
              "rmse": 3220.0091408610815,
              "r2": 0.8660688889876365,
              "train_rmse": 1916.0327542563177,
              "train_r2": 0.9363040936063475
            },
            {
              "k": 6,
              "added": "peakrpm",
              "rmse": 3204.456077484906,
              "r2": 0.867359573760126,
              "train_rmse": 1913.3037893958167,
              "train_r2": 0.9364854058548755
            },
            {
              "k": 7,
              "added": "aspiration",
              "rmse": 3187.2312821995715,
              "r2": 0.8687816957615567,
              "train_rmse": 1788.9268941086602,
              "train_r2": 0.9444747081037638
            },
            {
              "k": 8,
              "added": "enginelocation",
              "rmse": 3176.5323818005613,
              "r2": 0.8696611645865895,
              "train_rmse": 1788.9427246640496,
              "train_r2": 0.9444737253916128
            },
            {
              "k": 9,
              "added": "doornumber",
              "rmse": 3176.5244043697435,
              "r2": 0.869661819242429,
              "train_rmse": 1788.9429334136478,
              "train_r2": 0.9444737124330222
            },
            {
              "k": 10,
              "added": "fueltype",
              "rmse": 3176.52273159373,
              "r2": 0.8696619565160636,
              "train_rmse": 1788.9428550274527,
              "train_r2": 0.9444737172990179
            },
            {
              "k": 11,
              "added": "carheight",
              "rmse": 3176.52273159373,
              "r2": 0.8696619565160636,
              "train_rmse": 1788.9428550274527,
              "train_r2": 0.9444737172990179
            },
            {
              "k": 12,
              "added": "cylindernumber",
              "rmse": 3176.52273159373,
              "r2": 0.8696619565160636,
              "train_rmse": 1788.9428550274527,
              "train_r2": 0.9444737172990179
            },
            {
              "k": 13,
              "added": "boreratio",
              "rmse": 3176.52273159373,
              "r2": 0.8696619565160636,
              "train_rmse": 1788.9428550274529,
              "train_r2": 0.9444737172990179
            },
            {
              "k": 14,
              "added": "stroke",
              "rmse": 3176.52273159373,
              "r2": 0.8696619565160636,
              "train_rmse": 1788.9428550274529,
              "train_r2": 0.9444737172990179
            },
            {
              "k": 15,
              "added": "compressionratio",
              "rmse": 3176.529861810805,
              "r2": 0.8696613713859294,
              "train_rmse": 1788.9427583892716,
              "train_r2": 0.9444737232980456
            },
            {
              "k": 16,
              "added": "symboling",
              "rmse": 3176.5617421378606,
              "r2": 0.8696587551605888,
              "train_rmse": 1788.942382225039,
              "train_r2": 0.9444737466492645
            },
            {
              "k": 17,
              "added": "curbweight",
              "rmse": 3226.8934169623053,
              "r2": 0.8654955959753462,
              "train_rmse": 1724.2658714546762,
              "train_r2": 0.9484161053857024
            },
            {
              "k": 18,
              "added": "carlength",
              "rmse": 3239.7716601456223,
              "r2": 0.8644198635673577,
              "train_rmse": 1724.4277802920176,
              "train_r2": 0.9484064174591911
            },
            {
              "k": 19,
              "added": "highwaympg",
              "rmse": 3257.3984630451623,
              "r2": 0.8629405336195761,
              "train_rmse": 1724.8665588410104,
              "train_r2": 0.9483801582702948
            },
            {
              "k": 20,
              "added": "citympg",
              "rmse": 3277.65531512136,
              "r2": 0.8612305640377679,
              "train_rmse": 1727.3879801230626,
              "train_r2": 0.9482291315165647
            },
            {
              "k": 21,
              "added": "drivewheel",
              "rmse": 3334.0518193096996,
              "r2": 0.8564140475073876,
              "train_rmse": 1714.6032666529104,
              "train_r2": 0.9489926269163184
            },
            {
              "k": 22,
              "added": "horsepower",
              "rmse": 3354.157541040026,
              "r2": 0.854677059623155,
              "train_rmse": 1690.6778559659479,
              "train_r2": 0.9504061992486391
            },
            {
              "k": 23,
              "added": "fuelsystem",
              "rmse": 3397.169831753022,
              "r2": 0.8509260428829494,
              "train_rmse": 1676.465567743499,
              "train_r2": 0.951236492075446
            },
            {
              "k": 24,
              "added": "carwidth",
              "rmse": 3480.0493098428205,
              "r2": 0.8435635119365987,
              "train_rmse": 1665.4384518502739,
              "train_r2": 0.9518758757977959
            }
          ]
        },
        "120": {
          "n_train": 120,
          "best_params": {
            "alpha": 100.0
          },
          "converged": true,
          "test": {
            "mse": 11405953.86977883,
            "rmse": 3377.270180157168,
            "mae": 2282.764662614339,
            "r2": 0.8526673931490923,
            "adj_r2": 0.6316684828727308,
            "mape": 16.800348968975445,
            "max_error": 11505.096261257226
          },
          "train": {
            "mse": 1917760.0248745407,
            "rmse": 1384.8321287703216,
            "mae": 1036.761106690871,
            "r2": 0.9680633613648533,
            "adj_r2": 0.9599951579201846,
            "mape": 8.473344488192009,
            "max_error": 4776.768619599396
          },
          "cv_rmse": 2311.078195274234,
          "predictions": [
            6264.97,
            18127.69,
            15543.9,
            914.37,
            10452.87,
            13909.66,
            5588.54,
            6913.97,
            18001.72,
            7133.8,
            22235.33,
            39966.31,
            11971.07,
            12787.38,
            6285.47,
            13515.51,
            11224.44,
            18787.64,
            9641.37,
            6297.31,
            9815.97,
            13511.36,
            11442.03,
            13893.94,
            19381.82,
            6098.4,
            7537.15,
            13746.6,
            7397.51,
            6647.88,
            9589.03,
            10782.53,
            28488.97,
            11457.54,
            6831.2,
            29809.9,
            12174.62,
            15815.33,
            6128.35,
            37269.21,
            6134.66
          ],
          "coef": [
            {
              "name": "brand_alfa-romero",
              "value": 0.0
            },
            {
              "name": "brand_audi",
              "value": 429.9823
            },
            {
              "name": "brand_bmw",
              "value": 1528.8458
            },
            {
              "name": "brand_buick",
              "value": 1348.2989
            },
            {
              "name": "brand_chevrolet",
              "value": 0.0
            },
            {
              "name": "brand_dodge",
              "value": -0.0
            },
            {
              "name": "brand_honda",
              "value": 54.0926
            },
            {
              "name": "brand_isuzu",
              "value": -25.7285
            },
            {
              "name": "brand_jaguar",
              "value": 541.8281
            },
            {
              "name": "brand_mazda",
              "value": 0.0
            },
            {
              "name": "brand_mercury",
              "value": -18.912
            },
            {
              "name": "brand_mitsubishi",
              "value": -203.9552
            },
            {
              "name": "brand_nissan",
              "value": -0.0
            },
            {
              "name": "brand_peugeot",
              "value": -358.7923
            },
            {
              "name": "brand_plymouth",
              "value": -94.3955
            },
            {
              "name": "brand_porsche",
              "value": 1588.8446
            },
            {
              "name": "brand_renault",
              "value": 0.0
            },
            {
              "name": "brand_saab",
              "value": 189.4319
            },
            {
              "name": "brand_subaru",
              "value": -0.0
            },
            {
              "name": "brand_toyota",
              "value": -0.0
            },
            {
              "name": "brand_volkswagen",
              "value": -0.0
            },
            {
              "name": "brand_volvo",
              "value": 300.1985
            },
            {
              "name": "fueltype_diesel",
              "value": 0.0
            },
            {
              "name": "fueltype_gas",
              "value": -0.0
            },
            {
              "name": "aspiration_std",
              "value": -88.6832
            },
            {
              "name": "aspiration_turbo",
              "value": 0.0
            },
            {
              "name": "doornumber_four",
              "value": 33.8174
            },
            {
              "name": "doornumber_two",
              "value": -0.0
            },
            {
              "name": "carbody_convertible",
              "value": 505.403
            },
            {
              "name": "carbody_hardtop",
              "value": 0.0
            },
            {
              "name": "carbody_hatchback",
              "value": -44.7852
            },
            {
              "name": "carbody_sedan",
              "value": 68.6845
            },
            {
              "name": "carbody_wagon",
              "value": -183.9297
            },
            {
              "name": "drivewheel_4wd",
              "value": 0.0
            },
            {
              "name": "drivewheel_fwd",
              "value": -241.2912
            },
            {
              "name": "drivewheel_rwd",
              "value": 91.0748
            },
            {
              "name": "enginelocation_front",
              "value": -136.1904
            },
            {
              "name": "enginelocation_rear",
              "value": 0.0
            },
            {
              "name": "enginetype_dohc",
              "value": 44.0323
            },
            {
              "name": "enginetype_dohcv",
              "value": 0.0
            },
            {
              "name": "enginetype_l",
              "value": -12.6481
            },
            {
              "name": "enginetype_ohc",
              "value": 0.0
            },
            {
              "name": "enginetype_ohcf",
              "value": -0.0
            },
            {
              "name": "enginetype_ohcv",
              "value": -213.2757
            },
            {
              "name": "enginetype_rotor",
              "value": 330.0674
            },
            {
              "name": "fuelsystem_1bbl",
              "value": 0.0
            },
            {
              "name": "fuelsystem_2bbl",
              "value": -8.6392
            },
            {
              "name": "fuelsystem_4bbl",
              "value": 49.4543
            },
            {
              "name": "fuelsystem_idi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_mfi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_mpfi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_spdi",
              "value": -40.7551
            },
            {
              "name": "fuelsystem_spfi",
              "value": -0.0
            },
            {
              "name": "symboling",
              "value": 0.0
            },
            {
              "name": "wheelbase",
              "value": 474.712
            },
            {
              "name": "carlength",
              "value": 0.0
            },
            {
              "name": "carwidth",
              "value": 989.4144
            },
            {
              "name": "carheight",
              "value": 0.0
            },
            {
              "name": "curbweight",
              "value": 1186.4307
            },
            {
              "name": "cylindernumber",
              "value": 0.0
            },
            {
              "name": "enginesize",
              "value": 2082.0259
            },
            {
              "name": "boreratio",
              "value": -220.8853
            },
            {
              "name": "stroke",
              "value": 0.0
            },
            {
              "name": "compressionratio",
              "value": 0.0
            },
            {
              "name": "horsepower",
              "value": 1424.4637
            },
            {
              "name": "peakrpm",
              "value": 66.5712
            },
            {
              "name": "citympg",
              "value": -0.0
            },
            {
              "name": "highwaympg",
              "value": -0.0
            }
          ],
          "feature_curve": [
            {
              "k": 1,
              "added": "enginesize",
              "rmse": 4124.2980757972455,
              "r2": 0.7802811316801327,
              "train_rmse": 3628.724700840882,
              "train_r2": 0.7807179995099844
            },
            {
              "k": 2,
              "added": "brand",
              "rmse": 3342.2198254268114,
              "r2": 0.855709650802531,
              "train_rmse": 2076.674253214587,
              "train_r2": 0.928182265746522
            },
            {
              "k": 3,
              "added": "peakrpm",
              "rmse": 3182.346488300907,
              "r2": 0.8691836014484804,
              "train_rmse": 2001.211789441169,
              "train_r2": 0.9333068779699237
            },
            {
              "k": 4,
              "added": "carbody",
              "rmse": 3087.988741217288,
              "r2": 0.8768261038769504,
              "train_rmse": 1984.7868190667991,
              "train_r2": 0.9343971545425449
            },
            {
              "k": 5,
              "added": "wheelbase",
              "rmse": 3038.804894188133,
              "r2": 0.8807185535847772,
              "train_rmse": 1915.8534871039076,
              "train_r2": 0.9388749073801976
            },
            {
              "k": 6,
              "added": "fueltype",
              "rmse": 3020.7303641055564,
              "r2": 0.8821332836861095,
              "train_rmse": 1908.031677761283,
              "train_r2": 0.9393729964480666
            },
            {
              "k": 7,
              "added": "cylindernumber",
              "rmse": 3019.8513098810445,
              "r2": 0.882201873825984,
              "train_rmse": 1908.2293983533996,
              "train_r2": 0.9393604307991101
            },
            {
              "k": 8,
              "added": "enginelocation",
              "rmse": 3019.2390413989738,
              "r2": 0.882249635626815,
              "train_rmse": 1908.222604676312,
              "train_r2": 0.9393608625762528
            },
            {
              "k": 9,
              "added": "doornumber",
              "rmse": 3019.2296450208482,
              "r2": 0.8822503685434282,
              "train_rmse": 1908.2242462357171,
              "train_r2": 0.9393607582458786
            },
            {
              "k": 10,
              "added": "compressionratio",
              "rmse": 3019.2349102759613,
              "r2": 0.8822499578543037,
              "train_rmse": 1908.223651284276,
              "train_r2": 0.9393607960584143
            },
            {
              "k": 11,
              "added": "boreratio",
              "rmse": 3020.699090207257,
              "r2": 0.8821357242433081,
              "train_rmse": 1907.8248088328428,
              "train_r2": 0.9393861421033634
            },
            {
              "k": 12,
              "added": "stroke",
              "rmse": 3039.7617088248785,
              "r2": 0.8806434265492287,
              "train_rmse": 1903.4149641659567,
              "train_r2": 0.9396660302502264
            },
            {
              "k": 13,
              "added": "enginetype",
              "rmse": 3010.3562255064116,
              "r2": 0.88294147629063,
              "train_rmse": 1693.8836033776904,
              "train_r2": 0.9522182478928525
            },
            {
              "k": 14,
              "added": "carheight",
              "rmse": 3010.3562255064116,
              "r2": 0.88294147629063,
              "train_rmse": 1693.8836033776904,
              "train_r2": 0.9522182478928525
            },
            {
              "k": 15,
              "added": "symboling",
              "rmse": 3011.6425264122154,
              "r2": 0.8828414185944632,
              "train_rmse": 1693.8866832056417,
              "train_r2": 0.9522180741386357
            },
            {
              "k": 16,
              "added": "carlength",
              "rmse": 3017.792965977456,
              "r2": 0.8823624025381663,
              "train_rmse": 1697.999470264462,
              "train_r2": 0.9519857617159332
            },
            {
              "k": 17,
              "added": "aspiration",
              "rmse": 3084.966992858388,
              "r2": 0.8770670493216517,
              "train_rmse": 1496.7445446988406,
              "train_r2": 0.9626930014357377
            },
            {
              "k": 18,
              "added": "highwaympg",
              "rmse": 3096.7649811876327,
              "r2": 0.8761249745023352,
              "train_rmse": 1497.2673785456927,
              "train_r2": 0.9626669331685894
            },
            {
              "k": 19,
              "added": "citympg",
              "rmse": 3113.269570789224,
              "r2": 0.8748010414984354,
              "train_rmse": 1495.7677261601132,
              "train_r2": 0.9627416807863289
            },
            {
              "k": 20,
              "added": "fuelsystem",
              "rmse": 3147.9779772868237,
              "r2": 0.8719939096457976,
              "train_rmse": 1488.2114123327356,
              "train_r2": 0.963117172806406
            },
            {
              "k": 21,
              "added": "horsepower",
              "rmse": 3225.8337668340914,
              "r2": 0.8655839188226702,
              "train_rmse": 1471.6444205362504,
              "train_r2": 0.9639337723972492
            },
            {
              "k": 22,
              "added": "drivewheel",
              "rmse": 3276.25276159563,
              "r2": 0.8613493013058519,
              "train_rmse": 1428.0172731936152,
              "train_r2": 0.966040454911289
            },
            {
              "k": 23,
              "added": "curbweight",
              "rmse": 3365.6661947937187,
              "r2": 0.8536780960134279,
              "train_rmse": 1404.1466463631527,
              "train_r2": 0.9671662961484367
            },
            {
              "k": 24,
              "added": "carwidth",
              "rmse": 3477.8142777853823,
              "r2": 0.8437643874172691,
              "train_rmse": 1384.9029042097177,
              "train_r2": 0.9680600968718576
            }
          ]
        },
        "164": {
          "n_train": 164,
          "best_params": {
            "alpha": 31.6228
          },
          "converged": true,
          "test": {
            "mse": 12383095.612619659,
            "rmse": 3518.9622920144598,
            "mae": 2146.97834755366,
            "r2": 0.8400454904236195,
            "adj_r2": 0.6001137260590488,
            "mape": 15.125916324991382,
            "max_error": 12225.154902862036
          },
          "train": {
            "mse": 1874978.2817063793,
            "rmse": 1369.2984633403994,
            "mae": 1043.9225975889992,
            "r2": 0.9687659861288805,
            "adj_r2": 0.9633730628705578,
            "mape": 8.50482512306364,
            "max_error": 4831.585924210052
          },
          "cv_rmse": 1938.559519481947,
          "predictions": [
            6296.75,
            16464.53,
            14670.31,
            818.68,
            10382.22,
            11650.31,
            5819.67,
            6630.97,
            17067.57,
            7473.14,
            21794.49,
            39868.19,
            13024.41,
            12196.58,
            6761.22,
            11997.63,
            10898.69,
            18996.09,
            9512.01,
            6420.38,
            10227.84,
            13873.11,
            11262.21,
            12373.24,
            18243.13,
            5629.94,
            7177.28,
            14193.25,
            7160.48,
            6481.93,
            9322.02,
            10887.1,
            30431.83,
            10495.64,
            7061.69,
            29089.85,
            12588.68,
            15919.37,
            5774.42,
            35520.01,
            6376.15
          ],
          "coef": [
            {
              "name": "brand_alfa-romero",
              "value": 139.9072
            },
            {
              "name": "brand_audi",
              "value": 257.864
            },
            {
              "name": "brand_bmw",
              "value": 1519.8959
            },
            {
              "name": "brand_buick",
              "value": 1466.5501
            },
            {
              "name": "brand_chevrolet",
              "value": -0.0
            },
            {
              "name": "brand_dodge",
              "value": -151.6066
            },
            {
              "name": "brand_honda",
              "value": 0.0
            },
            {
              "name": "brand_isuzu",
              "value": -0.0
            },
            {
              "name": "brand_jaguar",
              "value": 797.1011
            },
            {
              "name": "brand_mazda",
              "value": 0.0
            },
            {
              "name": "brand_mercury",
              "value": -0.0
            },
            {
              "name": "brand_mitsubishi",
              "value": -350.3081
            },
            {
              "name": "brand_nissan",
              "value": -5.2092
            },
            {
              "name": "brand_peugeot",
              "value": -321.516
            },
            {
              "name": "brand_plymouth",
              "value": -191.3974
            },
            {
              "name": "brand_porsche",
              "value": 2095.7514
            },
            {
              "name": "brand_renault",
              "value": 0.0
            },
            {
              "name": "brand_saab",
              "value": 228.7603
            },
            {
              "name": "brand_subaru",
              "value": 0.0
            },
            {
              "name": "brand_toyota",
              "value": -93.8349
            },
            {
              "name": "brand_volkswagen",
              "value": -59.3956
            },
            {
              "name": "brand_volvo",
              "value": 370.9235
            },
            {
              "name": "fueltype_diesel",
              "value": -0.0
            },
            {
              "name": "fueltype_gas",
              "value": 0.0
            },
            {
              "name": "aspiration_std",
              "value": -620.2222
            },
            {
              "name": "aspiration_turbo",
              "value": 0.0
            },
            {
              "name": "doornumber_four",
              "value": 227.7334
            },
            {
              "name": "doornumber_two",
              "value": -0.0
            },
            {
              "name": "carbody_convertible",
              "value": 678.1747
            },
            {
              "name": "carbody_hardtop",
              "value": -120.5817
            },
            {
              "name": "carbody_hatchback",
              "value": -0.0
            },
            {
              "name": "carbody_sedan",
              "value": 55.6411
            },
            {
              "name": "carbody_wagon",
              "value": -229.4419
            },
            {
              "name": "drivewheel_4wd",
              "value": 0.0
            },
            {
              "name": "drivewheel_fwd",
              "value": -225.392
            },
            {
              "name": "drivewheel_rwd",
              "value": 69.9597
            },
            {
              "name": "enginelocation_front",
              "value": -166.7072
            },
            {
              "name": "enginelocation_rear",
              "value": 0.0
            },
            {
              "name": "enginetype_dohc",
              "value": 0.0
            },
            {
              "name": "enginetype_dohcv",
              "value": 0.0
            },
            {
              "name": "enginetype_l",
              "value": -11.3855
            },
            {
              "name": "enginetype_ohc",
              "value": 0.0
            },
            {
              "name": "enginetype_ohcf",
              "value": 47.7973
            },
            {
              "name": "enginetype_ohcv",
              "value": -168.1745
            },
            {
              "name": "enginetype_rotor",
              "value": 576.8877
            },
            {
              "name": "fuelsystem_1bbl",
              "value": -0.0
            },
            {
              "name": "fuelsystem_2bbl",
              "value": 0.0
            },
            {
              "name": "fuelsystem_4bbl",
              "value": -5.3639
            },
            {
              "name": "fuelsystem_idi",
              "value": -0.0
            },
            {
              "name": "fuelsystem_mfi",
              "value": -96.5051
            },
            {
              "name": "fuelsystem_mpfi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_spdi",
              "value": -109.0215
            },
            {
              "name": "fuelsystem_spfi",
              "value": 0.0
            },
            {
              "name": "symboling",
              "value": 201.8456
            },
            {
              "name": "wheelbase",
              "value": 649.9155
            },
            {
              "name": "carlength",
              "value": -0.0
            },
            {
              "name": "carwidth",
              "value": 1297.41
            },
            {
              "name": "carheight",
              "value": -0.1775
            },
            {
              "name": "curbweight",
              "value": 1200.4235
            },
            {
              "name": "cylindernumber",
              "value": 109.9634
            },
            {
              "name": "enginesize",
              "value": 2210.2625
            },
            {
              "name": "boreratio",
              "value": -549.9643
            },
            {
              "name": "stroke",
              "value": -13.1821
            },
            {
              "name": "compressionratio",
              "value": -103.8599
            },
            {
              "name": "horsepower",
              "value": 549.9604
            },
            {
              "name": "peakrpm",
              "value": 369.2216
            },
            {
              "name": "citympg",
              "value": 0.0
            },
            {
              "name": "highwaympg",
              "value": 0.0
            }
          ],
          "feature_curve": [
            {
              "k": 1,
              "added": "enginesize",
              "rmse": 4108.713712036431,
              "r2": 0.7819384848997252,
              "train_rmse": 3813.641503059022,
              "train_r2": 0.757723501815739
            },
            {
              "k": 2,
              "added": "brand",
              "rmse": 3224.212112391303,
              "r2": 0.8657190290990566,
              "train_rmse": 2203.2197165744033,
              "train_r2": 0.9191374977712169
            },
            {
              "k": 3,
              "added": "peakrpm",
              "rmse": 3039.5870218680507,
              "r2": 0.8806571443596972,
              "train_rmse": 2116.3872377809557,
              "train_r2": 0.9253857418730939
            },
            {
              "k": 4,
              "added": "fueltype",
              "rmse": 2956.674712273513,
              "r2": 0.8870790934248307,
              "train_rmse": 2097.057062426589,
              "train_r2": 0.9267425067995084
            },
            {
              "k": 5,
              "added": "enginelocation",
              "rmse": 2892.7810894329,
              "r2": 0.8919067930402583,
              "train_rmse": 2097.0553621555464,
              "train_r2": 0.9267426255922167
            },
            {
              "k": 6,
              "added": "compressionratio",
              "rmse": 2880.0717425203243,
              "r2": 0.8928545150850743,
              "train_rmse": 2087.295311165203,
              "train_r2": 0.9274229432098812
            },
            {
              "k": 7,
              "added": "doornumber",
              "rmse": 2876.361471055618,
              "r2": 0.8931303990246097,
              "train_rmse": 2085.196834305569,
              "train_r2": 0.9275688015508906
            },
            {
              "k": 8,
              "added": "boreratio",
              "rmse": 2883.33998072334,
              "r2": 0.8926112047201052,
              "train_rmse": 2086.1186317155657,
              "train_r2": 0.9275047484622176
            },
            {
              "k": 9,
              "added": "enginetype",
              "rmse": 2874.436093959147,
              "r2": 0.8932734237570097,
              "train_rmse": 1874.3050404534747,
              "train_r2": 0.9414789508439462
            },
            {
              "k": 10,
              "added": "symboling",
              "rmse": 2874.343204674932,
              "r2": 0.8932803215239213,
              "train_rmse": 1874.3102288338428,
              "train_r2": 0.9414786268519851
            },
            {
              "k": 11,
              "added": "cylindernumber",
              "rmse": 2875.171058899811,
              "r2": 0.8932188389150334,
              "train_rmse": 1874.3125981598062,
              "train_r2": 0.9414784788975064
            },
            {
              "k": 12,
              "added": "carheight",
              "rmse": 2878.675823164207,
              "r2": 0.892958352922174,
              "train_rmse": 1869.7089561835487,
              "train_r2": 0.9417656041822591
            },
            {
              "k": 13,
              "added": "carbody",
              "rmse": 2879.720969929504,
              "r2": 0.8928806126367899,
              "train_rmse": 1798.9101247932063,
              "train_r2": 0.9460923388868809
            },
            {
              "k": 14,
              "added": "stroke",
              "rmse": 2924.5646773451103,
              "r2": 0.8895184590390198,
              "train_rmse": 1798.2140047578848,
              "train_r2": 0.9461340518571152
            },
            {
              "k": 15,
              "added": "carlength",
              "rmse": 2963.0130310802406,
              "r2": 0.8865944301183243,
              "train_rmse": 1765.5140363112178,
              "train_r2": 0.9480753106915444
            },
            {
              "k": 16,
              "added": "wheelbase",
              "rmse": 3019.7555344810107,
              "r2": 0.8822093457062797,
              "train_rmse": 1712.2574741838812,
              "train_r2": 0.951160669880843
            },
            {
              "k": 17,
              "added": "aspiration",
              "rmse": 3114.0879235563534,
              "r2": 0.8747352133536552,
              "train_rmse": 1486.0840081546512,
              "train_r2": 0.9632109749464004
            },
            {
              "k": 18,
              "added": "highwaympg",
              "rmse": 3139.810191758671,
              "r2": 0.8726573005155132,
              "train_rmse": 1487.3294427892213,
              "train_r2": 0.9631492859367826
            },
            {
              "k": 19,
              "added": "citympg",
              "rmse": 3154.5869794189666,
              "r2": 0.8714558623106687,
              "train_rmse": 1485.9535637894912,
              "train_r2": 0.9632174331417294
            },
            {
              "k": 20,
              "added": "fuelsystem",
              "rmse": 3201.909774431113,
              "r2": 0.867570285673048,
              "train_rmse": 1461.5073380491722,
              "train_r2": 0.964417737624155
            },
            {
              "k": 21,
              "added": "horsepower",
              "rmse": 3214.755204864452,
              "r2": 0.8665055904910681,
              "train_rmse": 1448.4175117388359,
              "train_r2": 0.9650522603985044
            },
            {
              "k": 22,
              "added": "drivewheel",
              "rmse": 3258.6893985417446,
              "r2": 0.862831876362731,
              "train_rmse": 1436.9739709008174,
              "train_r2": 0.9656023035054508
            },
            {
              "k": 23,
              "added": "curbweight",
              "rmse": 3461.094533426849,
              "r2": 0.8452629955165764,
              "train_rmse": 1394.7113601744607,
              "train_r2": 0.9675958798416741
            },
            {
              "k": 24,
              "added": "carwidth",
              "rmse": 3615.121248545991,
              "r2": 0.8311842362284766,
              "train_rmse": 1369.46075417784,
              "train_r2": 0.9687585819072371
            }
          ]
        }
      }
    },
    {
      "key": "elastic",
      "name": "ElasticNet 回歸",
      "en": "ElasticNet (L1 + L2)",
      "module": "sklearn.linear_model.ElasticNet",
      "desc": "L1 與 L2 混合：l1_ratio=1 等於 Lasso，越接近 0 越像 Ridge。",
      "grid": {
        "alpha": [
          0.001,
          0.0032,
          0.01,
          0.0316,
          0.1,
          0.3162,
          1.0,
          3.1623,
          10.0,
          31.6228,
          100.0,
          316.2278,
          1000.0,
          3162.2777,
          10000.0
        ],
        "l1_ratio": [
          0.1,
          0.3,
          0.5,
          0.7,
          0.9,
          0.99
        ]
      },
      "runs": {
        "40": {
          "n_train": 40,
          "best_params": {
            "alpha": 31.6228,
            "l1_ratio": 0.99
          },
          "converged": true,
          "test": {
            "mse": 23836947.2814183,
            "rmse": 4882.309625722062,
            "mae": 2822.875117264333,
            "r2": 0.6920941797209711,
            "adj_r2": 0.23023544930242767,
            "mape": 19.329968810474803,
            "max_error": 22041.415955661287
          },
          "train": {
            "mse": 979371.0257844869,
            "rmse": 989.6317627200973,
            "mae": 736.7494780971102,
            "r2": 0.9687231295886805,
            "adj_r2": 0.9186801369305692,
            "mape": 6.50308680099171,
            "max_error": 2574.5789065071185
          },
          "cv_rmse": 2369.5494045469786,
          "predictions": [
            6848.08,
            15970.29,
            16421.96,
            930.46,
            9706.02,
            12932.71,
            6534.96,
            7582.22,
            16688.22,
            8624.76,
            14720.02,
            21988.84,
            11405.67,
            12140.38,
            6539.87,
            12836.96,
            11543.88,
            19383.38,
            10666.21,
            6758.69,
            12480.29,
            13394.64,
            11864.0,
            13014.35,
            16888.35,
            6056.84,
            7567.43,
            14082.86,
            7776.11,
            7148.91,
            9344.04,
            10582.53,
            14583.99,
            11059.96,
            7183.66,
            19273.58,
            8550.19,
            16504.83,
            6982.79,
            32816.41,
            6561.59
          ],
          "coef": [
            {
              "name": "brand_alfa-romero",
              "value": 0.0
            },
            {
              "name": "brand_audi",
              "value": 683.3203
            },
            {
              "name": "brand_bmw",
              "value": 0.0
            },
            {
              "name": "brand_buick",
              "value": 1193.0296
            },
            {
              "name": "brand_chevrolet",
              "value": -13.6837
            },
            {
              "name": "brand_dodge",
              "value": -0.0
            },
            {
              "name": "brand_honda",
              "value": 68.124
            },
            {
              "name": "brand_isuzu",
              "value": 0.0
            },
            {
              "name": "brand_jaguar",
              "value": 0.0
            },
            {
              "name": "brand_mazda",
              "value": -91.7857
            },
            {
              "name": "brand_mercury",
              "value": -50.6215
            },
            {
              "name": "brand_mitsubishi",
              "value": -125.0525
            },
            {
              "name": "brand_nissan",
              "value": -78.8571
            },
            {
              "name": "brand_peugeot",
              "value": -237.9273
            },
            {
              "name": "brand_plymouth",
              "value": -0.0
            },
            {
              "name": "brand_porsche",
              "value": 0.0
            },
            {
              "name": "brand_renault",
              "value": 0.0
            },
            {
              "name": "brand_saab",
              "value": 371.1061
            },
            {
              "name": "brand_subaru",
              "value": -139.8363
            },
            {
              "name": "brand_toyota",
              "value": -75.5988
            },
            {
              "name": "brand_volkswagen",
              "value": -248.4045
            },
            {
              "name": "brand_volvo",
              "value": 129.9923
            },
            {
              "name": "fueltype_diesel",
              "value": 8.0006
            },
            {
              "name": "fueltype_gas",
              "value": -7.7854
            },
            {
              "name": "aspiration_std",
              "value": -302.6794
            },
            {
              "name": "aspiration_turbo",
              "value": 302.6784
            },
            {
              "name": "doornumber_four",
              "value": -4.3386
            },
            {
              "name": "doornumber_two",
              "value": 4.3633
            },
            {
              "name": "carbody_convertible",
              "value": 0.0
            },
            {
              "name": "carbody_hardtop",
              "value": 0.0
            },
            {
              "name": "carbody_hatchback",
              "value": 19.9596
            },
            {
              "name": "carbody_sedan",
              "value": 0.0
            },
            {
              "name": "carbody_wagon",
              "value": -149.2052
            },
            {
              "name": "drivewheel_4wd",
              "value": -0.0
            },
            {
              "name": "drivewheel_fwd",
              "value": -184.4998
            },
            {
              "name": "drivewheel_rwd",
              "value": 268.187
            },
            {
              "name": "enginelocation_front",
              "value": 0.0
            },
            {
              "name": "enginelocation_rear",
              "value": 0.0
            },
            {
              "name": "enginetype_dohc",
              "value": -33.2881
            },
            {
              "name": "enginetype_dohcv",
              "value": 0.0
            },
            {
              "name": "enginetype_l",
              "value": -238.2917
            },
            {
              "name": "enginetype_ohc",
              "value": 95.7365
            },
            {
              "name": "enginetype_ohcf",
              "value": -139.7258
            },
            {
              "name": "enginetype_ohcv",
              "value": 155.8933
            },
            {
              "name": "enginetype_rotor",
              "value": 123.616
            },
            {
              "name": "fuelsystem_1bbl",
              "value": 68.1332
            },
            {
              "name": "fuelsystem_2bbl",
              "value": -400.0437
            },
            {
              "name": "fuelsystem_4bbl",
              "value": 123.6386
            },
            {
              "name": "fuelsystem_idi",
              "value": 7.7031
            },
            {
              "name": "fuelsystem_mfi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_mpfi",
              "value": 127.6868
            },
            {
              "name": "fuelsystem_spdi",
              "value": 82.4805
            },
            {
              "name": "fuelsystem_spfi",
              "value": 0.0
            },
            {
              "name": "symboling",
              "value": 44.9738
            },
            {
              "name": "wheelbase",
              "value": 384.8061
            },
            {
              "name": "carlength",
              "value": 460.0347
            },
            {
              "name": "carwidth",
              "value": 790.0238
            },
            {
              "name": "carheight",
              "value": 0.0
            },
            {
              "name": "curbweight",
              "value": 529.5023
            },
            {
              "name": "cylindernumber",
              "value": 574.8196
            },
            {
              "name": "enginesize",
              "value": 470.3838
            },
            {
              "name": "boreratio",
              "value": -16.5177
            },
            {
              "name": "stroke",
              "value": 0.0
            },
            {
              "name": "compressionratio",
              "value": 0.0
            },
            {
              "name": "horsepower",
              "value": 357.7854
            },
            {
              "name": "peakrpm",
              "value": 80.1554
            },
            {
              "name": "citympg",
              "value": -191.8851
            },
            {
              "name": "highwaympg",
              "value": -189.7297
            }
          ],
          "feature_curve": [
            {
              "k": 1,
              "added": "enginesize",
              "rmse": 5139.769590847305,
              "r2": 0.6587642191695484,
              "train_rmse": 3407.5701431608336,
              "train_r2": 0.6291778668060962
            },
            {
              "k": 2,
              "added": "horsepower",
              "rmse": 4684.165704888116,
              "r2": 0.716579171964187,
              "train_rmse": 2966.2824676237815,
              "train_r2": 0.7190034104439572
            },
            {
              "k": 3,
              "added": "drivewheel",
              "rmse": 4605.258304451082,
              "r2": 0.7260475106585822,
              "train_rmse": 2874.226590528657,
              "train_r2": 0.736173725391428
            },
            {
              "k": 4,
              "added": "brand",
              "rmse": 4327.000256697315,
              "r2": 0.7581527773791322,
              "train_rmse": 1442.0532656677383,
              "train_r2": 0.9335892103825585
            },
            {
              "k": 5,
              "added": "cylindernumber",
              "rmse": 4252.8785807032855,
              "r2": 0.7663675140815306,
              "train_rmse": 1484.5018079509616,
              "train_r2": 0.9296219060059125
            },
            {
              "k": 6,
              "added": "carbody",
              "rmse": 4222.006325048827,
              "r2": 0.7697471462350035,
              "train_rmse": 1480.81052931832,
              "train_r2": 0.9299714672790693
            },
            {
              "k": 7,
              "added": "boreratio",
              "rmse": 4213.814351008149,
              "r2": 0.7706398002628736,
              "train_rmse": 1478.8440077572286,
              "train_r2": 0.9301573400498829
            },
            {
              "k": 8,
              "added": "peakrpm",
              "rmse": 4207.353463775492,
              "r2": 0.7713426002507322,
              "train_rmse": 1476.6255426818439,
              "train_r2": 0.9303667296582587
            },
            {
              "k": 9,
              "added": "enginelocation",
              "rmse": 4207.353463775491,
              "r2": 0.7713426002507322,
              "train_rmse": 1476.6255426818439,
              "train_r2": 0.9303667296582588
            },
            {
              "k": 10,
              "added": "compressionratio",
              "rmse": 4209.390193302233,
              "r2": 0.771121166038131,
              "train_rmse": 1428.777579402276,
              "train_r2": 0.9348063506297953
            },
            {
              "k": 11,
              "added": "symboling",
              "rmse": 4212.171363427006,
              "r2": 0.7708186228038149,
              "train_rmse": 1427.1171801858259,
              "train_r2": 0.9349577871977462
            },
            {
              "k": 12,
              "added": "fueltype",
              "rmse": 4219.058987058824,
              "r2": 0.7700685081931452,
              "train_rmse": 1403.020774496151,
              "train_r2": 0.937135677049817
            },
            {
              "k": 13,
              "added": "stroke",
              "rmse": 4222.983585331413,
              "r2": 0.7696405414628884,
              "train_rmse": 1402.4889859608613,
              "train_r2": 0.9371833230878891
            },
            {
              "k": 14,
              "added": "carheight",
              "rmse": 4240.273947488425,
              "r2": 0.7677503364580169,
              "train_rmse": 1390.377604172821,
              "train_r2": 0.9382635622670811
            },
            {
              "k": 15,
              "added": "doornumber",
              "rmse": 4240.275014076352,
              "r2": 0.7677502196190007,
              "train_rmse": 1390.3776755971912,
              "train_r2": 0.9382635559242196
            },
            {
              "k": 16,
              "added": "curbweight",
              "rmse": 4300.49440567727,
              "r2": 0.7611066632689956,
              "train_rmse": 1272.175163921433,
              "train_r2": 0.94831436398646
            },
            {
              "k": 17,
              "added": "enginetype",
              "rmse": 4304.004237759808,
              "r2": 0.760716560374899,
              "train_rmse": 1264.3614032759783,
              "train_r2": 0.9489473254509171
            },
            {
              "k": 18,
              "added": "citympg",
              "rmse": 4342.863545679941,
              "r2": 0.7563762464482611,
              "train_rmse": 1268.9219956177267,
              "train_r2": 0.9485783639349845
            },
            {
              "k": 19,
              "added": "highwaympg",
              "rmse": 4406.798734587618,
              "r2": 0.7491502373254638,
              "train_rmse": 1274.293668632622,
              "train_r2": 0.9481420804260259
            },
            {
              "k": 20,
              "added": "carlength",
              "rmse": 4479.591917978272,
              "r2": 0.7407945269910061,
              "train_rmse": 1237.8755356539018,
              "train_r2": 0.9510638274077138
            },
            {
              "k": 21,
              "added": "carwidth",
              "rmse": 4542.167231313264,
              "r2": 0.7335022774127,
              "train_rmse": 1113.163839038649,
              "train_r2": 0.9604274333682619
            },
            {
              "k": 22,
              "added": "wheelbase",
              "rmse": 4591.495505165605,
              "r2": 0.7276824761835224,
              "train_rmse": 1123.8987326454023,
              "train_r2": 0.9596605100981122
            },
            {
              "k": 23,
              "added": "fuelsystem",
              "rmse": 4720.917477859175,
              "r2": 0.7121143083378947,
              "train_rmse": 1079.7747046972263,
              "train_r2": 0.9627657733727548
            },
            {
              "k": 24,
              "added": "aspiration",
              "rmse": 4882.49108821741,
              "r2": 0.6920712912107799,
              "train_rmse": 989.6401704966654,
              "train_r2": 0.968722598138367
            }
          ]
        },
        "80": {
          "n_train": 80,
          "best_params": {
            "alpha": 31.6228,
            "l1_ratio": 0.99
          },
          "converged": true,
          "test": {
            "mse": 14066427.189861998,
            "rmse": 3750.5235887622407,
            "mae": 2402.7525348936338,
            "r2": 0.8183016159260478,
            "adj_r2": 0.5457540398151195,
            "mape": 18.936709292186066,
            "max_error": 16288.960035298776
          },
          "train": {
            "mse": 1840442.201739588,
            "rmse": 1356.6289845567903,
            "mae": 966.1328605753536,
            "r2": 0.9680678730502104,
            "adj_r2": 0.9541338540175749,
            "mape": 8.109249208552335,
            "max_error": 4604.916044520622
          },
          "cv_rmse": 3123.3163989727177,
          "predictions": [
            6034.16,
            18696.23,
            15997.84,
            -394.8,
            9879.23,
            15097.95,
            5125.05,
            7474.01,
            17632.08,
            7880.8,
            19975.05,
            28092.8,
            11221.93,
            13236.55,
            5000.82,
            13433.18,
            12275.07,
            19111.3,
            10561.77,
            6342.08,
            10246.69,
            13532.87,
            12248.44,
            13661.39,
            19215.84,
            5598.67,
            7623.32,
            14229.24,
            7562.69,
            6965.07,
            9336.48,
            10675.96,
            19375.0,
            12031.25,
            7205.89,
            25026.04,
            8465.77,
            17289.53,
            6206.12,
            35963.08,
            4779.6
          ],
          "coef": [
            {
              "name": "brand_alfa-romero",
              "value": 0.23
            },
            {
              "name": "brand_audi",
              "value": 418.0862
            },
            {
              "name": "brand_bmw",
              "value": 561.7865
            },
            {
              "name": "brand_buick",
              "value": 1134.94
            },
            {
              "name": "brand_chevrolet",
              "value": 0.8644
            },
            {
              "name": "brand_dodge",
              "value": -27.0231
            },
            {
              "name": "brand_honda",
              "value": 136.036
            },
            {
              "name": "brand_isuzu",
              "value": -229.04
            },
            {
              "name": "brand_jaguar",
              "value": 784.4404
            },
            {
              "name": "brand_mazda",
              "value": -216.2481
            },
            {
              "name": "brand_mercury",
              "value": -60.5097
            },
            {
              "name": "brand_mitsubishi",
              "value": -249.8751
            },
            {
              "name": "brand_nissan",
              "value": -121.491
            },
            {
              "name": "brand_peugeot",
              "value": -380.7387
            },
            {
              "name": "brand_plymouth",
              "value": -200.9896
            },
            {
              "name": "brand_porsche",
              "value": 479.0705
            },
            {
              "name": "brand_renault",
              "value": 0.0
            },
            {
              "name": "brand_saab",
              "value": 215.9985
            },
            {
              "name": "brand_subaru",
              "value": -251.9365
            },
            {
              "name": "brand_toyota",
              "value": -163.8017
            },
            {
              "name": "brand_volkswagen",
              "value": -317.9331
            },
            {
              "name": "brand_volvo",
              "value": 48.6469
            },
            {
              "name": "fueltype_diesel",
              "value": 1.7314
            },
            {
              "name": "fueltype_gas",
              "value": -1.6621
            },
            {
              "name": "aspiration_std",
              "value": -135.9398
            },
            {
              "name": "aspiration_turbo",
              "value": 135.9322
            },
            {
              "name": "doornumber_four",
              "value": 41.7124
            },
            {
              "name": "doornumber_two",
              "value": -41.664
            },
            {
              "name": "carbody_convertible",
              "value": 29.4904
            },
            {
              "name": "carbody_hardtop",
              "value": 259.1069
            },
            {
              "name": "carbody_hatchback",
              "value": -53.5582
            },
            {
              "name": "carbody_sedan",
              "value": 58.496
            },
            {
              "name": "carbody_wagon",
              "value": -195.482
            },
            {
              "name": "drivewheel_4wd",
              "value": -6.1603
            },
            {
              "name": "drivewheel_fwd",
              "value": -252.4863
            },
            {
              "name": "drivewheel_rwd",
              "value": 315.3027
            },
            {
              "name": "enginelocation_front",
              "value": -479.0456
            },
            {
              "name": "enginelocation_rear",
              "value": 479.1053
            },
            {
              "name": "enginetype_dohc",
              "value": 199.8781
            },
            {
              "name": "enginetype_dohcv",
              "value": 0.0
            },
            {
              "name": "enginetype_l",
              "value": -380.9468
            },
            {
              "name": "enginetype_ohc",
              "value": 0.0
            },
            {
              "name": "enginetype_ohcf",
              "value": -17.3568
            },
            {
              "name": "enginetype_ohcv",
              "value": 159.2424
            },
            {
              "name": "enginetype_rotor",
              "value": 122.696
            },
            {
              "name": "fuelsystem_1bbl",
              "value": 22.8618
            },
            {
              "name": "fuelsystem_2bbl",
              "value": -311.0719
            },
            {
              "name": "fuelsystem_4bbl",
              "value": 122.7454
            },
            {
              "name": "fuelsystem_idi",
              "value": 1.4904
            },
            {
              "name": "fuelsystem_mfi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_mpfi",
              "value": 171.6075
            },
            {
              "name": "fuelsystem_spdi",
              "value": -5.396
            },
            {
              "name": "fuelsystem_spfi",
              "value": 0.0
            },
            {
              "name": "symboling",
              "value": 0.0
            },
            {
              "name": "wheelbase",
              "value": 571.0424
            },
            {
              "name": "carlength",
              "value": 556.2609
            },
            {
              "name": "carwidth",
              "value": 749.5494
            },
            {
              "name": "carheight",
              "value": -0.0
            },
            {
              "name": "curbweight",
              "value": 742.2742
            },
            {
              "name": "cylindernumber",
              "value": 736.3422
            },
            {
              "name": "enginesize",
              "value": 1023.6879
            },
            {
              "name": "boreratio",
              "value": 0.0
            },
            {
              "name": "stroke",
              "value": 97.6613
            },
            {
              "name": "compressionratio",
              "value": 0.0
            },
            {
              "name": "horsepower",
              "value": 614.0397
            },
            {
              "name": "peakrpm",
              "value": -104.0029
            },
            {
              "name": "citympg",
              "value": -175.6448
            },
            {
              "name": "highwaympg",
              "value": -180.5625
            }
          ],
          "feature_curve": [
            {
              "k": 1,
              "added": "enginesize",
              "rmse": 4922.666028254833,
              "r2": 0.6869829402697397,
              "train_rmse": 3694.566559484139,
              "train_r2": 0.763172214520793
            },
            {
              "k": 2,
              "added": "brand",
              "rmse": 3966.8462233733926,
              "r2": 0.7967371583828711,
              "train_rmse": 2091.0842285522044,
              "train_r2": 0.9241337326754263
            },
            {
              "k": 3,
              "added": "horsepower",
              "rmse": 3575.1857664234294,
              "r2": 0.834893379668522,
              "train_rmse": 1781.8202339883417,
              "train_r2": 0.9449149894696985
            },
            {
              "k": 4,
              "added": "carbody",
              "rmse": 3430.9254689365466,
              "r2": 0.8479488076717154,
              "train_rmse": 1782.6534950809764,
              "train_r2": 0.9448634568541093
            },
            {
              "k": 5,
              "added": "curbweight",
              "rmse": 3341.571544349422,
              "r2": 0.8557656205687374,
              "train_rmse": 1557.4630247536618,
              "train_r2": 0.9579136605181316
            },
            {
              "k": 6,
              "added": "cylindernumber",
              "rmse": 3324.7209083776256,
              "r2": 0.8572166222689211,
              "train_rmse": 1613.6844984399793,
              "train_r2": 0.9548203441808261
            },
            {
              "k": 7,
              "added": "peakrpm",
              "rmse": 3320.284661510505,
              "r2": 0.8575974059407236,
              "train_rmse": 1612.6148423439479,
              "train_r2": 0.9548802204171738
            },
            {
              "k": 8,
              "added": "fueltype",
              "rmse": 3318.8578035917885,
              "r2": 0.857719771719964,
              "train_rmse": 1610.477262021896,
              "train_r2": 0.9549997569962941
            },
            {
              "k": 9,
              "added": "compressionratio",
              "rmse": 3318.857820216204,
              "r2": 0.8577197702945787,
              "train_rmse": 1610.4772478687314,
              "train_r2": 0.9549997577872346
            },
            {
              "k": 10,
              "added": "carheight",
              "rmse": 3319.189421615086,
              "r2": 0.8576913372114192,
              "train_rmse": 1612.4548957891411,
              "train_r2": 0.9548891703477004
            },
            {
              "k": 11,
              "added": "symboling",
              "rmse": 3322.165632640321,
              "r2": 0.8574360155379528,
              "train_rmse": 1610.5659238741443,
              "train_r2": 0.9549948020493152
            },
            {
              "k": 12,
              "added": "enginetype",
              "rmse": 3327.1929722437276,
              "r2": 0.857004212949724,
              "train_rmse": 1540.2214325151886,
              "train_r2": 0.9588403200781421
            },
            {
              "k": 13,
              "added": "doornumber",
              "rmse": 3342.0148905340507,
              "r2": 0.8557273451626916,
              "train_rmse": 1532.6216779578506,
              "train_r2": 0.9592454978553911
            },
            {
              "k": 14,
              "added": "wheelbase",
              "rmse": 3358.9920639747106,
              "r2": 0.8542578345850014,
              "train_rmse": 1476.428767473199,
              "train_r2": 0.9621792043300096
            },
            {
              "k": 15,
              "added": "stroke",
              "rmse": 3369.6707178279785,
              "r2": 0.8533296966256309,
              "train_rmse": 1470.4884818289863,
              "train_r2": 0.9624829296049039
            },
            {
              "k": 16,
              "added": "boreratio",
              "rmse": 3401.1378489380254,
              "r2": 0.850577591957003,
              "train_rmse": 1480.9723461948997,
              "train_r2": 0.9619460658540667
            },
            {
              "k": 17,
              "added": "aspiration",
              "rmse": 3451.8653981174443,
              "r2": 0.8460871190488872,
              "train_rmse": 1439.717735839386,
              "train_r2": 0.9640366306341903
            },
            {
              "k": 18,
              "added": "carlength",
              "rmse": 3492.012034789163,
              "r2": 0.8424861575622754,
              "train_rmse": 1427.8772102022356,
              "train_r2": 0.9646257379998467
            },
            {
              "k": 19,
              "added": "highwaympg",
              "rmse": 3523.964733568405,
              "r2": 0.8395903949938777,
              "train_rmse": 1451.6697961333016,
              "train_r2": 0.9634370401340444
            },
            {
              "k": 20,
              "added": "citympg",
              "rmse": 3550.988165176812,
              "r2": 0.8371207682872943,
              "train_rmse": 1464.7420492578888,
              "train_r2": 0.962775578032631
            },
            {
              "k": 21,
              "added": "carwidth",
              "rmse": 3602.0465149158736,
              "r2": 0.832403132960874,
              "train_rmse": 1429.700403669524,
              "train_r2": 0.964535344655406
            },
            {
              "k": 22,
              "added": "drivewheel",
              "rmse": 3639.3197605235214,
              "r2": 0.8289166705397828,
              "train_rmse": 1421.6082839966045,
              "train_r2": 0.9649356691814993
            },
            {
              "k": 23,
              "added": "enginelocation",
              "rmse": 3667.1680030755624,
              "r2": 0.8262883779138206,
              "train_rmse": 1353.1912385395256,
              "train_r2": 0.9682295022903321
            },
            {
              "k": 24,
              "added": "fuelsystem",
              "rmse": 3750.6925897329093,
              "r2": 0.8182852406683572,
              "train_rmse": 1356.6158387613293,
              "train_r2": 0.9680684918946851
            }
          ]
        },
        "120": {
          "n_train": 120,
          "best_params": {
            "alpha": 0.3162,
            "l1_ratio": 0.3
          },
          "converged": true,
          "test": {
            "mse": 12292289.666287823,
            "rmse": 3506.036175838439,
            "mae": 2266.492978874155,
            "r2": 0.8412184459645042,
            "adj_r2": 0.6030461149112606,
            "mape": 18.69955630764423,
            "max_error": 13591.486238195332
          },
          "train": {
            "mse": 2029909.394025858,
            "rmse": 1424.748888059176,
            "mae": 1043.2475905665328,
            "r2": 0.9661957273390686,
            "adj_r2": 0.9576557005615701,
            "mape": 8.546410953902447,
            "max_error": 6317.925936252672
          },
          "cv_rmse": 2208.4315429944627,
          "predictions": [
            5910.85,
            18612.74,
            15317.89,
            -1629.8,
            10205.04,
            14702.19,
            5349.47,
            6987.58,
            17570.45,
            7211.41,
            21602.82,
            30774.53,
            12400.59,
            14276.88,
            4272.76,
            13734.76,
            11989.8,
            18628.47,
            9811.59,
            6200.96,
            10279.1,
            12817.18,
            12090.03,
            13995.29,
            19580.47,
            5324.11,
            7281.55,
            13282.86,
            7274.52,
            6611.65,
            9079.98,
            10436.42,
            20662.17,
            11371.2,
            7252.1,
            27723.51,
            11159.9,
            16181.07,
            5629.21,
            35647.21,
            3765.27
          ],
          "coef": [
            {
              "name": "brand_alfa-romero",
              "value": 4.8545
            },
            {
              "name": "brand_audi",
              "value": 232.6794
            },
            {
              "name": "brand_bmw",
              "value": 1025.4502
            },
            {
              "name": "brand_buick",
              "value": 964.7255
            },
            {
              "name": "brand_chevrolet",
              "value": 2.8883
            },
            {
              "name": "brand_dodge",
              "value": -126.3699
            },
            {
              "name": "brand_honda",
              "value": 63.1152
            },
            {
              "name": "brand_isuzu",
              "value": -310.5634
            },
            {
              "name": "brand_jaguar",
              "value": 548.0118
            },
            {
              "name": "brand_mazda",
              "value": -184.1885
            },
            {
              "name": "brand_mercury",
              "value": -172.1235
            },
            {
              "name": "brand_mitsubishi",
              "value": -246.4091
            },
            {
              "name": "brand_nissan",
              "value": -174.8019
            },
            {
              "name": "brand_peugeot",
              "value": -425.2411
            },
            {
              "name": "brand_plymouth",
              "value": -258.8393
            },
            {
              "name": "brand_porsche",
              "value": 574.3568
            },
            {
              "name": "brand_renault",
              "value": 0.0
            },
            {
              "name": "brand_saab",
              "value": 108.8116
            },
            {
              "name": "brand_subaru",
              "value": -225.0735
            },
            {
              "name": "brand_toyota",
              "value": -294.781
            },
            {
              "name": "brand_volkswagen",
              "value": -308.2014
            },
            {
              "name": "brand_volvo",
              "value": -34.1055
            },
            {
              "name": "fueltype_diesel",
              "value": 50.274
            },
            {
              "name": "fueltype_gas",
              "value": -50.2798
            },
            {
              "name": "aspiration_std",
              "value": -189.5664
            },
            {
              "name": "aspiration_turbo",
              "value": 189.5647
            },
            {
              "name": "doornumber_four",
              "value": 136.6517
            },
            {
              "name": "doornumber_two",
              "value": -136.6533
            },
            {
              "name": "carbody_convertible",
              "value": 451.6622
            },
            {
              "name": "carbody_hardtop",
              "value": 103.4636
            },
            {
              "name": "carbody_hatchback",
              "value": -46.2453
            },
            {
              "name": "carbody_sedan",
              "value": 38.1809
            },
            {
              "name": "carbody_wagon",
              "value": -281.1902
            },
            {
              "name": "drivewheel_4wd",
              "value": -48.9742
            },
            {
              "name": "drivewheel_fwd",
              "value": -422.3092
            },
            {
              "name": "drivewheel_rwd",
              "value": 452.8899
            },
            {
              "name": "enginelocation_front",
              "value": -574.3501
            },
            {
              "name": "enginelocation_rear",
              "value": 574.3469
            },
            {
              "name": "enginetype_dohc",
              "value": 88.257
            },
            {
              "name": "enginetype_dohcv",
              "value": 0.0
            },
            {
              "name": "enginetype_l",
              "value": -425.2336
            },
            {
              "name": "enginetype_ohc",
              "value": 138.9238
            },
            {
              "name": "enginetype_ohcf",
              "value": 78.2745
            },
            {
              "name": "enginetype_ohcv",
              "value": -130.7252
            },
            {
              "name": "enginetype_rotor",
              "value": 199.7953
            },
            {
              "name": "fuelsystem_1bbl",
              "value": -27.7856
            },
            {
              "name": "fuelsystem_2bbl",
              "value": -145.0726
            },
            {
              "name": "fuelsystem_4bbl",
              "value": 199.7955
            },
            {
              "name": "fuelsystem_idi",
              "value": 50.2781
            },
            {
              "name": "fuelsystem_mfi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_mpfi",
              "value": 97.6184
            },
            {
              "name": "fuelsystem_spdi",
              "value": -108.87
            },
            {
              "name": "fuelsystem_spfi",
              "value": 50.6856
            },
            {
              "name": "symboling",
              "value": 129.2568
            },
            {
              "name": "wheelbase",
              "value": 686.5502
            },
            {
              "name": "carlength",
              "value": 404.5615
            },
            {
              "name": "carwidth",
              "value": 776.6695
            },
            {
              "name": "carheight",
              "value": 41.3696
            },
            {
              "name": "curbweight",
              "value": 816.8218
            },
            {
              "name": "cylindernumber",
              "value": 790.6159
            },
            {
              "name": "enginesize",
              "value": 1165.7406
            },
            {
              "name": "boreratio",
              "value": -27.114
            },
            {
              "name": "stroke",
              "value": 145.1411
            },
            {
              "name": "compressionratio",
              "value": -34.2623
            },
            {
              "name": "horsepower",
              "value": 864.5076
            },
            {
              "name": "peakrpm",
              "value": 55.4526
            },
            {
              "name": "citympg",
              "value": -166.1605
            },
            {
              "name": "highwaympg",
              "value": -138.8754
            }
          ],
          "feature_curve": [
            {
              "k": 1,
              "added": "enginesize",
              "rmse": 4508.744977372975,
              "r2": 0.7374097446867584,
              "train_rmse": 3833.783884417572,
              "train_r2": 0.7552345033288964
            },
            {
              "k": 2,
              "added": "brand",
              "rmse": 3573.1119622049373,
              "r2": 0.8350848659425485,
              "train_rmse": 2223.1771340143273,
              "train_r2": 0.9176918052459536
            },
            {
              "k": 3,
              "added": "enginetype",
              "rmse": 3357.9545811270755,
              "r2": 0.8543478506629054,
              "train_rmse": 2021.9654699891855,
              "train_r2": 0.9319164156066393
            },
            {
              "k": 4,
              "added": "carbody",
              "rmse": 3214.285044255532,
              "r2": 0.8665446349714301,
              "train_rmse": 2030.8874382593106,
              "train_r2": 0.9313142492896205
            },
            {
              "k": 5,
              "added": "horsepower",
              "rmse": 3149.86796714139,
              "r2": 0.8718401583558386,
              "train_rmse": 1761.4971537904028,
              "train_r2": 0.9483275761171138
            },
            {
              "k": 6,
              "added": "enginelocation",
              "rmse": 3113.916035086252,
              "r2": 0.8747490414656567,
              "train_rmse": 1754.6990419546148,
              "train_r2": 0.9487256432742346
            },
            {
              "k": 7,
              "added": "symboling",
              "rmse": 3096.1014151286035,
              "r2": 0.8761780559962605,
              "train_rmse": 1749.9030771935895,
              "train_r2": 0.9490055476225212
            },
            {
              "k": 8,
              "added": "fueltype",
              "rmse": 3089.213599865051,
              "r2": 0.8767283700144928,
              "train_rmse": 1720.9059635285562,
              "train_r2": 0.9506815723955626
            },
            {
              "k": 9,
              "added": "compressionratio",
              "rmse": 3088.6064498014102,
              "r2": 0.8767768205477192,
              "train_rmse": 1719.9344972426443,
              "train_r2": 0.9507372380362968
            },
            {
              "k": 10,
              "added": "cylindernumber",
              "rmse": 3099.267102942178,
              "r2": 0.8759247167399503,
              "train_rmse": 1737.1005468494216,
              "train_r2": 0.9497489828825754
            },
            {
              "k": 11,
              "added": "curbweight",
              "rmse": 3102.2239537154087,
              "r2": 0.875687856158451,
              "train_rmse": 1558.952621643395,
              "train_r2": 0.9595274306437008
            },
            {
              "k": 12,
              "added": "peakrpm",
              "rmse": 3099.2081171869404,
              "r2": 0.8759294395369221,
              "train_rmse": 1558.7476835952255,
              "train_r2": 0.959538070895456
            },
            {
              "k": 13,
              "added": "carheight",
              "rmse": 3110.3489721197993,
              "r2": 0.8750358328584638,
              "train_rmse": 1559.7864535971034,
              "train_r2": 0.959484124200298
            },
            {
              "k": 14,
              "added": "carwidth",
              "rmse": 3126.1063596751637,
              "r2": 0.8737664597454484,
              "train_rmse": 1488.9157851457148,
              "train_r2": 0.9630822511433436
            },
            {
              "k": 15,
              "added": "boreratio",
              "rmse": 3145.872329303565,
              "r2": 0.8721650961173567,
              "train_rmse": 1504.0267173385678,
              "train_r2": 0.9623290957801144
            },
            {
              "k": 16,
              "added": "wheelbase",
              "rmse": 3164.1342035076514,
              "r2": 0.8706766181241341,
              "train_rmse": 1461.1048385418171,
              "train_r2": 0.964448518732359
            },
            {
              "k": 17,
              "added": "doornumber",
              "rmse": 3185.1305034390934,
              "r2": 0.8689546168676482,
              "train_rmse": 1452.3054631859798,
              "train_r2": 0.9648754406367037
            },
            {
              "k": 18,
              "added": "stroke",
              "rmse": 3205.7013593657884,
              "r2": 0.8672564630856765,
              "train_rmse": 1451.5059601376083,
              "train_r2": 0.9649141025618785
            },
            {
              "k": 19,
              "added": "carlength",
              "rmse": 3232.4192516440203,
              "r2": 0.8650345423326291,
              "train_rmse": 1469.8768522639848,
              "train_r2": 0.9640203574913986
            },
            {
              "k": 20,
              "added": "aspiration",
              "rmse": 3272.5641519429087,
              "r2": 0.8616613287614944,
              "train_rmse": 1434.2825805777518,
              "train_r2": 0.9657418118327077
            },
            {
              "k": 21,
              "added": "highwaympg",
              "rmse": 3315.1177000051575,
              "r2": 0.8580402693014109,
              "train_rmse": 1451.675102344778,
              "train_r2": 0.9649059250523586
            },
            {
              "k": 22,
              "added": "citympg",
              "rmse": 3339.754411248221,
              "r2": 0.8559224460618584,
              "train_rmse": 1461.0196262681416,
              "train_r2": 0.9644526653673339
            },
            {
              "k": 23,
              "added": "fuelsystem",
              "rmse": 3392.5415535757757,
              "r2": 0.8513319606212177,
              "train_rmse": 1458.7300940839177,
              "train_r2": 0.9645639889875288
            },
            {
              "k": 24,
              "added": "drivewheel",
              "rmse": 3506.039239005639,
              "r2": 0.8412181685146227,
              "train_rmse": 1424.7496422439947,
              "train_r2": 0.9661956915507606
            }
          ]
        },
        "164": {
          "n_train": 164,
          "best_params": {
            "alpha": 10.0,
            "l1_ratio": 0.99
          },
          "converged": true,
          "test": {
            "mse": 11046167.846485702,
            "rmse": 3323.577567394163,
            "mae": 1964.563244392112,
            "r2": 0.8573148091675586,
            "adj_r2": 0.6432870229188966,
            "mape": 15.702371651328162,
            "max_error": 13507.67624153824
          },
          "train": {
            "mse": 2059293.624827209,
            "rmse": 1435.0239108904104,
            "mae": 1075.3900847877262,
            "r2": 0.9656955996396798,
            "adj_r2": 0.9597725377069626,
            "mape": 8.755577440327949,
            "max_error": 5829.226803391764
          },
          "cv_rmse": 1936.2545369128588,
          "predictions": [
            6382.18,
            17168.16,
            14844.55,
            -525.51,
            10368.39,
            12021.97,
            5786.15,
            6428.84,
            17377.88,
            7337.59,
            21740.45,
            31349.5,
            12829.1,
            13343.93,
            5226.7,
            12479.07,
            11265.29,
            18675.79,
            9398.35,
            6278.23,
            10333.53,
            13915.33,
            11678.84,
            12804.37,
            18691.6,
            5872.92,
            6984.75,
            14361.48,
            7075.19,
            6436.48,
            9173.66,
            10573.53,
            21025.9,
            10394.46,
            7147.96,
            27807.32,
            12145.39,
            16176.97,
            5709.56,
            34271.25,
            4753.02
          ],
          "coef": [
            {
              "name": "brand_alfa-romero",
              "value": 16.874
            },
            {
              "name": "brand_audi",
              "value": 188.2365
            },
            {
              "name": "brand_bmw",
              "value": 1128.3362
            },
            {
              "name": "brand_buick",
              "value": 1228.7271
            },
            {
              "name": "brand_chevrolet",
              "value": -31.2036
            },
            {
              "name": "brand_dodge",
              "value": -232.1418
            },
            {
              "name": "brand_honda",
              "value": 42.0717
            },
            {
              "name": "brand_isuzu",
              "value": -204.2561
            },
            {
              "name": "brand_jaguar",
              "value": 699.4817
            },
            {
              "name": "brand_mazda",
              "value": -121.101
            },
            {
              "name": "brand_mercury",
              "value": -123.2722
            },
            {
              "name": "brand_mitsubishi",
              "value": -378.9434
            },
            {
              "name": "brand_nissan",
              "value": -184.6292
            },
            {
              "name": "brand_peugeot",
              "value": -318.8996
            },
            {
              "name": "brand_plymouth",
              "value": -265.4153
            },
            {
              "name": "brand_porsche",
              "value": 693.9867
            },
            {
              "name": "brand_renault",
              "value": 0.0
            },
            {
              "name": "brand_saab",
              "value": 122.1287
            },
            {
              "name": "brand_subaru",
              "value": -196.677
            },
            {
              "name": "brand_toyota",
              "value": -420.0326
            },
            {
              "name": "brand_volkswagen",
              "value": -207.7388
            },
            {
              "name": "brand_volvo",
              "value": 38.8272
            },
            {
              "name": "fueltype_diesel",
              "value": 9.3812
            },
            {
              "name": "fueltype_gas",
              "value": -9.4531
            },
            {
              "name": "aspiration_std",
              "value": -283.1343
            },
            {
              "name": "aspiration_turbo",
              "value": 283.1566
            },
            {
              "name": "doornumber_four",
              "value": 149.6624
            },
            {
              "name": "doornumber_two",
              "value": -149.7015
            },
            {
              "name": "carbody_convertible",
              "value": 615.946
            },
            {
              "name": "carbody_hardtop",
              "value": -133.7751
            },
            {
              "name": "carbody_hatchback",
              "value": -0.0
            },
            {
              "name": "carbody_sedan",
              "value": 29.6645
            },
            {
              "name": "carbody_wagon",
              "value": -270.5396
            },
            {
              "name": "drivewheel_4wd",
              "value": -46.2795
            },
            {
              "name": "drivewheel_fwd",
              "value": -306.0344
            },
            {
              "name": "drivewheel_rwd",
              "value": 379.7456
            },
            {
              "name": "enginelocation_front",
              "value": -694.6698
            },
            {
              "name": "enginelocation_rear",
              "value": 694.3914
            },
            {
              "name": "enginetype_dohc",
              "value": -0.0
            },
            {
              "name": "enginetype_dohcv",
              "value": 0.0
            },
            {
              "name": "enginetype_l",
              "value": -318.7444
            },
            {
              "name": "enginetype_ohc",
              "value": 30.3279
            },
            {
              "name": "enginetype_ohcf",
              "value": 16.6929
            },
            {
              "name": "enginetype_ohcv",
              "value": -158.2582
            },
            {
              "name": "enginetype_rotor",
              "value": 465.5611
            },
            {
              "name": "fuelsystem_1bbl",
              "value": -56.1279
            },
            {
              "name": "fuelsystem_2bbl",
              "value": -0.0
            },
            {
              "name": "fuelsystem_4bbl",
              "value": -0.0878
            },
            {
              "name": "fuelsystem_idi",
              "value": 9.9248
            },
            {
              "name": "fuelsystem_mfi",
              "value": -80.1572
            },
            {
              "name": "fuelsystem_mpfi",
              "value": 103.257
            },
            {
              "name": "fuelsystem_spdi",
              "value": -128.4987
            },
            {
              "name": "fuelsystem_spfi",
              "value": 37.9321
            },
            {
              "name": "symboling",
              "value": 260.7885
            },
            {
              "name": "wheelbase",
              "value": 785.4882
            },
            {
              "name": "carlength",
              "value": 127.5252
            },
            {
              "name": "carwidth",
              "value": 1022.9612
            },
            {
              "name": "carheight",
              "value": 0.0
            },
            {
              "name": "curbweight",
              "value": 1039.6492
            },
            {
              "name": "cylindernumber",
              "value": 736.0259
            },
            {
              "name": "enginesize",
              "value": 1168.1938
            },
            {
              "name": "boreratio",
              "value": -194.3715
            },
            {
              "name": "stroke",
              "value": 26.4895
            },
            {
              "name": "compressionratio",
              "value": -0.0
            },
            {
              "name": "horsepower",
              "value": 721.5972
            },
            {
              "name": "peakrpm",
              "value": 143.3526
            },
            {
              "name": "citympg",
              "value": -103.4153
            },
            {
              "name": "highwaympg",
              "value": -81.2891
            }
          ],
          "feature_curve": [
            {
              "k": 1,
              "added": "enginesize",
              "rmse": 4260.5597552500685,
              "r2": 0.7655228191442662,
              "train_rmse": 3863.923615698983,
              "train_r2": 0.7512926488127514
            },
            {
              "k": 2,
              "added": "brand",
              "rmse": 3371.1342110258643,
              "r2": 0.8532022671987216,
              "train_rmse": 2244.930258815352,
              "train_r2": 0.9160467980379261
            },
            {
              "k": 3,
              "added": "enginetype",
              "rmse": 3172.199470569779,
              "r2": 0.8700164963559477,
              "train_rmse": 1993.6943103812123,
              "train_r2": 0.9337861720181772
            },
            {
              "k": 4,
              "added": "symboling",
              "rmse": 3158.047435662417,
              "r2": 0.8711736920345677,
              "train_rmse": 1990.6870858048246,
              "train_r2": 0.9339857710005971
            },
            {
              "k": 5,
              "added": "carbody",
              "rmse": 3135.33583327697,
              "r2": 0.8730199790693202,
              "train_rmse": 1940.5531868732805,
              "train_r2": 0.9372689353752311
            },
            {
              "k": 6,
              "added": "cylindernumber",
              "rmse": 3115.351286210451,
              "r2": 0.8746335547244674,
              "train_rmse": 1955.476946584067,
              "train_r2": 0.9363003629242297
            },
            {
              "k": 7,
              "added": "fueltype",
              "rmse": 3104.2620974691554,
              "r2": 0.8755244577363549,
              "train_rmse": 1955.564806656232,
              "train_r2": 0.9362946387141339
            },
            {
              "k": 8,
              "added": "peakrpm",
              "rmse": 3078.845866003543,
              "r2": 0.8775544073075483,
              "train_rmse": 1948.4800356412125,
              "train_r2": 0.9367553959590313
            },
            {
              "k": 9,
              "added": "compressionratio",
              "rmse": 3071.939101682898,
              "r2": 0.8781031546670773,
              "train_rmse": 1929.0346383661931,
              "train_r2": 0.9380114312084596
            },
            {
              "k": 10,
              "added": "carheight",
              "rmse": 3078.241778021739,
              "r2": 0.8776024517097145,
              "train_rmse": 1931.7803026953159,
              "train_r2": 0.9378348445111506
            },
            {
              "k": 11,
              "added": "doornumber",
              "rmse": 3097.6042158294495,
              "r2": 0.8760578242341783,
              "train_rmse": 1924.4044453678996,
              "train_r2": 0.9383086519744483
            },
            {
              "k": 12,
              "added": "carlength",
              "rmse": 3144.0719449648386,
              "r2": 0.8723113742092601,
              "train_rmse": 1851.1906622991748,
              "train_r2": 0.9429134418781259
            },
            {
              "k": 13,
              "added": "wheelbase",
              "rmse": 3185.477179403266,
              "r2": 0.8689260888328565,
              "train_rmse": 1808.3336669233536,
              "train_r2": 0.9455260719192508
            },
            {
              "k": 14,
              "added": "enginelocation",
              "rmse": 3199.043551943702,
              "r2": 0.8678072711989269,
              "train_rmse": 1799.7775008197689,
              "train_r2": 0.9460403413080151
            },
            {
              "k": 15,
              "added": "horsepower",
              "rmse": 3097.9361067561317,
              "r2": 0.876031263392695,
              "train_rmse": 1615.2949579164144,
              "train_r2": 0.9565354455430405
            },
            {
              "k": 16,
              "added": "boreratio",
              "rmse": 3097.453152980283,
              "r2": 0.8760699126743785,
              "train_rmse": 1613.5865729687132,
              "train_r2": 0.9566273357869701
            },
            {
              "k": 17,
              "added": "carwidth",
              "rmse": 3109.9824450605843,
              "r2": 0.875065282962215,
              "train_rmse": 1550.0318145445117,
              "train_r2": 0.9599767103723198
            },
            {
              "k": 18,
              "added": "stroke",
              "rmse": 3118.490939215899,
              "r2": 0.8743807386281279,
              "train_rmse": 1549.4992474340213,
              "train_r2": 0.9600042084220257
            },
            {
              "k": 19,
              "added": "curbweight",
              "rmse": 3131.7785155424476,
              "r2": 0.8733079558939771,
              "train_rmse": 1483.8813914001917,
              "train_r2": 0.9633199486937332
            },
            {
              "k": 20,
              "added": "fuelsystem",
              "rmse": 3154.5621366507057,
              "r2": 0.8714578869051215,
              "train_rmse": 1483.5815090021463,
              "train_r2": 0.9633347727764762
            },
            {
              "k": 21,
              "added": "aspiration",
              "rmse": 3200.5415380355644,
              "r2": 0.8676834409170766,
              "train_rmse": 1433.7892888738024,
              "train_r2": 0.9657546017907297
            },
            {
              "k": 22,
              "added": "highwaympg",
              "rmse": 3226.685287434549,
              "r2": 0.8655129460589581,
              "train_rmse": 1440.1845025180694,
              "train_r2": 0.9654484270081471
            },
            {
              "k": 23,
              "added": "citympg",
              "rmse": 3236.5353500215697,
              "r2": 0.8646905988282869,
              "train_rmse": 1442.6673974714643,
              "train_r2": 0.9653291896802102
            },
            {
              "k": 24,
              "added": "drivewheel",
              "rmse": 3323.4672739379926,
              "r2": 0.8573242790724431,
              "train_rmse": 1435.0459865255568,
              "train_r2": 0.9656945441907142
            }
          ]
        }
      }
    },
    {
      "key": "sgd",
      "name": "SGD 回歸",
      "en": "Stochastic Gradient Descent",
      "module": "sklearn.linear_model.SGDRegressor",
      "desc": "以隨機梯度下降逐步更新係數，需要標準化資料才能穩定收斂。",
      "grid": {
        "penalty": [
          "l2",
          "l1",
          "elasticnet"
        ],
        "alpha": [
          1e-05,
          0.0001,
          0.001,
          0.01,
          0.1
        ]
      },
      "runs": {
        "40": {
          "n_train": 40,
          "best_params": {
            "alpha": 0.1,
            "penalty": "elasticnet"
          },
          "converged": true,
          "test": {
            "mse": 23607078.51316982,
            "rmse": 4858.711610413796,
            "mae": 2786.8218831748245,
            "r2": 0.6950634329063088,
            "adj_r2": 0.23765858226577197,
            "mape": 18.85221192463169,
            "max_error": 22577.764673461043
          },
          "train": {
            "mse": 744214.0585412226,
            "rmse": 862.6784212794606,
            "mae": 688.3018271699088,
            "r2": 0.9762330250186531,
            "adj_r2": 0.9382058650484979,
            "mape": 6.337665194328486,
            "max_error": 1983.5674354844014
          },
          "cv_rmse": 2352.8920080342914,
          "predictions": [
            6888.51,
            16167.3,
            16713.47,
            1521.73,
            9623.11,
            12651.44,
            6935.4,
            7366.89,
            16485.99,
            8491.12,
            13784.41,
            22685.28,
            11334.48,
            11812.37,
            6528.66,
            12513.04,
            11410.04,
            19957.53,
            10411.33,
            6660.9,
            12422.04,
            13276.66,
            11488.17,
            12726.53,
            16900.68,
            6117.09,
            7540.37,
            13790.47,
            7688.48,
            7075.74,
            9159.49,
            10604.69,
            14560.74,
            10730.09,
            7139.92,
            18737.24,
            8436.84,
            17262.69,
            6824.05,
            33992.48,
            6482.82
          ],
          "coef": [
            {
              "name": "brand_alfa-romero",
              "value": 0.0
            },
            {
              "name": "brand_audi",
              "value": 869.7711
            },
            {
              "name": "brand_bmw",
              "value": 0.0
            },
            {
              "name": "brand_buick",
              "value": 1609.9025
            },
            {
              "name": "brand_chevrolet",
              "value": 0.0
            },
            {
              "name": "brand_dodge",
              "value": 0.0
            },
            {
              "name": "brand_honda",
              "value": 31.5662
            },
            {
              "name": "brand_isuzu",
              "value": 0.0
            },
            {
              "name": "brand_jaguar",
              "value": 0.0
            },
            {
              "name": "brand_mazda",
              "value": 0.0
            },
            {
              "name": "brand_mercury",
              "value": 0.0
            },
            {
              "name": "brand_mitsubishi",
              "value": -22.3455
            },
            {
              "name": "brand_nissan",
              "value": 0.0
            },
            {
              "name": "brand_peugeot",
              "value": -177.0703
            },
            {
              "name": "brand_plymouth",
              "value": 0.0
            },
            {
              "name": "brand_porsche",
              "value": 0.0
            },
            {
              "name": "brand_renault",
              "value": 0.0
            },
            {
              "name": "brand_saab",
              "value": 502.9695
            },
            {
              "name": "brand_subaru",
              "value": -109.3411
            },
            {
              "name": "brand_toyota",
              "value": 0.0
            },
            {
              "name": "brand_volkswagen",
              "value": -200.395
            },
            {
              "name": "brand_volvo",
              "value": 170.1926
            },
            {
              "name": "fueltype_diesel",
              "value": 0.0
            },
            {
              "name": "fueltype_gas",
              "value": 0.0
            },
            {
              "name": "aspiration_std",
              "value": -317.3668
            },
            {
              "name": "aspiration_turbo",
              "value": 317.3668
            },
            {
              "name": "doornumber_four",
              "value": 0.0
            },
            {
              "name": "doornumber_two",
              "value": 0.0
            },
            {
              "name": "carbody_convertible",
              "value": 0.0
            },
            {
              "name": "carbody_hardtop",
              "value": 0.0
            },
            {
              "name": "carbody_hatchback",
              "value": 13.4037
            },
            {
              "name": "carbody_sedan",
              "value": 0.0
            },
            {
              "name": "carbody_wagon",
              "value": -101.8013
            },
            {
              "name": "drivewheel_4wd",
              "value": 0.0
            },
            {
              "name": "drivewheel_fwd",
              "value": -97.5714
            },
            {
              "name": "drivewheel_rwd",
              "value": 309.7086
            },
            {
              "name": "enginelocation_front",
              "value": 0.0
            },
            {
              "name": "enginelocation_rear",
              "value": 0.0
            },
            {
              "name": "enginetype_dohc",
              "value": 0.0
            },
            {
              "name": "enginetype_dohcv",
              "value": 0.0
            },
            {
              "name": "enginetype_l",
              "value": -177.0703
            },
            {
              "name": "enginetype_ohc",
              "value": 0.0
            },
            {
              "name": "enginetype_ohcf",
              "value": -109.3411
            },
            {
              "name": "enginetype_ohcv",
              "value": 2.5777
            },
            {
              "name": "enginetype_rotor",
              "value": 81.6793
            },
            {
              "name": "fuelsystem_1bbl",
              "value": 31.5662
            },
            {
              "name": "fuelsystem_2bbl",
              "value": -505.8341
            },
            {
              "name": "fuelsystem_4bbl",
              "value": 81.6793
            },
            {
              "name": "fuelsystem_idi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_mfi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_mpfi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_spdi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_spfi",
              "value": 0.0
            },
            {
              "name": "symboling",
              "value": 0.0
            },
            {
              "name": "wheelbase",
              "value": 143.3158
            },
            {
              "name": "carlength",
              "value": 370.2508
            },
            {
              "name": "carwidth",
              "value": 932.965
            },
            {
              "name": "carheight",
              "value": 0.0
            },
            {
              "name": "curbweight",
              "value": 637.2675
            },
            {
              "name": "cylindernumber",
              "value": 538.1653
            },
            {
              "name": "enginesize",
              "value": 426.0643
            },
            {
              "name": "boreratio",
              "value": 0.0
            },
            {
              "name": "stroke",
              "value": 0.0
            },
            {
              "name": "compressionratio",
              "value": 0.0
            },
            {
              "name": "horsepower",
              "value": 459.0087
            },
            {
              "name": "peakrpm",
              "value": 161.4898
            },
            {
              "name": "citympg",
              "value": -144.1661
            },
            {
              "name": "highwaympg",
              "value": -73.216
            }
          ],
          "feature_curve": [
            {
              "k": 1,
              "added": "enginesize",
              "rmse": 4616.950768221193,
              "r2": 0.7246546481171394,
              "train_rmse": 3246.2393270826315,
              "train_r2": 0.6634596757883495
            },
            {
              "k": 2,
              "added": "horsepower",
              "rmse": 4382.505051684634,
              "r2": 0.7519083696378734,
              "train_rmse": 2881.398302549631,
              "train_r2": 0.7348554948672719
            },
            {
              "k": 3,
              "added": "enginetype",
              "rmse": 4188.468157815282,
              "r2": 0.7733907159688083,
              "train_rmse": 2677.3776590977936,
              "train_r2": 0.7710739000486404
            },
            {
              "k": 4,
              "added": "carbody",
              "rmse": 4076.6718503715615,
              "r2": 0.7853263346757577,
              "train_rmse": 2588.108213416419,
              "train_r2": 0.7860851663390808
            },
            {
              "k": 5,
              "added": "stroke",
              "rmse": 3972.464526962476,
              "r2": 0.7961609822476486,
              "train_rmse": 2513.0024132190333,
              "train_r2": 0.7983204560981669
            },
            {
              "k": 6,
              "added": "cylindernumber",
              "rmse": 3848.9944717147805,
              "r2": 0.8086352964218263,
              "train_rmse": 2041.1511932375497,
              "train_r2": 0.8669464735354147
            },
            {
              "k": 7,
              "added": "symboling",
              "rmse": 3848.715339133484,
              "r2": 0.8086630513002385,
              "train_rmse": 2041.0023860552903,
              "train_r2": 0.8669658729789327
            },
            {
              "k": 8,
              "added": "peakrpm",
              "rmse": 3848.380410809416,
              "r2": 0.8086963514378183,
              "train_rmse": 2040.9847300638353,
              "train_r2": 0.8669681746315583
            },
            {
              "k": 9,
              "added": "enginelocation",
              "rmse": 3848.380410809416,
              "r2": 0.8086963514378183,
              "train_rmse": 2040.9847300638353,
              "train_r2": 0.8669681746315583
            },
            {
              "k": 10,
              "added": "boreratio",
              "rmse": 3848.4123325169076,
              "r2": 0.8086931777575752,
              "train_rmse": 2040.8156571943503,
              "train_r2": 0.8669902141309309
            },
            {
              "k": 11,
              "added": "compressionratio",
              "rmse": 3859.557749365221,
              "r2": 0.8075834828353425,
              "train_rmse": 2017.6344630350964,
              "train_r2": 0.8699947130800204
            },
            {
              "k": 12,
              "added": "fueltype",
              "rmse": 3863.5989304868785,
              "r2": 0.8071803293456803,
              "train_rmse": 2006.110148716832,
              "train_r2": 0.8714755987895517
            },
            {
              "k": 13,
              "added": "drivewheel",
              "rmse": 3889.4424893223945,
              "r2": 0.8045921659821703,
              "train_rmse": 1979.9176067422777,
              "train_r2": 0.8748098169007948
            },
            {
              "k": 14,
              "added": "curbweight",
              "rmse": 3984.21526753923,
              "r2": 0.7949532674666311,
              "train_rmse": 1836.2742576021542,
              "train_r2": 0.892316011952206
            },
            {
              "k": 15,
              "added": "doornumber",
              "rmse": 3984.159646007142,
              "r2": 0.7949589925256642,
              "train_rmse": 1828.7252806306135,
              "train_r2": 0.8931995760567675
            },
            {
              "k": 16,
              "added": "fuelsystem",
              "rmse": 4079.4189006487068,
              "r2": 0.7850369230853325,
              "train_rmse": 1771.3121637123113,
              "train_r2": 0.8998003397026755
            },
            {
              "k": 17,
              "added": "carheight",
              "rmse": 4054.383895386956,
              "r2": 0.7876672430909878,
              "train_rmse": 1776.8567568138487,
              "train_r2": 0.899172064372636
            },
            {
              "k": 18,
              "added": "citympg",
              "rmse": 4141.263068091589,
              "r2": 0.7784698196482227,
              "train_rmse": 1796.4357866352564,
              "train_r2": 0.8969377937243901
            },
            {
              "k": 19,
              "added": "highwaympg",
              "rmse": 4431.9748562964305,
              "r2": 0.7462758313886452,
              "train_rmse": 1975.5348008560295,
              "train_r2": 0.8753634530495096
            },
            {
              "k": 20,
              "added": "carlength",
              "rmse": 4506.532136856732,
              "r2": 0.7376674340294458,
              "train_rmse": 1839.6318279009888,
              "train_r2": 0.8919218582947263
            },
            {
              "k": 21,
              "added": "carwidth",
              "rmse": 4626.980404830252,
              "r2": 0.7234570553520707,
              "train_rmse": 1545.0519094445995,
              "train_r2": 0.9237636334668825
            },
            {
              "k": 22,
              "added": "aspiration",
              "rmse": 4684.639946732644,
              "r2": 0.7165217799636424,
              "train_rmse": 1448.4287667424164,
              "train_r2": 0.9330006911816588
            },
            {
              "k": 23,
              "added": "wheelbase",
              "rmse": 4749.230926321659,
              "r2": 0.7086507953939729,
              "train_rmse": 1423.2255336305307,
              "train_r2": 0.9353120344663773
            },
            {
              "k": 24,
              "added": "brand",
              "rmse": 4858.711610413796,
              "r2": 0.6950634329063088,
              "train_rmse": 862.6784212794604,
              "train_r2": 0.9762330250186531
            }
          ]
        },
        "80": {
          "n_train": 80,
          "best_params": {
            "alpha": 0.1,
            "penalty": "elasticnet"
          },
          "converged": true,
          "test": {
            "mse": 12524683.794526258,
            "rmse": 3539.0229999996127,
            "mae": 2302.104862252963,
            "r2": 0.8382165722833443,
            "adj_r2": 0.5955414307083609,
            "mape": 18.308575310046287,
            "max_error": 15293.026770823144
          },
          "train": {
            "mse": 1707139.8112889775,
            "rmse": 1306.5756048882045,
            "mae": 987.5977427435726,
            "r2": 0.9703807024618355,
            "adj_r2": 0.9574559180815455,
            "mape": 8.322394981477785,
            "max_error": 3993.5370069946875
          },
          "cv_rmse": 3175.9805068897026,
          "predictions": [
            6164.54,
            18729.66,
            16259.99,
            -118.39,
            9825.64,
            14640.22,
            5546.98,
            7367.67,
            17712.12,
            7634.89,
            20143.45,
            29297.8,
            10881.76,
            13096.88,
            5311.08,
            13811.49,
            12154.1,
            19722.83,
            10410.85,
            6323.63,
            10479.2,
            13747.1,
            12144.77,
            14093.05,
            19379.77,
            5961.97,
            7478.03,
            14790.07,
            7533.36,
            6848.39,
            9365.05,
            10952.28,
            19936.98,
            11934.99,
            6933.03,
            26021.97,
            8269.31,
            16663.38,
            6109.99,
            36740.47,
            5250.62
          ],
          "coef": [
            {
              "name": "brand_alfa-romero",
              "value": 0.0
            },
            {
              "name": "brand_audi",
              "value": 523.6694
            },
            {
              "name": "brand_bmw",
              "value": 676.5501
            },
            {
              "name": "brand_buick",
              "value": 1444.1875
            },
            {
              "name": "brand_chevrolet",
              "value": 0.0
            },
            {
              "name": "brand_dodge",
              "value": 0.0
            },
            {
              "name": "brand_honda",
              "value": 125.4417
            },
            {
              "name": "brand_isuzu",
              "value": -122.9794
            },
            {
              "name": "brand_jaguar",
              "value": 901.271
            },
            {
              "name": "brand_mazda",
              "value": -68.9891
            },
            {
              "name": "brand_mercury",
              "value": 0.0
            },
            {
              "name": "brand_mitsubishi",
              "value": -162.8376
            },
            {
              "name": "brand_nissan",
              "value": 0.0
            },
            {
              "name": "brand_peugeot",
              "value": -307.6464
            },
            {
              "name": "brand_plymouth",
              "value": -121.5664
            },
            {
              "name": "brand_porsche",
              "value": 506.1398
            },
            {
              "name": "brand_renault",
              "value": 0.0
            },
            {
              "name": "brand_saab",
              "value": 169.1185
            },
            {
              "name": "brand_subaru",
              "value": -145.3234
            },
            {
              "name": "brand_toyota",
              "value": -33.9184
            },
            {
              "name": "brand_volkswagen",
              "value": -245.258
            },
            {
              "name": "brand_volvo",
              "value": 88.6594
            },
            {
              "name": "fueltype_diesel",
              "value": 0.0
            },
            {
              "name": "fueltype_gas",
              "value": 0.0
            },
            {
              "name": "aspiration_std",
              "value": -78.6332
            },
            {
              "name": "aspiration_turbo",
              "value": 78.6332
            },
            {
              "name": "doornumber_four",
              "value": 0.0
            },
            {
              "name": "doornumber_two",
              "value": 0.0
            },
            {
              "name": "carbody_convertible",
              "value": 0.0
            },
            {
              "name": "carbody_hardtop",
              "value": 109.1616
            },
            {
              "name": "carbody_hatchback",
              "value": -14.5362
            },
            {
              "name": "carbody_sedan",
              "value": 3.3442
            },
            {
              "name": "carbody_wagon",
              "value": -131.2096
            },
            {
              "name": "drivewheel_4wd",
              "value": 0.0
            },
            {
              "name": "drivewheel_fwd",
              "value": -188.2831
            },
            {
              "name": "drivewheel_rwd",
              "value": 264.6258
            },
            {
              "name": "enginelocation_front",
              "value": -506.1398
            },
            {
              "name": "enginelocation_rear",
              "value": 506.1398
            },
            {
              "name": "enginetype_dohc",
              "value": 127.4148
            },
            {
              "name": "enginetype_dohcv",
              "value": 0.0
            },
            {
              "name": "enginetype_l",
              "value": -307.6464
            },
            {
              "name": "enginetype_ohc",
              "value": 0.0
            },
            {
              "name": "enginetype_ohcf",
              "value": 0.0
            },
            {
              "name": "enginetype_ohcv",
              "value": 0.0
            },
            {
              "name": "enginetype_rotor",
              "value": 95.5912
            },
            {
              "name": "fuelsystem_1bbl",
              "value": 0.0
            },
            {
              "name": "fuelsystem_2bbl",
              "value": -389.1769
            },
            {
              "name": "fuelsystem_4bbl",
              "value": 95.5912
            },
            {
              "name": "fuelsystem_idi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_mfi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_mpfi",
              "value": 152.3048
            },
            {
              "name": "fuelsystem_spdi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_spfi",
              "value": 0.0
            },
            {
              "name": "symboling",
              "value": 0.0
            },
            {
              "name": "wheelbase",
              "value": 525.7359
            },
            {
              "name": "carlength",
              "value": 564.0736
            },
            {
              "name": "carwidth",
              "value": 788.5584
            },
            {
              "name": "carheight",
              "value": 0.0
            },
            {
              "name": "curbweight",
              "value": 915.8193
            },
            {
              "name": "cylindernumber",
              "value": 570.359
            },
            {
              "name": "enginesize",
              "value": 1328.0274
            },
            {
              "name": "boreratio",
              "value": 0.0
            },
            {
              "name": "stroke",
              "value": 0.0
            },
            {
              "name": "compressionratio",
              "value": 0.0
            },
            {
              "name": "horsepower",
              "value": 757.3873
            },
            {
              "name": "peakrpm",
              "value": 0.0
            },
            {
              "name": "citympg",
              "value": -61.226
            },
            {
              "name": "highwaympg",
              "value": -16.7797
            }
          ],
          "feature_curve": [
            {
              "k": 1,
              "added": "enginesize",
              "rmse": 4443.108942479471,
              "r2": 0.7449994093227341,
              "train_rmse": 3359.012541088958,
              "train_r2": 0.8042377650161409
            },
            {
              "k": 2,
              "added": "brand",
              "rmse": 3586.8568139028093,
              "r2": 0.8338136525808124,
              "train_rmse": 1818.8892838964912,
              "train_r2": 0.9425991673074885
            },
            {
              "k": 3,
              "added": "horsepower",
              "rmse": 3328.995760559323,
              "r2": 0.8568492108345449,
              "train_rmse": 1624.411621538398,
              "train_r2": 0.9542176754420324
            },
            {
              "k": 4,
              "added": "carbody",
              "rmse": 3212.6685561927757,
              "r2": 0.866678832626985,
              "train_rmse": 1623.1745507975313,
              "train_r2": 0.9542873799526929
            },
            {
              "k": 5,
              "added": "enginetype",
              "rmse": 3173.0338107024218,
              "r2": 0.8699481118064918,
              "train_rmse": 1538.0889003130965,
              "train_r2": 0.9589542174392562
            },
            {
              "k": 6,
              "added": "symboling",
              "rmse": 3166.537765105841,
              "r2": 0.8704800684493118,
              "train_rmse": 1528.4654405453557,
              "train_r2": 0.959466238192347
            },
            {
              "k": 7,
              "added": "peakrpm",
              "rmse": 3170.6982962698307,
              "r2": 0.8701394909701796,
              "train_rmse": 1531.3379073832127,
              "train_r2": 0.9593137436843723
            },
            {
              "k": 8,
              "added": "cylindernumber",
              "rmse": 3172.6582385145143,
              "r2": 0.8699788968434199,
              "train_rmse": 1530.4388144138136,
              "train_r2": 0.9593615058249482
            },
            {
              "k": 9,
              "added": "compressionratio",
              "rmse": 3180.0415319902345,
              "r2": 0.8693730320385402,
              "train_rmse": 1523.9706425262054,
              "train_r2": 0.9597042850339004
            },
            {
              "k": 10,
              "added": "fueltype",
              "rmse": 3183.7971363746337,
              "r2": 0.8690643109755327,
              "train_rmse": 1516.6193785797248,
              "train_r2": 0.9600921008763351
            },
            {
              "k": 11,
              "added": "enginelocation",
              "rmse": 3207.5031223099663,
              "r2": 0.8671072042668186,
              "train_rmse": 1506.5808751148506,
              "train_r2": 0.960618653222983
            },
            {
              "k": 12,
              "added": "curbweight",
              "rmse": 3204.22884768636,
              "r2": 0.867378384308929,
              "train_rmse": 1360.024498000498,
              "train_r2": 0.9679078268511012
            },
            {
              "k": 13,
              "added": "stroke",
              "rmse": 3205.1679119015416,
              "r2": 0.8673006380124608,
              "train_rmse": 1365.4587854999525,
              "train_r2": 0.9676508513050331
            },
            {
              "k": 14,
              "added": "carheight",
              "rmse": 3202.6134652444466,
              "r2": 0.8675120705325914,
              "train_rmse": 1368.6180293671628,
              "train_r2": 0.9675009865434285
            },
            {
              "k": 15,
              "added": "doornumber",
              "rmse": 3211.5313774828014,
              "r2": 0.8667731985150344,
              "train_rmse": 1353.616093627159,
              "train_r2": 0.9682095494911511
            },
            {
              "k": 16,
              "added": "boreratio",
              "rmse": 3222.748167867162,
              "r2": 0.8658409412170687,
              "train_rmse": 1363.3686749504188,
              "train_r2": 0.9677498093252493
            },
            {
              "k": 17,
              "added": "aspiration",
              "rmse": 3239.4944625791245,
              "r2": 0.8644430632740238,
              "train_rmse": 1339.9796215706604,
              "train_r2": 0.9688468438928205
            },
            {
              "k": 18,
              "added": "carwidth",
              "rmse": 3257.5567067800152,
              "r2": 0.8629272166557955,
              "train_rmse": 1297.3736783365052,
              "train_r2": 0.97079643780572
            },
            {
              "k": 19,
              "added": "highwaympg",
              "rmse": 3304.175098697686,
              "r2": 0.8589758891587249,
              "train_rmse": 1302.65941871156,
              "train_r2": 0.9705579916264072
            },
            {
              "k": 20,
              "added": "citympg",
              "rmse": 3314.056912029569,
              "r2": 0.858131104738236,
              "train_rmse": 1298.1679943983852,
              "train_r2": 0.9707606671406724
            },
            {
              "k": 21,
              "added": "wheelbase",
              "rmse": 3348.934528869435,
              "r2": 0.8551292939088501,
              "train_rmse": 1268.1534634678023,
              "train_r2": 0.972097103491383
            },
            {
              "k": 22,
              "added": "drivewheel",
              "rmse": 3379.061871380164,
              "r2": 0.8525110274776196,
              "train_rmse": 1281.8511029395493,
              "train_r2": 0.9714910759613116
            },
            {
              "k": 23,
              "added": "carlength",
              "rmse": 3445.061792323483,
              "r2": 0.846693243837898,
              "train_rmse": 1279.7192615673307,
              "train_r2": 0.9715858232607839
            },
            {
              "k": 24,
              "added": "fuelsystem",
              "rmse": 3539.0229999996122,
              "r2": 0.8382165722833445,
              "train_rmse": 1306.5756048882045,
              "train_r2": 0.9703807024618355
            }
          ]
        },
        "120": {
          "n_train": 120,
          "best_params": {
            "alpha": 0.01,
            "penalty": "l1"
          },
          "converged": true,
          "test": {
            "mse": 10247161.280903863,
            "rmse": 3201.1187545768844,
            "mae": 2070.2058588634295,
            "r2": 0.8676357101235123,
            "adj_r2": 0.6690892753087807,
            "mape": 16.90616839921894,
            "max_error": 12399.711350570666
          },
          "train": {
            "mse": 1902763.8025243476,
            "rmse": 1379.4070474389885,
            "mae": 1038.6216699227607,
            "r2": 0.9683130948705465,
            "adj_r2": 0.9603079819957372,
            "mape": 8.487665049370136,
            "max_error": 5207.650215011163
          },
          "cv_rmse": 2223.0332227263984,
          "predictions": [
            6254.88,
            18440.73,
            15124.47,
            -1129.88,
            10159.04,
            13797.89,
            5617.58,
            6827.48,
            17617.07,
            7096.65,
            22252.71,
            32237.73,
            12186.21,
            13861.03,
            5265.27,
            13534.65,
            11111.22,
            18834.48,
            9856.83,
            6272.07,
            10298.67,
            13005.7,
            11379.46,
            13869.87,
            19459.04,
            5858.71,
            7367.78,
            13596.62,
            7452.1,
            6578.55,
            9242.58,
            10744.97,
            20775.23,
            11407.68,
            6978.47,
            28915.29,
            11646.82,
            16106.7,
            6016.15,
            36284.31,
            4894.15
          ],
          "coef": [
            {
              "name": "brand_alfa-romero",
              "value": 0.0
            },
            {
              "name": "brand_audi",
              "value": 382.0396
            },
            {
              "name": "brand_bmw",
              "value": 1369.097
            },
            {
              "name": "brand_buick",
              "value": 1196.7379
            },
            {
              "name": "brand_chevrolet",
              "value": 0.0
            },
            {
              "name": "brand_dodge",
              "value": 0.0
            },
            {
              "name": "brand_honda",
              "value": 132.2058
            },
            {
              "name": "brand_isuzu",
              "value": -146.9376
            },
            {
              "name": "brand_jaguar",
              "value": 583.5093
            },
            {
              "name": "brand_mazda",
              "value": 0.0
            },
            {
              "name": "brand_mercury",
              "value": -115.3282
            },
            {
              "name": "brand_mitsubishi",
              "value": -163.9305
            },
            {
              "name": "brand_nissan",
              "value": 0.0
            },
            {
              "name": "brand_peugeot",
              "value": -380.7303
            },
            {
              "name": "brand_plymouth",
              "value": -122.0093
            },
            {
              "name": "brand_porsche",
              "value": 621.3937
            },
            {
              "name": "brand_renault",
              "value": 0.0
            },
            {
              "name": "brand_saab",
              "value": 179.2632
            },
            {
              "name": "brand_subaru",
              "value": -135.8827
            },
            {
              "name": "brand_toyota",
              "value": -128.3801
            },
            {
              "name": "brand_volkswagen",
              "value": -60.2555
            },
            {
              "name": "brand_volvo",
              "value": 0.0
            },
            {
              "name": "fueltype_diesel",
              "value": 0.0
            },
            {
              "name": "fueltype_gas",
              "value": 0.0
            },
            {
              "name": "aspiration_std",
              "value": -138.2257
            },
            {
              "name": "aspiration_turbo",
              "value": 138.2257
            },
            {
              "name": "doornumber_four",
              "value": 72.7229
            },
            {
              "name": "doornumber_two",
              "value": -72.7229
            },
            {
              "name": "carbody_convertible",
              "value": 526.5532
            },
            {
              "name": "carbody_hardtop",
              "value": 0.0
            },
            {
              "name": "carbody_hatchback",
              "value": 0.0
            },
            {
              "name": "carbody_sedan",
              "value": 0.0
            },
            {
              "name": "carbody_wagon",
              "value": -262.6222
            },
            {
              "name": "drivewheel_4wd",
              "value": 0.0
            },
            {
              "name": "drivewheel_fwd",
              "value": -298.6522
            },
            {
              "name": "drivewheel_rwd",
              "value": 355.7508
            },
            {
              "name": "enginelocation_front",
              "value": -621.3937
            },
            {
              "name": "enginelocation_rear",
              "value": 621.3937
            },
            {
              "name": "enginetype_dohc",
              "value": 47.5507
            },
            {
              "name": "enginetype_dohcv",
              "value": 0.0
            },
            {
              "name": "enginetype_l",
              "value": -380.7303
            },
            {
              "name": "enginetype_ohc",
              "value": 0.0
            },
            {
              "name": "enginetype_ohcf",
              "value": 0.0
            },
            {
              "name": "enginetype_ohcv",
              "value": -222.1674
            },
            {
              "name": "enginetype_rotor",
              "value": 191.7278
            },
            {
              "name": "fuelsystem_1bbl",
              "value": 0.0
            },
            {
              "name": "fuelsystem_2bbl",
              "value": -79.4366
            },
            {
              "name": "fuelsystem_4bbl",
              "value": 191.7278
            },
            {
              "name": "fuelsystem_idi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_mfi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_mpfi",
              "value": 0.0
            },
            {
              "name": "fuelsystem_spdi",
              "value": -37.9722
            },
            {
              "name": "fuelsystem_spfi",
              "value": 0.0
            },
            {
              "name": "symboling",
              "value": 0.0
            },
            {
              "name": "wheelbase",
              "value": 717.2167
            },
            {
              "name": "carlength",
              "value": 268.9614
            },
            {
              "name": "carwidth",
              "value": 941.122
            },
            {
              "name": "carheight",
              "value": 0.0
            },
            {
              "name": "curbweight",
              "value": 1050.9507
            },
            {
              "name": "cylindernumber",
              "value": 556.1696
            },
            {
              "name": "enginesize",
              "value": 1369.3886
            },
            {
              "name": "boreratio",
              "value": 0.0
            },
            {
              "name": "stroke",
              "value": 0.0
            },
            {
              "name": "compressionratio",
              "value": 0.0
            },
            {
              "name": "horsepower",
              "value": 1115.9059
            },
            {
              "name": "peakrpm",
              "value": 3.0788
            },
            {
              "name": "citympg",
              "value": 0.0
            },
            {
              "name": "highwaympg",
              "value": 0.0
            }
          ],
          "feature_curve": [
            {
              "k": 1,
              "added": "enginesize",
              "rmse": 4123.067742727849,
              "r2": 0.7804122022592062,
              "train_rmse": 3628.5528984062994,
              "train_r2": 0.7807387628871096
            },
            {
              "k": 2,
              "added": "brand",
              "rmse": 3359.2693447429556,
              "r2": 0.8542337719097806,
              "train_rmse": 2054.3997748560128,
              "train_r2": 0.9297146421728923
            },
            {
              "k": 3,
              "added": "peakrpm",
              "rmse": 3178.9420761226093,
              "r2": 0.8694633413995154,
              "train_rmse": 1973.5323356511324,
              "train_r2": 0.9351390305329689
            },
            {
              "k": 4,
              "added": "enginelocation",
              "rmse": 3077.6281096156945,
              "r2": 0.8776512484104186,
              "train_rmse": 1974.7395662824395,
              "train_r2": 0.9350596539787276
            },
            {
              "k": 5,
              "added": "horsepower",
              "rmse": 2945.0235611424127,
              "r2": 0.8879672981930836,
              "train_rmse": 1786.9959073526932,
              "train_r2": 0.9468207683347691
            },
            {
              "k": 6,
              "added": "curbweight",
              "rmse": 2933.255302042884,
              "r2": 0.8888608704342721,
              "train_rmse": 1637.6519281927929,
              "train_r2": 0.9553380023492448
            },
            {
              "k": 7,
              "added": "fueltype",
              "rmse": 2919.8395001832314,
              "r2": 0.8898751775127199,
              "train_rmse": 1627.3573771625356,
              "train_r2": 0.95589774290766
            },
            {
              "k": 8,
              "added": "doornumber",
              "rmse": 2919.56890624844,
              "r2": 0.8898955880374959,
              "train_rmse": 1626.9884545217874,
              "train_r2": 0.9559177366436805
            },
            {
              "k": 9,
              "added": "aspiration",
              "rmse": 2918.038006900172,
              "r2": 0.8900110260253321,
              "train_rmse": 1627.0126139140154,
              "train_r2": 0.9559164274658618
            },
            {
              "k": 10,
              "added": "stroke",
              "rmse": 2917.949850713737,
              "r2": 0.8900176716289929,
              "train_rmse": 1627.0050703216812,
              "train_r2": 0.9559168362490834
            },
            {
              "k": 11,
              "added": "boreratio",
              "rmse": 2918.218342848158,
              "r2": 0.8899974308776697,
              "train_rmse": 1626.9327333270478,
              "train_r2": 0.9559207560557877
            },
            {
              "k": 12,
              "added": "compressionratio",
              "rmse": 2918.9095319063717,
              "r2": 0.889945315807792,
              "train_rmse": 1627.2904392156445,
              "train_r2": 0.9559013709415141
            },
            {
              "k": 13,
              "added": "carheight",
              "rmse": 2920.4048188899383,
              "r2": 0.889832530203532,
              "train_rmse": 1624.8489406898184,
              "train_r2": 0.9560335980677488
            },
            {
              "k": 14,
              "added": "cylindernumber",
              "rmse": 2927.2609925077627,
              "r2": 0.8893146472524005,
              "train_rmse": 1623.0336554574606,
              "train_r2": 0.9561317819361864
            },
            {
              "k": 15,
              "added": "highwaympg",
              "rmse": 2929.3365949616414,
              "r2": 0.8891576265838611,
              "train_rmse": 1611.233618348547,
              "train_r2": 0.9567673385200512
            },
            {
              "k": 16,
              "added": "fuelsystem",
              "rmse": 2951.0067477604607,
              "r2": 0.8875116186641837,
              "train_rmse": 1556.3003974496394,
              "train_r2": 0.9596650243282608
            },
            {
              "k": 17,
              "added": "citympg",
              "rmse": 2950.713024721978,
              "r2": 0.8875340101987851,
              "train_rmse": 1555.839799177677,
              "train_r2": 0.9596888956463505
            },
            {
              "k": 18,
              "added": "symboling",
              "rmse": 2950.7136371159345,
              "r2": 0.8875339635161704,
              "train_rmse": 1555.8589818211674,
              "train_r2": 0.9596879016130175
            },
            {
              "k": 19,
              "added": "carwidth",
              "rmse": 2973.452003428186,
              "r2": 0.8857939456243118,
              "train_rmse": 1487.137357503698,
              "train_r2": 0.963170390895426
            },
            {
              "k": 20,
              "added": "carbody",
              "rmse": 2929.885481261569,
              "r2": 0.8891160843723734,
              "train_rmse": 1430.9217510845588,
              "train_r2": 0.9659021721922827
            },
            {
              "k": 21,
              "added": "wheelbase",
              "rmse": 2963.8528173303234,
              "r2": 0.8865301374990396,
              "train_rmse": 1402.9106854204017,
              "train_r2": 0.9672240726142314
            },
            {
              "k": 22,
              "added": "carlength",
              "rmse": 2978.057902949046,
              "r2": 0.8854398595208619,
              "train_rmse": 1406.4682129605033,
              "train_r2": 0.9670576342152799
            },
            {
              "k": 23,
              "added": "enginetype",
              "rmse": 3091.241483849225,
              "r2": 0.8765664759889019,
              "train_rmse": 1407.0522469667105,
              "train_r2": 0.9670302699901008
            },
            {
              "k": 24,
              "added": "drivewheel",
              "rmse": 3201.1187545768835,
              "r2": 0.8676357101235124,
              "train_rmse": 1379.4070474389887,
              "train_r2": 0.9683130948705465
            }
          ]
        },
        "164": {
          "n_train": 164,
          "best_params": {
            "alpha": 0.1,
            "penalty": "l2"
          },
          "converged": true,
          "test": {
            "mse": 11611067.003480835,
            "rmse": 3407.5015779131836,
            "mae": 2029.82019550464,
            "r2": 0.8500179126205286,
            "adj_r2": 0.6250447815513216,
            "mape": 16.31604673076945,
            "max_error": 13526.296898816945
          },
          "train": {
            "mse": 2072778.9368868126,
            "rmse": 1439.7148804144565,
            "mae": 1082.1725251037985,
            "r2": 0.9654709568115278,
            "adj_r2": 0.9595091076279068,
            "mape": 8.851343396057082,
            "max_error": 5868.986351698382
          },
          "cv_rmse": 1953.4064202976049,
          "predictions": [
            6301.73,
            17101.19,
            14934.1,
            -711.28,
            10318.6,
            11920.13,
            5661.81,
            6361.53,
            17355.52,
            7307.42,
            21901.87,
            31115.81,
            12802.04,
            13383.4,
            4447.06,
            12535.06,
            11453.66,
            18666.34,
            9428.2,
            6211.75,
            10298.07,
            13815.85,
            11859.15,
            12825.92,
            18674.35,
            5769.24,
            6874.09,
            14182.23,
            7039.04,
            6385.91,
            9102.84,
            10444.18,
            21031.07,
            10341.82,
            7147.37,
            27788.7,
            12115.75,
            16208.78,
            5626.29,
            34084.68,
            3938.44
          ],
          "coef": [
            {
              "name": "brand_alfa-romero",
              "value": -18.9953
            },
            {
              "name": "brand_audi",
              "value": 180.3323
            },
            {
              "name": "brand_bmw",
              "value": 1113.9393
            },
            {
              "name": "brand_buick",
              "value": 1234.0635
            },
            {
              "name": "brand_chevrolet",
              "value": -30.4649
            },
            {
              "name": "brand_dodge",
              "value": -249.4075
            },
            {
              "name": "brand_honda",
              "value": 55.7426
            },
            {
              "name": "brand_isuzu",
              "value": -275.31
            },
            {
              "name": "brand_jaguar",
              "value": 734.6832
            },
            {
              "name": "brand_mazda",
              "value": -168.6824
            },
            {
              "name": "brand_mercury",
              "value": -140.6141
            },
            {
              "name": "brand_mitsubishi",
              "value": -390.492
            },
            {
              "name": "brand_nissan",
              "value": -224.4779
            },
            {
              "name": "brand_peugeot",
              "value": -326.4816
            },
            {
              "name": "brand_plymouth",
              "value": -283.0708
            },
            {
              "name": "brand_porsche",
              "value": 695.7367
            },
            {
              "name": "brand_renault",
              "value": 0.0
            },
            {
              "name": "brand_saab",
              "value": 103.5098
            },
            {
              "name": "brand_subaru",
              "value": -260.8768
            },
            {
              "name": "brand_toyota",
              "value": -475.0473
            },
            {
              "name": "brand_volkswagen",
              "value": -249.778
            },
            {
              "name": "brand_volvo",
              "value": 39.258
            },
            {
              "name": "fueltype_diesel",
              "value": 46.3762
            },
            {
              "name": "fueltype_gas",
              "value": -46.3762
            },
            {
              "name": "aspiration_std",
              "value": -291.9892
            },
            {
              "name": "aspiration_turbo",
              "value": 291.9892
            },
            {
              "name": "doornumber_four",
              "value": 164.3957
            },
            {
              "name": "doornumber_two",
              "value": -164.3957
            },
            {
              "name": "carbody_convertible",
              "value": 620.3292
            },
            {
              "name": "carbody_hardtop",
              "value": -153.1384
            },
            {
              "name": "carbody_hatchback",
              "value": 12.7982
            },
            {
              "name": "carbody_sedan",
              "value": 21.3767
            },
            {
              "name": "carbody_wagon",
              "value": -295.3032
            },
            {
              "name": "drivewheel_4wd",
              "value": -86.2247
            },
            {
              "name": "drivewheel_fwd",
              "value": -359.6721
            },
            {
              "name": "drivewheel_rwd",
              "value": 405.8037
            },
            {
              "name": "enginelocation_front",
              "value": -695.7367
            },
            {
              "name": "enginelocation_rear",
              "value": 695.7367
            },
            {
              "name": "enginetype_dohc",
              "value": -0.9021
            },
            {
              "name": "enginetype_dohcv",
              "value": 0.0
            },
            {
              "name": "enginetype_l",
              "value": -326.4816
            },
            {
              "name": "enginetype_ohc",
              "value": 49.1225
            },
            {
              "name": "enginetype_ohcf",
              "value": 100.12
            },
            {
              "name": "enginetype_ohcv",
              "value": -154.1333
            },
            {
              "name": "enginetype_rotor",
              "value": 470.6561
            },
            {
              "name": "fuelsystem_1bbl",
              "value": -75.4577
            },
            {
              "name": "fuelsystem_2bbl",
              "value": -18.2009
            },
            {
              "name": "fuelsystem_4bbl",
              "value": -13.6214
            },
            {
              "name": "fuelsystem_idi",
              "value": 46.3762
            },
            {
              "name": "fuelsystem_mfi",
              "value": -97.6253
            },
            {
              "name": "fuelsystem_mpfi",
              "value": 102.4945
            },
            {
              "name": "fuelsystem_spdi",
              "value": -170.3637
            },
            {
              "name": "fuelsystem_spfi",
              "value": 75.3173
            },
            {
              "name": "symboling",
              "value": 283.1404
            },
            {
              "name": "wheelbase",
              "value": 691.4865
            },
            {
              "name": "carlength",
              "value": 247.9511
            },
            {
              "name": "carwidth",
              "value": 988.7114
            },
            {
              "name": "carheight",
              "value": 34.6305
            },
            {
              "name": "curbweight",
              "value": 929.5835
            },
            {
              "name": "cylindernumber",
              "value": 795.7888
            },
            {
              "name": "enginesize",
              "value": 1068.0166
            },
            {
              "name": "boreratio",
              "value": -210.3917
            },
            {
              "name": "stroke",
              "value": 78.3639
            },
            {
              "name": "compressionratio",
              "value": -74.1952
            },
            {
              "name": "horsepower",
              "value": 707.5532
            },
            {
              "name": "peakrpm",
              "value": 99.2508
            },
            {
              "name": "citympg",
              "value": -147.7364
            },
            {
              "name": "highwaympg",
              "value": -144.8639
            }
          ],
          "feature_curve": [
            {
              "k": 1,
              "added": "enginesize",
              "rmse": 4257.620138100666,
              "r2": 0.7658462674214936,
              "train_rmse": 3862.4726190882034,
              "train_r2": 0.7514794049710887
            },
            {
              "k": 2,
              "added": "brand",
              "rmse": 3380.5866852593786,
              "r2": 0.8523778875809043,
              "train_rmse": 2240.490507731934,
              "train_r2": 0.9163785346221541
            },
            {
              "k": 3,
              "added": "enginetype",
              "rmse": 3172.845653481327,
              "r2": 0.8699635352011437,
              "train_rmse": 1990.2517221024336,
              "train_r2": 0.93401464249588
            },
            {
              "k": 4,
              "added": "symboling",
              "rmse": 3159.4983055036905,
              "r2": 0.8710552941042438,
              "train_rmse": 1987.2958689808102,
              "train_r2": 0.9342104952990338
            },
            {
              "k": 5,
              "added": "carbody",
              "rmse": 3145.5272608575046,
              "r2": 0.8721931388144039,
              "train_rmse": 1936.8775127106633,
              "train_r2": 0.9375063528094922
            },
            {
              "k": 6,
              "added": "cylindernumber",
              "rmse": 3130.839064142128,
              "r2": 0.8733839530732557,
              "train_rmse": 1955.0236377060241,
              "train_r2": 0.9363298925631909
            },
            {
              "k": 7,
              "added": "fueltype",
              "rmse": 3118.434961493335,
              "r2": 0.8743852483844086,
              "train_rmse": 1961.4305248419726,
              "train_r2": 0.9359118969934579
            },
            {
              "k": 8,
              "added": "peakrpm",
              "rmse": 3098.791066818203,
              "r2": 0.8759628288347977,
              "train_rmse": 1956.6618535009977,
              "train_r2": 0.9362231428798596
            },
            {
              "k": 9,
              "added": "compressionratio",
              "rmse": 3091.740692394679,
              "r2": 0.8765266058941357,
              "train_rmse": 1935.4415332957665,
              "train_r2": 0.9375989826473339
            },
            {
              "k": 10,
              "added": "carheight",
              "rmse": 3104.5553905967176,
              "r2": 0.8755009355306951,
              "train_rmse": 1940.496536037493,
              "train_r2": 0.9372725979549451
            },
            {
              "k": 11,
              "added": "doornumber",
              "rmse": 3124.8011537472494,
              "r2": 0.8738718473111867,
              "train_rmse": 1932.7076544704457,
              "train_r2": 0.9377751453782666
            },
            {
              "k": 12,
              "added": "carlength",
              "rmse": 3177.5514092487438,
              "r2": 0.8695775261161186,
              "train_rmse": 1846.4605715630776,
              "train_r2": 0.9432047998965265
            },
            {
              "k": 13,
              "added": "wheelbase",
              "rmse": 3226.210511569563,
              "r2": 0.8655525201135248,
              "train_rmse": 1806.3415528138712,
              "train_r2": 0.94564602600652
            },
            {
              "k": 14,
              "added": "enginelocation",
              "rmse": 3235.717076699673,
              "r2": 0.8647590090663165,
              "train_rmse": 1800.1297309324943,
              "train_r2": 0.9460192186120313
            },
            {
              "k": 15,
              "added": "horsepower",
              "rmse": 3127.4938013334518,
              "r2": 0.8736543838796119,
              "train_rmse": 1613.409562023957,
              "train_r2": 0.956636851254301
            },
            {
              "k": 16,
              "added": "boreratio",
              "rmse": 3130.452123283823,
              "r2": 0.8734152481308094,
              "train_rmse": 1613.5369132870042,
              "train_r2": 0.9566300054169633
            },
            {
              "k": 17,
              "added": "carwidth",
              "rmse": 3143.959495880539,
              "r2": 0.8723205077230782,
              "train_rmse": 1551.0569821726026,
              "train_r2": 0.9599237512665594
            },
            {
              "k": 18,
              "added": "stroke",
              "rmse": 3162.410997512431,
              "r2": 0.8708174403078404,
              "train_rmse": 1550.1342499246066,
              "train_r2": 0.9599714202404439
            },
            {
              "k": 19,
              "added": "curbweight",
              "rmse": 3171.1804319519424,
              "r2": 0.8700999948469219,
              "train_rmse": 1485.2773082509364,
              "train_r2": 0.963250904920403
            },
            {
              "k": 20,
              "added": "fuelsystem",
              "rmse": 3205.406913587685,
              "r2": 0.8672808471281099,
              "train_rmse": 1485.7325372032822,
              "train_r2": 0.963228374695684
            },
            {
              "k": 21,
              "added": "aspiration",
              "rmse": 3261.7194544597396,
              "r2": 0.8625766692736028,
              "train_rmse": 1432.7318388746678,
              "train_r2": 0.965805096577844
            },
            {
              "k": 22,
              "added": "highwaympg",
              "rmse": 3300.2956616511374,
              "r2": 0.8593068480042316,
              "train_rmse": 1442.526635425639,
              "train_r2": 0.9653359550595497
            },
            {
              "k": 23,
              "added": "citympg",
              "rmse": 3312.3709925893368,
              "r2": 0.8582754104622488,
              "train_rmse": 1445.8078845885377,
              "train_r2": 0.9651780782803158
            },
            {
              "k": 24,
              "added": "drivewheel",
              "rmse": 3407.501577913183,
              "r2": 0.8500179126205286,
              "train_rmse": 1439.7148804144565,
              "train_r2": 0.9654709568115278
            }
          ]
        }
      }
    }
  ]
};
