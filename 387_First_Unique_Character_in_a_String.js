/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();
    
    for(let i = 0; i < s.length; i++){
        let curr = s.charAt(i);
        if(map.has(curr)){
            let count = map.get(curr);
            map.set(curr, count+1);
        }else {
            map.set(curr, 1);
        }
    }


    for(let i = 0; i < s.length; i++){
        if(map.get(s.charAt(i)) === 1) {
            return i;

        }
    }

    return -1;
    
};