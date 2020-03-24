/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 
**/

var recoverTree = function(root) {
    if(root === null){
        return null;
    }
    
    const sortedArr = [];
    
    const inOrder = root => {
        if(root === null){
            return null;
        }
        
        inOrder(root.left);
        sortedArr.push(root.val);
        inOrder(root.right);
        
    }
    inOrder(root);
    sortedArr.sort((a,b) => b-a);
    
    const buildTree = root => {
        if(root === null){
            return null;
        }
        buildTree(root.left);
        root.val = sortedArr.pop();
        buildTree(root.right);
        return root;
    }
   return buildTree(root);
    
};