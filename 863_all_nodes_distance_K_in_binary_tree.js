/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
    
    if(K == 0){
        return [target.val];
    }
    
    let nodes = new Map();
    nodes.set(root.val, null);

    let constuctNodes = function(root){
        if(root==null){
            return null;
        }

        let left = constuctNodes(root.left)
        let right = constuctNodes(root.right)
        
        if(left){
             nodes.set(left.val, root)
        }
        if(right){
            nodes.set(right.val, root);
        }
       
       return root; 
    }
    constuctNodes(root);
    
    let que = [target];
    let visited = new Set();
    visited.add(target.val);
    let layer = 0;
    let results=[];

    while(que.length > 0){
        let length = que.length;
        for(let i = 0; i < length; i++){
            let curr = que.shift();
            if(layer === K){
                results.push(curr.val);
            }
            
            let prev =  nodes.get(curr.val)
            let left = curr.left;
            let right = curr.right;
            
            let breath = [prev, left, right];
            
            for(let b of breath){
                if (b == null) continue;
                if(visited.has(b.val)) continue;
                que.push(b);
                visited.add(b.val);
            }
        }
        layer = layer + 1;
    }
    
    return results;
};