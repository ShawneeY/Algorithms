const pathSum = function(root, sum) {
    const freqMap = {0: 1}
    let result = 0
    const runner = (root, prevSum) => {
        if(root) {
            const currSum = prevSum + root.val
            const oldSum = currSum - sum
            result += freqMap[oldSum] || 0
            freqMap[currSum] = (freqMap[currSum] || 0) + 1
            runner(root.left, currSum)
            runner(root.right, currSum)
            freqMap[currSum] -= 1
        }
    }
    runner(root, 0)
    return result
    
};

///////////////////////////////

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
// [10,5,-3,3,2,null,11,0,-2,null,1,null,null,0]
var pathSum = function(root, sum) {
    // base case
    if (!root) return 0;

    var helper = function(node, sum) {
        // base case
        if (!node) return 0;
        
        var selfCount = node.val == sum ? 1 : 0;
        var left = helper(node.left, sum-node.val);
        var right = helper(node.right, sum-node.val);
        
        return selfCount+left+right;
    }
    
    var pathCount = helper(root, sum);
    
    // pathSum(root.left, sum): 以root.left为起点，返回一共有几个符合条件的path
    // 以root.left为起点，返回一共有几个符合条件的path 
    // + 以root.left.left为起点，返回一共有几个符合条件的path
    // + 以root.left.right为起点，返回一共有几个符合条件的path
    var pathCountLeft = pathSum(root.left, sum);
    var pathCountRight = pathSum(root.right, sum);
    
    // var pathCountLeft = helper(root.left, sum);
    // var pathCountRight = helper(root.right, sum);
    
    return pathCount+pathCountLeft+pathCountRight;
};
