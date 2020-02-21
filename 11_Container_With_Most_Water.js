/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let L = 0;
    let R = height.length - 1;
    
    let maxArea = 0;
    
    while(L < R){
        let w = R - L;
        
        let h = Math.min(height[R], height[L]);
        
        maxArea = Math.max(maxArea, w * h);
        
        if(height[L] <= height[R]){
            L++
        }else {
            R--
        }
        
    }
   return  maxArea
    
};