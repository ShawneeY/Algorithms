/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    
    let maxLength = 0;
    for(let n = 1; n <= 26; n++) {
        maxLength = Math.max(maxLength, longestSubstringWithNUniqueCharacters(s,k,n));
    }
    
    return maxLength;
};

var longestSubstringWithNUniqueCharacters = function(s, k, n) {
    let slow = 0;
    let map = new Map(); // char -> charCount
    let atLeastKCount = 0; // count of chars that has at least K repeating times
    let uniqueCharCount = 0;
    let maxLength = 0
    for(let fast = 0; fast < s.length; fast++) {
        let charF = s.charAt(fast);
        let charFCount = map.get(charF) || 0;
        if (charFCount > 0) {
            map.set(charF, charFCount+1);
        } else { // undefined
            map.set(charF, 1);
            uniqueCharCount++;
        }
        
        if (map.get(charF) == k) { // ?? must be ==
            atLeastKCount++;
        }
        
        while(uniqueCharCount > n) {
            let charS = s.charAt(slow);
            let charSCount = map.get(charS);
            if (map.get(charS) == 1) { // ???
                uniqueCharCount--;
            }
            
            if (map.get(charS) == k) { // ???
               atLeastKCount--; 
            }
            
            map.set(charS, charSCount-1);
            slow++;
        }
        
        if (uniqueCharCount == n && uniqueCharCount == atLeastKCount) { // ???
            maxLength = Math.max(maxLength, fast-slow+1);
        }
    }
    
    return maxLength;
}