/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {

    let count = 0;
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let curr = s.charAt(i);
        let top = stack[stack.length - 1];
        if (!!top && top !== curr) {
            stack.pop();
        } else {
            stack.push(curr)
        }

        if (stack.length === 0) {
            count++;
        }

    }
    return count;

};