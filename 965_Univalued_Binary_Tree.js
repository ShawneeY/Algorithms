/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    if(root === null){
        return true;
    }
    
    const val = root.val;
    
    const traversal = node => {
        if(node === null){
            return true;
        }
        
        if(node.val !== val){
            return false;
        }
        return traversal(node.left) && traversal(node.right);
    
    }
    
    return traversal(root);
};