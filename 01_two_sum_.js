var nums = [2, 7, 11, 15];
var target = 9;
var twoSum = function(nums, target) {
    const comp = {};
    for(let i=0; i<nums.length; i++){
        console.log(i);
        if(comp[nums[i] ]>=0){
            return [ comp[nums[i] ] , i]
        }
        comp[target-nums[i]] = i
    }
}
twoSum(nums, target);
