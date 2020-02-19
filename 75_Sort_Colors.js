/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let length = nums.length;
    let h = 0;
    let t = length - 1;
    
   
    for(let i = 0; i <= t; i++){ // tail 之后是已经排好的大数
        let curr = nums[i];
        if(curr === 0){
            swap(i,h,nums);
            h++
           
        }
        if(curr === 2){
            swap(i,t,nums);
            t--
            i--  // 如果nums[t]也等于2的话， hold住当前index in order to not leave 2 behind
        }
    }
    
    return nums;
};

let swap = (i,j, nums) => {
    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}

