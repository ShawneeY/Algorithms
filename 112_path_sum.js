var hasPathSum = function(root, sum) {
    if(!root){
           return 0;
       }
       var path = 0;
       if(root.val === sum && (!root.left && !root.right)){
           path = 1;
       }
       var newSum = sum - root.val;

       var left = hasPathSum(root.left, newSum);
       var right = hasPathSum(root.right, newSum);

       return path + left + right;
};