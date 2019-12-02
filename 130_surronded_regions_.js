/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var isInbound = function(grid, x, y){
    return x > 0 && x <= grid.length-1 && y > 0 && y <= grid[0].length-1;
}

var dfs = function(grid, x, y, flipers, unflipers){
    if(!isInbound(grid,x,y)){
        return;
    }
    var offsets = [[1,0], [-1,0], [0,1], [0,-1]]
    for(var offset of offsets){
        var row = x + offset[0];
        var col = y + offset[1];
        if(grid[row][col] == 'O' && row !== grid.length-1 && col !== grid[0].length-1){
            flipers.push([row, col])
            grid[row][col] = 'F'
        }else if(grid[row][col] == 'O' && (row == grid.length-1 || col == grid[0].length-1)){
            unflipers.push([row, col]);
            grid[row][col] = 'U';
        }else {
            dfs(grid, row, col, flipers, unflipers)
        }
        
    }
}
var solve = function(board) {
    var flipers=[];
    var unflipers=[];
   
    for(var i = 0; i < board.length-1; i++){
        for(var j = 0; j < board.length-1; j++){
            var curr = board[i][j];
            
            if(curr == 'O'){
                dfs(board, i, j, flipers, unflipers);
            }
        }
    }

    for(var f of flipers){
        var x = f[0];
        var y = f[1];
        board[x][y]='X';
    }
     for(var u of unflipers){
        var x = u[0];
        var y = u[1];
        board[x][y]='O';
    }
    return board;
};