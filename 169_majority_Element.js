/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let map = new Map();
    
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            let count = map.get(nums[i]);
            map.set(nums[i], count+1)
            
        }else{
            map.set(nums[i], 1)
        }
        let count = map.get(nums[i]);
        if(count >= Math.floor(nums.length/2)+1){
            return nums[i];
        }
    }
    
    
};