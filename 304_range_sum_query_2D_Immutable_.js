/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix
    let valMap = new Map();
    // (pos, sum)
    this.valMap = valMap;
    for(let i = 0; i<matrix.length; i++){
        let rowSum = 0
        for(let j = 0; j < matrix[0].length; j++){
            let curr = matrix[i][j];
            rowSum = rowSum + curr;
            let sum;
            if(i !== 0){
                sum = valMap.get(`${i-1}+${j}`) + rowSum;
            }else {
                sum = rowSum;
            }

            valMap.set(`${i}+${j}`, sum);
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let valMap = this.valMap;
    
    let rightVal = valMap.get(`${row2}+${col2}`);
    let leftVal = valMap.get(`${row1}+${col1}`);
    let leftExtra = col1 > 0 ? valMap.get(`${row2}+${col1-1}`): 0;
    let topExtra = row1 > 0 ? valMap.get(`${row1-1}+${col2}`):0;
    let overlap = col1 > 0 && row1 > 0 ? valMap.get(`${row1-1}+${col1-1}`):0;
   
    return rightVal-leftExtra - topExtra + overlap;

}

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */