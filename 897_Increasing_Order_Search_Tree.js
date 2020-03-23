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
var increasingBST = function(root) {
    if(root === null){
        return null;
    }
    
    const nodes = [];
    
    const inOrder = node => {
        if(node === null){
            return null;
        }
        
        inOrder(node.left);
        nodes.push(node.val);
        inOrder(node.right);
    }
    
    inOrder(root);
    const tree = new TreeNode();
    const buildTree = tree =>{
        if(nodes.length === 0){
            return null;
        }
        
        let val = nodes.shift();
        
        tree = new TreeNode(val);
        
        tree.right = buildTree(tree);
        
        return tree;
        
    }
    
    return buildTree(tree);
};