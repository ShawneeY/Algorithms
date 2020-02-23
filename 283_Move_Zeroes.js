/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    if(nums.length === 0){
        return nums;
    }
    
    const length = nums.length;
    let nonzeroindex = 0
    
    for(let i = 0; i < length; i++){
        let curr = nums[i];
        if(curr !== 0){
            nums[nonzeroindex] = curr;
            nonzeroindex++;
        }
    }
    
    for(let zeroindex = nonzeroindex; zeroindex < length; zeroindex++){
        nums[zeroindex] = 0;
    }
};