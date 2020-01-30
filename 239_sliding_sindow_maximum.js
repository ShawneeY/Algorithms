/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if(nums.length < 1){
       return [];
    }

    let length = nums.length;
    let max = [];
    let slideCount = length - k;
    
    
    for(let start = 0; start <= slideCount; start++){
        
        let end = 0
        let windowMax = Number.MIN_SAFE_INTEGER;
        while(end < k){
            let curr = nums[start + end];
            windowMax = Math.max(windowMax, curr);
            
            end++
        }
        
        max.push(windowMax);
    }
   return max;
};