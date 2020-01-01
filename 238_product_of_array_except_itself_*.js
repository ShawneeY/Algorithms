/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let product = 1;
    let leftMap = new Map();
    
    for(let i = 0; i < nums.length; i++){
        product = product * nums[i];
        leftMap.set(i, product)    
    }
    
    product = 1;
    let rightMap = new Map();
    for(let i = nums.length-1; i >= 0; i--){
        product = product * nums[i];
        rightMap.set(i, product);
    }
    
    let output = [];
    
    for(let i = 0; i < nums.length; i++){
        
        if(leftMap.has(i-1) && rightMap.has(i+1)){
            let left = leftMap.get(i-1);
            let right = rightMap.get(i+1);

            output[i] = left * right;
        }else if (rightMap.has(i+1)){
            output[i] = rightMap.get(i+1);
        }else if(leftMap.has(i-1)){
            output[i] = leftMap.get(i-1)
        }else {
            continue;
        }
    }
    
    return output;

}
