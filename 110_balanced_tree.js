var isBalanced = function(root) {
  var getHeight = function(node){
      if(node === null){
          return 0;
      }
      return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  }
  
  if(root === null) {
      return true;
  }
 
 var leftSubtree = isBalanced(root.left);
 var rightSubtree = isBalanced(root.right);
 var leftHeight = getHeight(root.left);
 var rightHeight = getHeight(root.right);
 
 return leftSubtree && rightSubtree && Math.abs(leftHeight-rightHeight) <2
}