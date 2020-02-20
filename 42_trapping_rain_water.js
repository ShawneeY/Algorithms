var trap = function(height) {
    let maxLeft = 0;
    let maxRight = 0
    let left = 0;
    let right = height.length - 1;
    let waterCount = 0;
    
    while(left < right){
        let l = height[left];
        let r = height[right];
        if(l < r){
            if(l >= maxLeft){
                maxLeft = l;
            }else{
                waterCount = waterCount + maxLeft - l;
            }
          left++
        }else {
            if(r >= maxRight){
                maxRight = r;
            }else{
                waterCount = waterCount + maxRight - r;
            }
         right--
        }
    }
    return waterCount;
};