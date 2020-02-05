// Why from left to right?

var buildTree = function(preorder, inorder) {
    var helper = function(preorder, inorder) {
        // base case
        if(!preorder || !inorder || preorder.length === 0 || inorder.length === 0 ){
            return null;
        }
        
        var rootVal = preorder[0];
        var inorderIndex = inorder.indexOf(rootVal);
        var leftLength = inorderIndex-0;
       
        var leftPreorder = preorder.slice(1, leftLength+1);
        var leftInorder = inorder.slice(0, inorderIndex);
        var rightPreorder = preorder.slice(leftLength+1);
        var rightInorder = inorder.slice(inorderIndex+1);
 
        
        var root = {val: rootVal};
        root.left = helper(leftPreorder, leftInorder);
        root.right = helper(rightPreorder, rightInorder);
        
        return root;
    }
    
    return helper(preorder, inorder);
 };