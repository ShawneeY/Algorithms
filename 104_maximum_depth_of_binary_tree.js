// Recursion
var maxDepth = function(root) {
  if(root === null) {
      return 0;
  }
  return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1
};
// Tail recursion


//二刷
var maxDepth = function(root) {
  // edge case
  
  if(root === null){
      return 0;
  }
  
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  
  return Math.max(left, right) + 1;
};