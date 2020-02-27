/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    let n = nums.length;
    let s = 0;
    let e = n-1;
        
    while(s < e) {
        let m = s + Math.floor((e-s)/2);

        if(nums[m] < target){
            s = m+1
        } else {
            e = m;
        }
    }

    if (nums[s] != target) {
        return [-1, -1];
    }
    
    const first = s;
    
    s = 0;
    e = n-1;
        
    while(s < e) {
        let m = s + Math.ceil((e-s)/2); // make middle right-biased

        if(nums[m] > target){
            e = m-1
        } else {
            s = m;
        }
    }
    
    const last = s;
    
    return [first, last];
    

    
};