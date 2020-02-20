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
var sumRootToLeaf = function(root) {
    let sum = 0;
    
    
    let traversal = (node, arr) => {
        if(node === null){
            return null;
        }
        
        arr.push(node.val);
        let left = traversal(node.left, arr);
        let right = traversal(node.right, arr);
        
        if(left === null && right === null){
            sum = sum + parseInt(arr.join(""), 2);
            
        }
        arr.pop();
       
    }
     
    traversal(root, []);
    
    return sum;
    
};