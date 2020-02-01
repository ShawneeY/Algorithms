
var rightSideView = function(root) {
    if(root === null){
        return [];
    }
    
    var right = [];
    
    var helper = function(root, lvl){
       if(root){
           right[lvl] = root.val;
           if(root.left){
               helper(root.left, lvl+1)
           }
           
           helper(root.right, lvl+1)
       }
      
    }
    helper(root, 0);
    return right;
};

//bfs

var rightSideView = function(root) {
    
    if(root == null){
        return [];
    }
    
    let que = [root];
    let right = [];
    while(que.length > 0){
        let length = que.length;
        let layerVal = [];
        for(let i = 0; i < length; i++){
            let curr = que.shift();
            
            if(curr){
                layerVal.push(curr.val);
            }
            if(curr.left){
                que.push(curr.left);
            }
            if(curr.right){
                que.push(curr.right);
            }
        }
        right.push(layerVal.pop());
    }
    return right;
};

// 二刷 bfs


var rightSideView = function(root) {

    if(root === null){
       
       return [];
    }
    
    let queue = [root];
    let result = [];
    
    while(queue.length > 0){
        let length = queue.length;
        let layer = []; 
        let right = null;
         
        for(let i = 0; i < length; i++){
            let curr = queue.pop();
            
            if(curr == null) continue;
            
           
            
            if(right === null){
                right = curr.val;
                result.push(right);
            }

            queue.unshift(curr.right);
            queue.unshift(curr.left);
        
        }
 
    }
   return  result;
    
};

// 二刷 recursion

var rightSideView = function(root) {
    let recursion = function(node, lvl, map){
        
        if(node === null) return; // forgot base case

        let lvlResult = node || null
  
        if(lvlResult !== null){
            map.set(lvl, lvlResult.val);
        }
        recursion(node.left, lvl+1, map);
        recursion(node.right, lvl+1, map);
    }
    
    if(root === null){
        return []
    }
    
    let results = new Map();
    let lvl = 0;
    let rights = [];
    
    recursion(root, lvl, results);
   
    results.forEach(function(value){ // this is the way to iterate a hashmap in js
        rights.push(value);
    })
    return rights;
};