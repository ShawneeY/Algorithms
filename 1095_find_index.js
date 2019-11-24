var findInMountainArray = function(target, mountainArr) {
    
    var s = 0;
    var e = mountainArr.length() - 1;
    
    while(s < e){
        var mid = s + Math.floor((e-s)/2);
        var midVal = mountainArr.get(mid);
        
        if(midVal > mountainArr.get(mid+1)){ // mid === max ||  mid sits in second half
            e = mid;
        }else {
          s = mid+1;  
        }
        
    }

    var top = s; // 4
    var s1 = 0;
    var e1 = top;
    
    while(s1 < e1){
        //        0  + 0
        var mid = s1 + Math.floor((e1-s1)/2);
//          3
        var midVal = mountainArr.get(mid);
        
        if(midVal === target){
            return mid;

        }else if(midVal > target){ // target on the left side of mid, [0, mid-1]
            e1 = mid - 1;
        }else { // target sits [mid+1 - top]
            s1 = mid + 1;
        } 
    }
    
    if(mountainArr.get(s1) === target){
        return s1;
    }
    
    var s2 = top;
    var e2 = mountainArr.length() - 1;
    
    while(s2 < e2){
        // .      1 + 0;
        var mid = s2 + Math.floor((e2-s2)/2);
        var midVal = mountainArr.get(mid);
        
        if(midVal === target){
            return mid;

        }else if(midVal > target){ // target on the right side of mid, [mid+1, e]
            s2 = mid + 1; // 2
        }else { // target sits [mid+1 - top]
            e2 = mid - 1;
        }
    }

    if(mountainArr.get(s2) === target){
        return s2;
    }
    
    return -1;
};