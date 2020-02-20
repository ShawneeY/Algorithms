/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    let result = [];

    for(let i = 1; i <= numRows; i++){
        result[i] = Array(i).fill(1);
        for(let j = 1; j < i; j++){
            result[i][j] = result[i-1][j-1] + (result[i-1][j] ? result[i-1][j] : 0)
        }
    }

    result.shift();
    return result;
};