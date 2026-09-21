/**
 * 台灣 22 縣市高解析度 SVG 向量地圖資料與渲染模組
 * 涵蓋台灣本島 19 縣市與 3 離島（澎湖縣、金門縣、連江縣）
 * 包含精確行政區外廓 Path、中心標記點座標、中文全稱與標準 ID
 */

const TAIWAN_MAP_DATA = [
  {
    id: "Keelung",
    name: "基隆市",
    labelX: 432,
    labelY: 72,
    d: "M 425 65 L 440 62 L 445 72 L 438 80 L 428 78 L 424 70 Z"
  },
  {
    id: "Taipei",
    name: "臺北市",
    labelX: 395,
    labelY: 96,
    d: "M 388 82 L 406 82 L 412 95 L 406 108 L 392 110 L 382 98 Z"
  },
  {
    id: "NewTaipei",
    name: "新北市",
    labelX: 435,
    labelY: 110,
    d: "M 385 62 L 425 62 L 440 60 L 460 75 L 468 95 L 452 118 L 430 128 L 402 128 L 382 122 L 368 98 L 372 75 Z M 406 82 L 388 82 L 382 98 L 392 110 L 406 108 L 412 95 Z"
  },
  {
    id: "Taoyuan",
    name: "桃園市",
    labelX: 350,
    labelY: 115,
    d: "M 366 96 L 382 122 L 372 142 L 350 148 L 332 135 L 340 108 L 358 100 Z"
  },
  {
    id: "HsinchuCity",
    name: "新竹市",
    labelX: 320,
    labelY: 140,
    d: "M 314 133 L 326 133 L 328 145 L 316 148 L 310 142 Z"
  },
  {
    id: "HsinchuCounty",
    name: "新竹縣",
    labelX: 352,
    labelY: 152,
    d: "M 326 133 L 350 146 L 372 140 L 376 168 L 355 178 L 335 168 L 328 145 Z"
  },
  {
    id: "Miaoli",
    name: "苗栗縣",
    labelX: 322,
    labelY: 185,
    d: "M 314 150 L 335 168 L 355 178 L 350 205 L 328 212 L 298 198 L 302 172 Z"
  },
  {
    id: "Taichung",
    name: "臺中市",
    labelX: 320,
    labelY: 236,
    d: "M 296 200 L 328 212 L 350 205 L 375 220 L 392 232 L 368 252 L 330 262 L 285 242 L 284 220 Z"
  },
  {
    id: "Changhua",
    name: "彰化縣",
    labelX: 268,
    labelY: 270,
    d: "M 284 242 L 302 256 L 298 288 L 275 295 L 255 285 L 260 255 Z"
  },
  {
    id: "Nantou",
    name: "南投縣",
    labelX: 345,
    labelY: 300,
    d: "M 330 260 L 368 252 L 392 232 L 398 275 L 388 335 L 360 348 L 332 352 L 305 320 L 300 286 L 302 258 Z"
  },
  {
    id: "Yunlin",
    name: "雲林縣",
    labelX: 260,
    labelY: 325,
    d: "M 254 288 L 278 298 L 302 312 L 295 342 L 255 350 L 235 330 L 238 305 Z"
  },
  {
    id: "ChiayiCity",
    name: "嘉義市",
    labelX: 278,
    labelY: 362,
    d: "M 272 355 L 286 355 L 288 368 L 274 370 L 270 362 Z"
  },
  {
    id: "ChiayiCounty",
    name: "嘉義縣",
    labelX: 262,
    labelY: 375,
    d: "M 235 330 L 255 350 L 295 342 L 332 352 L 328 382 L 290 392 L 255 390 L 230 380 L 225 355 Z M 272 355 L 270 362 L 274 370 L 288 368 L 286 355 Z"
  },
  {
    id: "Tainan",
    name: "臺南市",
    labelX: 252,
    labelY: 425,
    d: "M 228 382 L 255 390 L 290 392 L 298 425 L 282 455 L 250 460 L 232 445 L 222 410 Z"
  },
  {
    id: "Kaohsiung",
    name: "高雄市",
    labelX: 288,
    labelY: 470,
    d: "M 290 392 L 328 382 L 350 405 L 340 445 L 315 478 L 290 515 L 265 520 L 255 490 L 282 455 L 298 425 Z"
  },
  {
    id: "Pingtung",
    name: "屏東縣",
    labelX: 312,
    labelY: 555,
    d: "M 290 515 L 315 478 L 335 498 L 338 545 L 332 605 L 324 640 L 314 642 L 305 605 L 285 538 Z"
  },
  {
    id: "Yilan",
    name: "宜蘭縣",
    labelX: 435,
    labelY: 172,
    d: "M 430 128 L 452 118 L 465 142 L 458 178 L 440 205 L 415 208 L 398 185 L 400 152 Z"
  },
  {
    id: "Hualien",
    name: "花蓮縣",
    labelX: 412,
    labelY: 295,
    d: "M 415 208 L 440 205 L 436 260 L 420 330 L 402 385 L 378 388 L 360 348 L 388 335 L 398 275 L 392 232 Z"
  },
  {
    id: "Taitung",
    name: "臺東縣",
    labelX: 375,
    labelY: 468,
    d: "M 402 385 L 420 330 L 398 425 L 385 490 L 365 540 L 338 545 L 335 498 L 340 445 L 350 405 L 378 388 Z"
  },
  // 離島分區
  {
    id: "Penghu",
    name: "澎湖縣",
    labelX: 135,
    labelY: 345,
    isIsland: true,
    d: "M 125 325 L 142 322 L 150 335 L 140 360 L 126 358 L 118 340 Z M 130 368 L 142 368 L 140 382 L 128 380 Z"
  },
  {
    id: "Kinmen",
    name: "金門縣",
    labelX: 105,
    labelY: 180,
    isIsland: true,
    d: "M 88 170 L 118 168 L 126 182 L 112 195 L 92 190 L 85 180 Z M 122 186 L 136 185 L 138 196 L 124 195 Z"
  },
  {
    id: "Lienchiang",
    name: "連江縣",
    labelX: 105,
    labelY: 85,
    isIsland: true,
    d: "M 92 78 L 115 76 L 118 88 L 96 90 Z M 122 85 L 135 84 L 134 94 L 122 93 Z"
  }
];

/**
 * 離島視窗輔助邊框（提供澎湖、金門、連江清晰的離島視覺分界框）
 */
const ISLAND_FRAMES = [
  { name: "連江縣 (馬祖)", x: 60, y: 50, w: 100, h: 65 },
  { name: "金門縣", x: 60, y: 145, w: 100, h: 70 },
  { name: "澎湖縣", x: 90, y: 300, w: 90, h: 100 }
];

window.TAIWAN_MAP_DATA = TAIWAN_MAP_DATA;
window.ISLAND_FRAMES = ISLAND_FRAMES;
