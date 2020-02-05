// recursion
var findSecondMinimumValue = function(root) {
    if(root === null) return -1;
    
    let secondminnode = Number.MAX_SAFE_INTEGER;
    
    let preorder = node => {
        if(node === null) return;
        
        if(node.val > root.val){
             secondminnode = Math.min(secondminnode, node.val);
         }
        
         preorder(node.left);
         preorder(node.right);
        
    }
    
    preorder(root);
  
    if(secondminnode === Number.MAX_SAFE_INTEGER){
        return -1
    }else {
        return secondminnode;
    }
    
};

//bfs
var findSecondMinimumValue = function(root) {
    if(root === null) return -1;
    
    let secondminnode = Number.MAX_SAFE_INTEGER;

    let que = [root];
    
    while(que.length > 0 ){
        let length = que.length;
        
        for(let i = 0; i < length; i++){
            let curr = que.shift();
            if(curr.val > root.val){
                 secondminnode = Math.min(secondminnode, curr.val);
            }
           
            
            if(curr.left && curr.right){
                que.push(curr.left);
                que.push(curr.right);
            }
        }
    }
   
    if(secondminnode === Number.MAX_SAFE_INTEGER){
        return -1
    }else {
        return secondminnode;
    }
};