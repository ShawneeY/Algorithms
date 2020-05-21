/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let max = 0;
    for (let i = 0; i < candies.length; i++) {
        let curr = candies[i];
        max = Math.max(max, curr);
    }

    const result = [];

    for (let i = 0; i < candies.length; i++) {
        let curr = candies[i];
        if (curr + extraCandies >= max) {
            result[i] = true;
        } else {
            result[i] = false;
        }
    }
    return result;
};