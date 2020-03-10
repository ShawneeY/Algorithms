/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    // [3,2,2,3] -> [2,2,3,3] 2  
    var end = nums.length - 1;
    for(let i = 0; i <= end; i++){ // i<= end want to move end towards head one position
        while(nums[end] === val){
            end--
        }

        let curr = nums[i];
        if(curr === val && i < end){
            let endVal = nums[end];
            nums[end] = curr;
            nums[i] = endVal;
            end--;
         
        }

    }
  return end+1
};
//3 2 2  end = 1;
// nums[1] === 2  end = 0
