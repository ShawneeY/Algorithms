var constructMaximumBinaryTree = function(nums) {
    if(nums.length === 0){
        return null;
    }
    var maxVal = Math.max(...nums);
    var maxIndex = nums.indexOf(maxVal);
    
    var left = nums.slice(0, maxIndex);
    var right = nums.slice(maxIndex+1);
    
    var node = {val: maxVal, left: null, right:null};
    
    node.left = constructMaximumBinaryTree(left);
    node.right = constructMaximumBinaryTree(right);
    
    return node;
};