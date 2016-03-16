#Frontend Test

##目標
完成一個簡單的待做清單

##畫面
詳盡畫面請參考 Testing mockup 資料夾內的圖檔。

畫面分成 logo、filter、新增待做之輸入框、待做卡片。

不必完全照著圖中的 TODO logo 與背景顏色呈現，但是 UI元件請盡力實踐（例如待做卡片、新增待做的輸入框）。

請注意，TODO list App 在捲動畫面至 logo 消失後，待做事項輸入框與 Filter 會常駐在頂端，可以參考：
Completed to do（為尚未捲動至 logo 消失）、Create to Do list（為捲動至 logo 消失後）

##功能

###1. 新增待做事項（參考 Create to Do list.png/Create to do list2.png）

###2. 編輯待做事項（參考 Edit to DO/ Edit to Do）

###3. 將待做事項打星星（參考 Starred to Do/ Starred to Do 2）

###4. 將待做事項標示為`完成`（參考 Completed to do）

###5. 將完成事項標示為`待做`（參考 Completed to do）

###6. 可以只檢視特定狀態的事項(全部,待做,完成,星星) （參考 filter to Do/ filter to Do 2/ filter to Do 3）

###7. 刪除待做事項（參考 Delete to DO/ Delete to DO 2）

##要求
* 使用react
* 建議使用redux
* 必須實作router(可用library)
* 將資料儲存在localstorage
* 可以使用es6語法 [es6features](https://github.com/lukehoban/es6features)


##加分

* 根據螢幕大小調整樣式(至少有desktop/mobile兩個版本)
* 有寫test
* 可以手動拖拉待做事項，修改順序。
* 動態效果創造流暢的使用體驗（例如：新增待做事項，待做卡片如何出現。刪除待做事項，待做卡片如何消失等等。）

boilerplate from https://github.com/gaearon/react-transform-boilerplate