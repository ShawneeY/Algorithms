/**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function(n) {
    this.n = n
    this.player;
    this.position;
    this.grid=[];
    for(var i = 0; i < n; i++) {
        this.grid[i] = [];
        for(var j = 0; j < n; j++) {
            this.grid[i][j] = 0;
        }
    }
};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.traversal = function(){
    let grid = this.grid;
    let player = this.player;
    let n = this.n;
    let position = this.position;
    
    let r = position[0];
    let c = position[1];
    
    //rowcount
    let rowcount = 0
    for(let i = 0; i < n; i++){
        let curr = grid[r][i];
        if(curr === player) rowcount++
        if(rowcount === n) return player;
    }
    
    // colcount
    let colcount = 0
    for(let i = 0; i < n; i++){
        let curr = grid[i][c];
        if(curr === player) colcount++
        if(colcount === n) return player;
       
    }
    //diagonal
    let length = n;
    if(position[0] === position[1]){
        let count = 0;
        for(let i = 0; i < n; i++){
            if(grid[i][i] === player) count++
        }
        if(count === n) return player;
    }
    if(position[0] + position[1] === n-1){
        let count = 0;
      
        for(let i = 0; i < n; i++){
            
            if(grid[i][n-1-i] === player) count++;
        }
        if(count === n) return player;
    }
   return 0;
}

TicTacToe.prototype.move = function(row, col, player) {
    this.position = [row, col];
    this.player = player;
    this.grid[row][col] = player;
    
    return this.traversal();
    
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */

 //o(1)
 /**
 * Initialize your data structure here.
 * @param {number} n
 */
var TicTacToe = function(n) {
    this.n = n;
    this.row = [];
    this.col = [];
    this.diagonal1 = 0;
    this.diagonal2 = 0;
};

/**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    let p = player === 1 ? 1 :-1;
   
    let n = this.n;
    
    this.row[row] = this.row[row] ? this.row[row]+p : p;
    this.col[col] = this.col[col] ? this.col[col]+p : p;
    if(row === col) this.diagonal1 = this.diagonal1+p; 
    if(row+col === n-1) this.diagonal2 = this.diagonal2+p;
    if(Math.abs(this.row[row]) === n || Math.abs(this.col[col]) === n || Math.abs(this.diagonal1) === n || Math.abs(this.diagonal2) === n){
        
        return player;
    }
    return 0;
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */