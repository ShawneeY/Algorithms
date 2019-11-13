
var numIslands = function(grid) {
   if (grid.length == 0) return 0; // []
   if (grid[0].length == 0) return 0; // [[]]
   
   var m = grid.length; // 有多少行
   var n = grid[0].length; // 有多少列
   
   var numberOfIslands = 0;

   var inbound = function(grid, i,j){
      return i >= 0 && i < grid.length && j >= 0 && j < grid[0].length;
   }
   
   var dfs = function(grid, row, col){
       var up = [row-1, col];
       var down = [row+1, col];
       var left = [row, col-1];
       var right = [row, col+1];
       
       var around = [up, down, left, right];
        
       around.forEach(function(cord){
           if(inbound(grid, cord[0], cord[1]) && grid[cord[0]][cord[1]] == 1)
           {   
               
                grid[cord[0]][cord[1]] = 0;
                dfs(grid, cord[0], cord[1])   
           }
       })
      
   }
   
   // 遍历 traverse a grid/matrix/2d array O(m*n)
   for(var row = 0; row < m; row++) {
       for(var col = 0; col < n; col++) {
            
           if (grid[row][col] == 1) {
               
               grid[row][col] = 0
               
               dfs(grid, row, col);

               numberOfIslands++;
           }
       }
   }
   
   return numberOfIslands;
};