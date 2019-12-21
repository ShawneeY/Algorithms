/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function(x, y) {
    
    let constructCoodinateString = function(x,y){
        return `${x}:${y}`;
    }
    
    
    let que = [[0,0]]
    let steps = 0;
    let visited = new Set();
    visited.add(constructCoodinateString(0,0))

    while(que.length > 0){
        let length = que.length;
        
        for(let i = 0; i < length; i++){
            let curr = que.shift();
            let r = curr[0];
            let c = curr[1];
            if(x ===r && y === c){
                return steps;
            }
            //{-1,2}, {1,2}, {2,1}, {2,-1}
            //let offsets = [[-1,2],[1,2],[2,1],[2,-1]];
            let offsets = [[-1,2],[1,2],[-1,-2],[1,-2],[2,1],[2,-1],[-2,1],[-2,-1]];
        
       
            for(let offset of offsets){
                let px = r + offset[0];
                let py = c + offset[1];
        
                if(visited.has(constructCoodinateString(px, py))) continue;
                que.push([px,py]);
                visited.add(constructCoodinateString(px, py));
                
            }
           
        }
        
       steps = steps + 1;        
    }
    return -1;
};