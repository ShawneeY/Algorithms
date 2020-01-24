var subarraySum = function(nums, k) {
    //{sum:timesToThisSum}
    var map = {0:1}
    var sum = 0;
    var count = 0;
    
    for(var i =0; i<nums.length; i++){
        var v = nums[i]
        sum = sum+v;
        // work out if difference between k and current sum exists in map already
        if(map[sum-k]){
            count = map[sum-k] + count;
        }
        
        map[sum] = map[sum] ? map[sum] + 1 :1
    }
    return count;
};  