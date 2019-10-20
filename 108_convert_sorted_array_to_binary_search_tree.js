
var sortedArrayToBST = function(nums) {
    if(!nums){
        return null;
    }
    if(nums.length===1) {
        return {val:nums[0], left:null, right:null}
    }
    
    
    var count = nums.length;
    var rootIndex = (count-1)/2;
    
     var newTree = {val:nums[rootIndex], left: null, right:null}
    
    newTree.left = sortedArrayToBST(nums.slice[0, rootIndex])
    newTree.right = sortedArrayToBST(nums.slice[rootIndex+1])
    return newTree
};