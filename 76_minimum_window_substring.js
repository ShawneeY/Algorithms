/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    
    let map = new Map();
    for(let i = 0; i < t.length; i++) {
        let count = map.get(t.charAt(i)) || 0;
        map.set(t.charAt(i), count+1);
    }
    
    let matchCount = 0;
    let slow = 0;
    let cost = 0;
    let minLength = s.length;
    let substring = '';
    for(let fast = 0; fast < s.length; fast++) {
        let charF = s.charAt(fast);
        if (map.has(charF)) {
            let charFCount = map.get(charF);
            map.set(charF, charFCount-1);
            
            if (charFCount == 1) {
                matchCount ++
            }
        }
        
        while(matchCount == map.size) { // 找到了一个符合题意的解，但不一定是最短
            let length = fast- slow + 1
            minLength = Math.min(length, minLength);
            if(length === minLength) {
                substring = s.slice(slow, fast + 1);
            }
            
            let charS = s.charAt(slow);
            if (map.has(charS)) {
                let charSCount = map.get(charS);
                map.set(charS, charSCount+1);
                
                if (charSCount == 0) { // ???
                    matchCount--;
                }
            }
            
            slow++;
        }

    }

    return substring;
}
    
