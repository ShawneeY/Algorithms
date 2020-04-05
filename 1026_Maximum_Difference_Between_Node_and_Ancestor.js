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
var maxAncestorDiff = function (root) {

    if (root === null) {
        return 0;
    }

    let result = 0;
    const traversal = (node, max, min) => {
        if (node === null) {
            return null;
        }

        max = Math.max(node.val, max);
        min = Math.min(node.val, min);
        result = Math.max(result, max - min)
        traversal(node.left, max, min);
        traversal(node.right, max, min);
    }

    traversal(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
    return result
};