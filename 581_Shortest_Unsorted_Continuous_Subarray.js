/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    // from head to tail
    let end = -2;
    let max = Number.MIN_SAFE_INTEGER
    for(let i = 0; i < nums.length; i++){
        const curr = nums[i];
        max = Math.max(curr, max);
        if(curr < max){
            end = i;
        }
    }
    
    let start = -1;
    let min = Number.MAX_SAFE_INTEGER;
    for(let i = nums.length - 1; i >= 0; i--){
        const curr = nums[i];
        min = Math.min(curr, min);
        
        if(curr > min){
            start = i;
        }
        
    }
    
    console.log(end, start)
    
     return end - start + 1;
    
};