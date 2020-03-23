/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(root === null){
        return 0;
    }
    let minlvl = Number.MAX_SAFE_INTEGER;
    const traversal = (node, lvl) => {
       if(node === null){
           return null;
       }
        
       let left = traversal(node.left, lvl+1);
       let right = traversal(node.right, lvl+1);
        
       if(left === null && right === null){
           minlvl = Math.min(lvl, minlvl);
       }
       return node.val;
    }
     
    traversal(root, 0);
    return  minlvl + 1;
};