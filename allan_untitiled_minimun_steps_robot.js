/*
 * Calculate the minimum steps needed for a robot to remove(reach) an obstacle in a lot (row x column).
 * There are trenches in the lot, represented by 0.
 * The robot can only move on flat ground, represented by 1.
 * The obstacle's location is marked with 9
 * Robot always starts at [0, 0] which is flat.
 *
 * Example 1:
 *
 * 1 0 0
 * 1 0 0
 * 1 9 0
 *
 * Result is 3 steps.
 *
 * Example 2:
 *
 * 1 1 1 0 0
 * 1 1 1 0 0
 * 0 1 0 0 0
 * 0 1 1 9 0
 * 1 1 1 1 1
 *
 * Result is 6 steps.
 * */
// var a = 1;
// while(a++ > 5) {console.log(a)} // 1, 2, 3, 4
// while(++a > 5) {console.log(a)} // 2, 3, 4

// return a++ // 1
// return ++a // 2

var posToString = function(x,y){
    return `${x}:${y}`;
}
function stepsToObstacle(grid) {
    if(grid.length === 0 || grid[0].length === 0){
        return 0;
    }
    var visited = new Set();
    var steps = 0;
    var que = [[0,0]]
    
    visited.add(posToString(0,0));
    while(que.length > 0){
        console.log({que, visited})
        var length = que.length;
        for(var i = 0; i < length; i++){
            var curr = que.shift();
            var row = curr[0];
            var col = curr[1];
            
            if(grid[row][col] == 9){
                return steps
            }
            
            var offsets = [[1,0], [-1,0], [0,1], [0,-1]]
            
            for(var offset of offsets){
                var r = row + offset[0];
                var c = col + offset[1];
                
                if(r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) continue;
                if(grid[r][c] == 0) continue;
                if(visited.has(posToString(r,c))) continue;
                
                que.push([r,c]); 
                visited.add(posToString(r,c));

            }
            
        }
        steps+=1;
    }
    return -1;
}


var grid = [
[1, 1, 1, 1, 0],
[0, 0, 0, 1, 0],
[0, 1, 1, 1, 0],
[1, 1, 0, 0, 0],
[9, 0, 0, 0, 0]
];

var result = stepsToObstacle(grid);
console.log('result', result);
