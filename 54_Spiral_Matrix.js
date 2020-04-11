/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length === 0) {
        return [];
    }

    let rowStart = 0;
    let colStart = 0;
    let rowEnd = matrix.length - 1;
    let colEnd = matrix[0].length - 1;

    const result = [];
    let r = 0; let c = 0;

    while (rowStart < rowEnd && colStart < colEnd) {
        if (r === rowStart) {
            while (c < colEnd) {
                result.push(matrix[r][c]);
                c++;
            }

        }
        if (c === colEnd) {
            while (r < rowEnd) {
                result.push(matrix[r][c]);
                r++
            }
        }
        if (r === rowEnd) {
            while (c > colStart) {
                result.push(matrix[r][c]);
                c--
            }

        }
        if (c === colStart) {
            while (r > rowStart) {
                result.push(matrix[r][c]);
                r--;
            }
        }
        colStart++;
        rowStart++;
        colEnd--;
        rowEnd--
        r = rowStart;
        c = colStart;
    }

    if (colStart === colEnd && rowStart === rowEnd) {
        result.push(matrix[rowStart][colEnd])
        return result;
    }

    if (colStart === colEnd) {
        while (rowStart <= rowEnd) {

            result.push(matrix[rowStart][colEnd]);
            rowStart++
        }
    } else if (rowStart === rowEnd) {
        while (colStart <= colEnd) {
            result.push(matrix[rowStart][colStart]);
            colStart++
        }
    }
    return result;
};