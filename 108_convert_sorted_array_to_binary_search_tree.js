var sortedArrayToBST = function(nums) {
    if(!nums || nums.length === 0){
        return null;
    }
  
    var count = nums.length;
    var rootIndex = Math.floor(count/2);
    
    var newTree = {val:nums[rootIndex], left: null, right:null}
    
    newTree.left = sortedArrayToBST(nums.slice(0, rootIndex))
    newTree.right = sortedArrayToBST(nums.slice(rootIndex+1))
    
    return newTree
};