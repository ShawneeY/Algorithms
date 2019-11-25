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

function stepsToObstacle(grid) {
    if(grid.length === 0 || grid[0].length === 0){
        return 0;
    }
    var pathMap = new Map();
    var steps = 1;
    var que = [grid[0][0]]
    while(que.length > 0){
        for(var breath in que){
            var nextBreath = [];
            for(var i = 0; i < breath.length; i++){
                var curr = breath[i];
                var path1 = [curr[0], curr[1]+1];
                var path2 = [curr[0]+1, curr[1]];
                
                if(grid[path1] == 9 || grid[path2] == 9){
                    return steps;
                }
                
                if(grid[path1] === 1){
                    nextBreath.push(path1);
                }
                if(grid[path2] === 1){
                    nextBreath.push(path2);
                }
            }
        }
        que = nextBreath;
        steps++
    }
    return 0;
}