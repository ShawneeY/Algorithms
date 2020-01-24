var search = function(nums, target) {
    // 0,1,2,4,5,6,7
     
    // 7,0,1,2,4,5,6
    // 6,7,0,1,2,4,5
    // 5,6,7,0,1,2,4
    // 4,5,6,7,0,1,2
    // 2,4,5,6,7,0,1
    // 1,2,4,5,6,7,0
     
    // 0,1,2,4,5,6,7
     
    var s = 0;
    var e = nums.length-1;
    while(s <= e) {
        var m = s + Math.floor((e-s)/2); // prevent overflow
        if (target == nums[m]) return m;
       
        if (nums[m] < nums[e]) { // [m..e] is sorted
            if (target >= nums[m+1] && target <= nums[e]) {
                s = m+1;
            } else {
                e = m-1;
            }
        } else { // [s..m] is sorted
            if (target >= nums[s] && target <= nums[m-1]) {
                e = m-1;
            } else {
                s = m+1;
            }
        }
    }
     
    return -1;
  };