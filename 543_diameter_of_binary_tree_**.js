var diameterOfBinaryTree = function(root) {
    var longestDiameter = 0;
    
    var maxDiameter = function(node) {
        // base case
        if (!node) return 0;
        
        var leftPathMax = maxDiameter(node.left);
        var rightPathMax = maxDiameter(node.right);
        
        var currentNodeDiameter = leftPathMax+rightPathMax;
        longestDiameter = Math.max(longestDiameter, currentNodeDiameter);
        
        return Math.max(leftPathMax, rightPathMax)+1;
    }
    
    maxDiameter(root);
    return longestDiameter;
 };