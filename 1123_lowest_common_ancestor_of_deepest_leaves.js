/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {

    let result;
    let deepestlvl = 0;
    
    
    
    let postorder = (root, lvl) => {
        deepestlvl = Math.max(deepestlvl, lvl);
        if(root === null) return lvl;

        let left = postorder(root.left, lvl+1);
        let right = postorder(root.right, lvl+1);
        
      
       if(left === deepestlvl && right === deepestlvl) {
           result = root;
       }
       
        return Math.max(left, right);
        
    }
    postorder(root, 0);

    return  result;
};