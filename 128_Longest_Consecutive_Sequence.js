/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // edge case 
    
  let map = new Map();
  let max = 0;
  
  for(let i = 0; i < nums.length; i++){
      
      if(!map.has(nums[i])){
          let left = map.has(nums[i] - 1) ? map.get(nums[i] - 1) : 0;
          let right= map.has(nums[i] + 1) ? map.get(nums[i] + 1) : 0;
          
          let sum = left + right + 1;
          
          max = Math.max(sum, max);
          
          map.set(nums[i], sum);
          
          map.set(nums[i] - left, sum);
          map.set(nums[i] + right, sum);

      }else {
          continue;
      }
      
    
  }
    
    return max;
    
};