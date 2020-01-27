/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // keep a sliding window 
    // starting from the first char, and keep adding chars to the set and the string;
    // if found dupes, slice off the dupes, keep string and a char set for tracking
    
    if(s.length === 0){
        return 0;
    }
     if(s.length === 1){
        return 1;
    }
    let map = new Map();
    let p1=0;
    let length = 0

    for(let i = 0; i < s.length; i++){
        length = Math.max(i - p1, length)
        if(map.get(s[i]) >= p1){ // if repeat found, get the length before the repetitive one
            let dupeInMapIndex = map.get(s[i]);
            p1 = dupeInMapIndex +1;
        }else { // if repeat not found, include current element in the length
            length = Math.max(i - p1+1, length)
        }
        map.set(s[i], i)
    }

    return length;
};