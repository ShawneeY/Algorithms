/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    // move slow criteria: found a repeat char
    if(k === 0){
        return 0;
    }
    let slow = 0;
    let dict = new Map();
    let uniqueCount = 0;
    let maxLength = 0;
    for(let fast = 0; fast < s.length; fast++){
        let fastCount = dict.get(s.charAt(fast)) || 0;
        if(fastCount === 0){
           uniqueCount++
        }
        dict.set(s.charAt(fast), fastCount + 1); 
        
        while(uniqueCount > k){
            let charSlow = s.charAt(slow);
            let slowCount = dict.get(charSlow);
            dict.set(charSlow, slowCount-1);
            if(slowCount === 1){
                uniqueCount--
            }
            
            slow++;
          
        }

        if(uniqueCount <= k){
            let length = fast - slow + 1;
            maxLength = Math.max(maxLength, length);
        }
    }
    return maxLength;
};