var findDuplicate = function(nums) {
    if(nums.length === 0){
        return null;
    }
    var map = new Map();
    for(var i = 0; i<nums.length; i++){
        if(map.get(nums[i])){
            map.set('outcome', nums[i])
        }else {
            map.set(nums[i], 1);
        }
    }
    return map.get('outcome');
};