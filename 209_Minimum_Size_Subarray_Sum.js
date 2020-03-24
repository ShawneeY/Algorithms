/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    // edge case
    
    if(nums.length === 0){
        return [];
    }
    
    let slow = 0;
    let minLength = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    
    for(let fast = 0; fast < nums.length; fast++){
        let curr = nums[fast];
        
        sum = sum + curr;
        while(sum >= s){
            let length = fast - slow + 1;
            minLength = Math.min(minLength, length);
            sum = sum - nums[slow];
            slow++;
        }
    }
    
    return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength;
};