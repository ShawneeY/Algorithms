/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    //edge case
    
    const result = [];
    
    const traversal = (root, lvl) => {
        if(root === null){
            return null;
        }
        
        (result[lvl] || (result[lvl] = [])).push(root.val);
        traversal(root.left,lvl+1);
        traversal(root.right,lvl+1);
    }
    traversal(root,0);
    return result;
};