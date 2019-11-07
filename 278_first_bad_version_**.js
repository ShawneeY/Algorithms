
/**
* Definition for isBadVersion()
*
* @param {integer} version number
* @return {boolean} whether the version is bad
* isBadVersion = function(version) {
*     ...
* };
*/

/**
* @param {function} isBadVersion()
* @return {function}
*/
// 二分法， 必须是sorted list 才能用
// 暗示，1）给你一个sorted list 2）在这个list里面找一个数
// 如果traverse list，O(n), 二分法时间复杂度是 O(lgn), 二分法每次可以排除一半的数据

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (n == 1) return isBadVersion(1) ? 1 : -1;
        
        // s                n  
        // 1,2,3,4,5,6,....,n
        var s = 1;
        var e = n;
        
        // s = 1, e = 2
        while(s <= e) {
            // int m = (s+e)/2; // s/2 + e/2 overflow integer MAX_VALUE
            // (s+e)/2 => s/2 + e/2 => s + (e-s)/2 => s + e/2 - s/2 => s/2 + e/2 will not overflow
            
            var m = s + Math.floor((e-s)/2);
            
            console.log(s, m, e);
            
            if (isBadVersion(m)) { // NNNNNNyYYYYYYYY
                if (!isBadVersion(m-1)) {
                    return m;
                } else {
                    e = m-1;
                }
            } else { // m is not a bad version
                if (isBadVersion(m+1)) {
                    return m+1;
                } else {
                    s = m+1;
                }
            }
        }
        
        return s;
    };
 };
 

 // Shawnee revamp
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if(n === 1) return  isBadVersion(1) ? 1 : -1;
        
        var start = 1;
        var end = n;
 
        while(start<=end){
             var midPoint = start + Math.floor((end - start)/2);
            if(isBadVersion(midPoint)){
                if(isBadVersion(midPoint -1)){
                    end = midPoint -1;
                }else {
                    return midPoint;
                }
            }else {
                if(isBadVersion(midPoint+1)){
                    return midPoint + 1;
                }else {
                    start = midPoint + 1
                }
            }
        }
        
        return start;
       
    };
 };
 