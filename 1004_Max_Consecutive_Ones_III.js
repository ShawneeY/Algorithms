/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {

    if (A.length === 0) {
        return 0;
    }



    let max = 0
    let s = 0

    for (let i = 0; i < A.length; i++) {
        let curr = A[i];

        if (curr === 0) {
            K--;
        }
        while (K < 0) {
            if (A[s] === 0) {
                K++;
            }

            s++
        }
        max = Math.max(max, i - s + 1)
    }

    return max;

};