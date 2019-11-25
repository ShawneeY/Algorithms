var rob = function(root) {
    if(root === null){
        return 0;
    }
    
    var helper = function(node){
        if(node == null){
            return [0,0];
        }
        
        var left = helper(node.left);
        var right = helper(node.right);
        
        var take = node.val+left[1]+right[1];
// If dont take current node, we can choose take or not take value from level down
        var noTake = Math.max(left[1], left[0]) + Math.max(right[1], right[0]);

        return [take, noTake];
        
    }
    
    var robHouseOptions = helper(root);
    
    return Math.max(robHouseOptions[0], robHouseOptions[1]);
    
};