
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
    let lvl = 0;
    
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
        console.log(layerVal)
        right.push(layerVal.pop());
    }
    return right;
};