// Recursion
var inorderTraversal = function(root) {
    var newList = [];
    var inorder = function(root){
        if(root === null){
            return;
        }
        inorder(root.left);
        newList.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return newList;
};

// Iteration
var inorderTraversal = function(root) {
    var stack = [];
    var newList = [];
    var current = root;
    
    while(current != null || stack.length > 0 ){
        while(current !=null){
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        newList.push(current.val);
        current = current.right;
        
    }
    
    return newList; 
};