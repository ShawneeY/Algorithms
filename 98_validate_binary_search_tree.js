// Focus on the current node
// each node.left.val is the largest in left subtree
// each node.right.val is the smallest in right subtree

var isValidBST = function(root) {
    if(!root){
        return true;
    }
    
    function traversal (node, lowest, highest) {
        if(!node){
            return true;
        } 
        return (node.val > lowest && node.val < highest) && traversal(node.left, lowest, node.val) && traversal(node.right, node.val, highest);
          
    }
    
   return traversal(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

};