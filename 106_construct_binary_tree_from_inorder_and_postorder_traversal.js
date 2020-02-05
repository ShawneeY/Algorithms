/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
//Why from right to left
var buildTree = function(inorder, postorder) {
    
   
 
    
    var build = (inlist, postlist) => {

        if (inlist.length == 0) return null;

        let last = postlist.pop();
        let root = {val: last};

        let rootIndex = inlist.indexOf(last);
        let inorderLeft = inlist.slice(0, rootIndex);

        let inroderRight = inlist.slice(rootIndex+1);

        root.right = buildTree(inroderRight, postlist);
        root.left = buildTree(inorderLeft, postlist);

        return root;
    }
    
    return build(inorder, postorder);
};