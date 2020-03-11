/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // edge case
    let s = 0;
    let e = nums.length - 1;
    
    while(s <= e && s < nums.length - 1 && e > 0 ){
        let m = s + Math.floor((e-s)/2);
        
        if(nums[m] === target) return m;
        
        if(nums[m] > target){
            e = m - 1;
        }else {
            s = m + 1;
        }
    }
    return nums[s] >= target ? s : s + 1;
};