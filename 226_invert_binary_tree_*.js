var invertTree = function(root) {
    if (root === null || root === []) {
         return root;
    }
    var left = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(left);
    return root;
};