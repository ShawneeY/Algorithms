var trap = function(height) {
    let maxLeft = 0;
    let maxRight = 0
    let left = 0;
    let right = height.length - 1;
    let waterCount = 0;
    
    while(left <= right){
        if(height[left] <= height[right]){
            if(height[left] >= maxLeft){
                maxLeft = height[left];
            }else {
                waterCount = maxLeft - height[left] + waterCount;
            }
           
            left++
        }else {
            if(height[right] >= maxRight){
                maxRight = height[right];
            }else {
                waterCount = maxRight - height[right] + waterCount;
            }
            right--
        }
        
    }
    return waterCount;
};