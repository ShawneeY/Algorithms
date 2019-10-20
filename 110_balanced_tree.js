var isBalanced = function(root) {
    　if(!root){
         return false;
      }
      var left = isBalanced(root.left);

      if(root.right === null) {
          return left+1;
      }

      var right =isBalanced(root.right);
        if(root.left === null){
           return right+1;
        }
      
      return left<2 && right<2
};