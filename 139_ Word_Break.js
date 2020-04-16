/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    if (s.length === 0) {
        return true;
    }

    const dictSet = new Set(wordDict);
    const memo = new Map(); // string -> boolean

    const helper = (str, set, memo) => {
        if (str.length == 0) return true;
        if (memo.has(str)) {
            return memo.get(str);
        }

        for (let i = 0; i <= s.length; i++) {
            let left = str.substring(0, i);
            let right = str.substring(i);

            if (dictSet.has(left) && helper(right, dictSet, memo)) {
                memo.set(str, true);
                return true;
            }
        }

        memo.set(str, false);
        return false;
    }

    return helper(s, dictSet, memo);
};