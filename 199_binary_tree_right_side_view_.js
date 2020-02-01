
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

// 二刷


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