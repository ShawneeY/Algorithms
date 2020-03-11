var removeDuplicates = function(nums) {
    // edge case 
    
    
    const swap = (i, j, nums) => {
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
    
    let s = 0;
    for(let i = 0; i < nums.length; i++){

       //let curr = nums[i];

       if(nums[s] < nums[i]){
           nums[s+1] = nums[i]
           s++;
       }

    }
    return s + 1;
};