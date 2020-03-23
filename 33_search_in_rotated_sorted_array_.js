
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


  //Option 2
  /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length === 0){
        return -1;
    }
    
    let s = 0;
    let e = nums.length - 1;
    
    while(s < e){
        let m = s + Math.floor((e-s)/2);

        if(nums[m] < nums[e]){//m....e sorted
            if(nums[m] < target && target <=nums[e]){ // if target is between m--e
                s = m + 1; // Make sure have a condition that needs to be handled 
                           // with s = m + 1
                           // Because in the end, s will equal to m and it will need 
                           // a break through from while loop
            }else{
                e = m
            }
        }else{ //s...m sorted
            if(nums[m] >= target && target >= nums[s]){//if target is between s--m
                e = m
            }else{
                s = m + 1;
            }
            
        }
    }

    return nums[s] === target ? s : -1;
};