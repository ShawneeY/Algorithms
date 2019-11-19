
var rightSideView = function(root) {
    if(root === null){
        return [];
    }
    
    var right = [];
    
    var helper = function(root, lvl){
       if(root){
           right[lvl] = root.val;
           if(root.left){
               helper(root.left, lvl+1)
           }
           
           helper(root.right, lvl+1)
       }
      
    }
    helper(root, 0);
    return right;
};