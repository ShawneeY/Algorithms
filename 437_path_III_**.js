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