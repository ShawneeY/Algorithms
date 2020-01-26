/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    
    // find all orange islands
    // check if each island has least one rotten orange
    // if one does not have rotten orange, return -1 directly
    // if all has, add up count of each orange island.
    // find all adjacent fresh oranges around a rotten one count +1 (bfs)
    let rottens = [];
    let freshes = new Set();
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            let curr = grid[i][j];
            if(curr == 2){
                rottens.push([i,j]);
            }
            if(curr == 1){
                freshes.add(`${i}+${j}`);
            }
        }
    }
    if(rottens.length < 1 && freshes.size < 1){
        return 0;
    }
    if(rottens.length < 1){
        return -1;
    }
    
    if(freshes.size < 1){
        return 0;
    }
    let offsets = [[1,0],[-1,0],[0,1],[0,-1]]
    let isInbound = function(grid, x, y){
        return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
    }
    let minutes = 0;
    while(rottens.length > 0 && freshes.size > 0){
        let length = rottens.length;
        
        for(let r = 0; r < length; r++){
            let rotten = rottens.shift();
            let x = rotten[0];
            let y = rotten[1];

            for(let offset of offsets){
                // if found fresh orange change it to rotten
                let x1 = x+offset[0];
                let y1 = y+offset[1];
                
                if(isInbound(grid,x1, y1) && grid[x1][y1] === 1){
                    grid[x1][y1] = 2;
                    freshes.delete(`${x1}+${y1}`);
                    rottens.push([x1,y1]);
                }
            }
            
        }
        minutes+=1;
        
    }
    return freshes.size > 0 ? -1 : minutes;
}
