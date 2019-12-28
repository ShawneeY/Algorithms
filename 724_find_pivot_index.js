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

//Better solution
var pivotIndex = function(nums) {
    if(nums.length == 0){
        return -1;
    }
    

    let sum = 0;
    let runningSum = [];
    //runningSum = [1,8,11,17,22,28];
    
    for(let i = 0; i < nums.length; i++){
        sum = nums[i] + sum;
        runningSum[i] = sum;
    }

    for(let i = 0; i < nums.length; i++){
        let leftSum = i === 0 ? 0 : runningSum[i-1];
        let rightSum = i === nums.length - 1 ? 0 : runningSum[nums.length-1] - runningSum[i];
       
        if(leftSum === rightSum){
            return i;
        }
    }
    return -1;

}