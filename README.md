# Frontend Test

## 目標
✓完成一個簡單的待做清單

## 畫面
✓詳盡畫面請參考 Testing mockup 資料夾內的圖檔。

✓畫面分成 logo、filter、新增待做之輸入框、待做卡片。

✓不必完全照著圖中的 TODO logo 與背景顏色呈現，但是 UI元件請盡力實踐

✓TODO list App 在捲動畫面至 logo 消失後，待做事項輸入框與 Filter 會常駐在頂端

## 功能

### 1. 新增待做事項

### 2. 編輯待做事項

### 3. 將待做事項打星星

### 4. 將待做事項標示為`完成`

### 5. 將完成事項標示為`待做`

### 6. 設定 filter ，可以只檢視特定狀態的事項(全部,待做,完成,星星)

### 7. 刪除待做事項

## 要求(必須做到的部分)
* ✓ 使用 [React](https://facebook.github.io/react/)
* ✓ filter 必須實作router ，也就是重新整理後還是只會呈現該 filter 狀態的待做事項
  - 用state達成
* ✓ 將資料儲存在 localstorage
* ✓ UI 元件在各狀態下的樣式(i.e. hover)要盡量與 mockup 一致（例如待做卡片、新增待做的輸入框）
  - 盡力！

## 建議(可以讓你比較好開發的部分，不強制要求使用)
* ✓ icon 使用[Font Awesome](http://fontawesome.io/)
* ✓ 使用 es6 語法

## 加分(做到會加分的部分)
* ✓ 根據螢幕大小調整樣式(至少有 desktop/mobile 兩個版本)
  - breaking point : 780px
* ? 有寫 test
  - `Redux` 的`reducer` and `actions`有寫
  - 使用`jest`
* X 可以手動拖拉待做事項，修改順序。
* X 動態效果創造流暢的使用體驗（例如：新增待做事項，待做卡片如何出現。刪除待做事項，待做卡片如何消失等等。）
* ✓ 使用[Redux](http://redux.js.org/)

## How to start
```sh
$ git clone https://github.com/erwaiyang/React-Todo-App-with-Redux
$ cd React-Todo-App-with-Redux
$ npm install
$ npm start
```


#### boilerplate from [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate)
