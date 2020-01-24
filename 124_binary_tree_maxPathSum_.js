var maxPathSum = function(root) {
    if(!root){
        return 0;
    }
    var max = root.val;
    function helper(node){
        if(!node){
            return 0;
        }
        var left = helper(node.left);
        var right = helper(node.right);
        
        left = left > 0 ? left : 0;
        right = right > 0 ? right:0;
        max = Math.max(max, node.val + left + right);
        
        return node.val + Math.max(left, right);
    }

    helper(root);
    return max;
};