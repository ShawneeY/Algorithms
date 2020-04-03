/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // remove all non-alphanuetric chars 

    // check palindrome from start and end, short circit false if unequal value found

    const isAlphnumetric = char => /[a-z]/.test(char) || /[0-9]/.test(char);
    const charArr = [];
    s = s.replace(' ', '');
    for (let i = 0; i < s.length; i++) {
        let curr = s.charAt(i).toLowerCase();
        if (isAlphnumetric(curr)) {
            charArr.push(curr);
        }
    }

    for (let i = 0; i < charArr.length; i++) {
        let start = charArr[i];
        let end = charArr[charArr.length - 1 - i];

        if (start !== end) {
            return false;
        }
    }

    return true;
};