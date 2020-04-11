/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {

    if (matrix.length === 0) {
        return [];
    }
    let rowCount = matrix.length;
    let colCount = matrix[0].length;

    let result = [];
    let r = 0;
    let c = 0;
    for (let i = 0; i < rowCount * colCount; i++) {
        result[i] = matrix[r][c];

        let total = r + c;

        if (total % 2 === 0) { // should go up from this point
            if (c === colCount - 1) {
                r++;
            } else if (r === 0) {

                c++
            } else {
                r--;
                c++
            }
        } else { // should go down from this point
            if (r === rowCount - 1) {
                c++
            } else if (c === 0) {
                r++
            } else {
                r++;
                c--;
            }
        }
    }

    return result;
};