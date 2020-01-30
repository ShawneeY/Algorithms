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

// Shawnee's solution
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    let maxLength = 0;
    for(let j = 1; j <= 26; j++){
        let smap = new Map();
        let uniqueChar = 0;
        let slow = 0;
        let validSubstring = 0 
        ;
        for(let fast = 0; fast < s.length; fast++){
            if(smap.get(s[fast]) > 0){
                 let fastCount = smap.get(s[fast]);
                 smap.set(s[fast], fastCount+1);
            }else{
                 smap.set(s[fast], 1);
                 uniqueChar++;
            }

            let count = smap.get(s[fast]);
            if(count === k){
                validSubstring++
            }
           
            while(uniqueChar > j){
                
                let slowCount = smap.get(s.charAt(slow));
                smap.set(s.charAt(slow), slowCount - 1);
                if(slowCount === k){
                    validSubstring--
                }
                if(slowCount === 1){
                    uniqueChar--
                }
                slow++

                
            }

            if(uniqueChar === j && uniqueChar === validSubstring){ 
                console.log(uniqueChar, fast, slow)
             let length = fast - slow + 1;
             maxLength = Math.max(length, maxLength);                
            }

        }
    }
    
    return maxLength;
   
};