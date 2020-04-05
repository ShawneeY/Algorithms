# Algorithms

## 26. Remove Duplicates from Sorted Array
 sliding window
 設一個起始值
 這道題說了是sorted， 只要循環到比起始值大的就把起始值下一個換成當前這個大的
 然後起始值指向當前的最大的值， 最後因爲要返回arr length， 起始值加一

## 278. First Bad Version
二分法
關於二分法， 提前返回的時候要注意一定要返回一個valid的值。mid 或者 mid + 1
因爲mid 最後會等於 s， 而mid+1 會等於s。 如果提前返回是mid - 1的話， 如果s是起始值就會錯
但mid+1 不會，因爲mid+1 最大等于s
還有二分法最好不要在s<=e, 最後檢查s， 直接等於容易錯 
