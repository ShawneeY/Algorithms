// recursion
var postorderTraversal = function(root) {
    var newList = [];
    var postOrder = function(root){
        if(root === null) {
            return;
        }
        postOrder(root.left);
        postOrder(root.right);
        
        newList.push(root.val);
    }
    postOrder(root);
    return newList;
    
};

// Iterative 
var postorderTraversal = function(root) {
    if(root=== null){
        return [] ;
    }
  var stackLeft = [];
  var stackRight = [];
  var newList = [];
    
  stackLeft.push(root);
  while(stackLeft.length > 0){
    var current = stackLeft.pop();
    if(current.left){
        stackLeft.push(current.left)
    }
    if(current.right){
        stackLeft.push(current.right);
    }
    stackRight.push(current.val);
      
  }
  while(stackRight.length > 0){
      var value = stackRight.pop();
      newList.push(value);
  }
    
    return newList;
};