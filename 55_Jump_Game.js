var canJump = function(nums) {
    let steps = 0;
    for(let i = 0; i < nums.length; i++) {
        let current = nums[i];    
        steps = Math.max(steps-1, current);
        
        const canNotMoveFurtherBeforeFinish = steps <= 0 && i < nums.length - 1;
        if (canNotMoveFurtherBeforeFinish) return false;
    }
    
    return true;
    
    
//     let steps = {step:nums[0], index:0};
//     for(let i = 1; i < nums.length; i++){
//         let curr = nums[i];
//         let diff = i - steps.index;
//         let step = steps.step;
//         if(step < diff){
//             return false
//         }
//         if(steps.step - diff < curr){
//             steps.step = curr
//             steps.index = i;
//         }
        
//     }
//     return true;
};