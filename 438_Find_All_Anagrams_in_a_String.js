/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    //edge case

    let map = new Map();
    let loopMap = new Map();
    for (let i = 0; i < p.length; i++) {
        let curr = p.charAt(i);
        if (map.has(curr)) {
            let count = map.get(curr);
            map.set(curr, count + 1);
            loopMap.set(curr, count + 1);
        } else {
            map.set(curr, 1);
            loopMap.set(curr, 1);
        }
    }

    let matchCount = 0;
    let start = 0;
    let arr = [];
    let length = p.length;
    for (let i = 0; i < s.length; i++) {
        let curr = s.charAt(i);

        if (loopMap.has(curr)) {
            let count = loopMap.get(curr);
            count--;
            loopMap.set(curr, count);
            if (count === 0) {
                matchCount++
            }
        }


        while (matchCount === map.size) {
            if (i - start + 1 === p.length) {
                arr.push(start)
            }

            let startChar = s.charAt(start);
            if (loopMap.has(startChar)) {
                let count = loopMap.get(startChar);
                loopMap.set(startChar, count + 1);
                if (count === 0) {
                    matchCount--;
                }
            }
            start++
        }

    }

    return arr;
};