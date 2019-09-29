// Recursion
var preorderTraversal = function(root) {
    var newList = [];
    var preOrder = function(root){
         if(root === null){
            return;
        }
        newList.push(root.val);
        
        preOrder(root.left);
        preOrder(root.right);
           
    }
    preOrder(root);
    return newList;
   
};

//Iterative
var preorderTraversal = function(root) {
    var stack = []
    var newList = [];
    var current = root;
    while(current !== null || stack.length>0){
        while(current!==null){
            newList.push(current.val);
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        current = current.right;
    }
    return newList;
};
