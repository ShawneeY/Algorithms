var binaryTreePaths = function(root) {
	// If null return an empty array
    if (root === null) return [];
	// If no children return the nodes value itself as a string within an array
    else if (root.left === null && root.right === null) return [`${root.val}`];
    else {
		// For all child paths add the root to their head one by one.
        let left = binaryTreePaths(root.left).map(x => root.val + '->' + x);
        let right = binaryTreePaths(root.right).map(x => root.val + '->' + x);
		
		// return the array with the root value attached
        return [...left, ...right];
    }
};

///////////////////////////////////////

var binaryTreePaths = function(root) {
    var paths = [];

    var pathRecur = function(node, path) {
        if (!node) return;

        var pathToAdd = path == "" ? node.val : "->"+node.val;
        path += pathToAdd;

        if (!node.left && !node.right) {
            paths.push(path);
            return;
        } else {
            pathRecur(node.left, path);
            pathRecur(node.right, path);
        }
    }

    pathRecur(root, "");
    return paths;
};
