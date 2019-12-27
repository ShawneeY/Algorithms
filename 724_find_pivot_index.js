/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if(nums.length == 0){
        return -1;
    }
    let result = -1;
   for(let i = 0; i < nums.length; i++){
       let leftArr = nums.slice(0,i);
       let rightArr = nums.slice(i+1);
       let sumleft = leftArr.reduce((a, b) => a + b, 0)
     let sumright = rightArr.reduce((a, b) => a + b, 0)

     if(sumleft === sumright){

         result = i;
         break;
     }
   }
    return result;
};