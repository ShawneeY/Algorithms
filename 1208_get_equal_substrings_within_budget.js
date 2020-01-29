/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let slow = 0;
    let cost = 0;
    let maxLength = 0;
    for(let fast = 0; fast < s.length; fast++) {
        cost += Math.abs(s.charCodeAt(fast) - t.charCodeAt(fast));
        
        while(cost > maxCost) {
            cost -= Math.abs(s.charCodeAt(slow) - t.charCodeAt(slow));
            slow++;
        }
        
        maxLength = Math.max(fast-slow+1, maxLength);
    }
    
    return maxLength;
};