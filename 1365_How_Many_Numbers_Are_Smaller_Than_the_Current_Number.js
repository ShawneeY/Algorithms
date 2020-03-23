/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    // edge case
    
    const arr = [...nums];
    
    arr.sort((a,b) => a - b);
    
    const map = new Map();
    
    for(let i = 0; i < arr.length; i++){
        let curr = arr[i];
        
        if(!map.has(curr)){
            map.set(curr, i);
        }
    }

    
    const result = [];
    for(let i = 0; i < nums.length; i++){

        result.push(map.get(nums[i]))
    }
    
    return result;
    
 
};