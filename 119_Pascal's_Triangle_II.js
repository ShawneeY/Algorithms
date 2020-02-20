var getRow = function(rowIndex) {
    
    const result = [[1]];
    
    for(let i = 1; i <= rowIndex; i++){
        result[i] = Array(i+1).fill(1);
       for(let j = 1; j <= i; j++){
            result[i][j] = result[i-1][j-1] + (result[i-1][j] ? result[i-1][j] : 0)
      }
    }
    
    return result[rowIndex];
};