

// Allan's solution
var connect = function(root) {
    if(root === null){
        return null;
    }
    
    let recursion = function(node){
        if(node === null){
            return;
        }
        
        if (node.left != null) {
            node.left.next = node.right;
            
            if (node.next != null) {
                node.right.next = node.next.left;
            }
        }
        
        recursion(node.left);
        recursion(node.right);
    }
    
    recursion(root)
    
    return root;
   
};

// Shawnee's solution
var connect = function(root) {
    if(root === null){
        return null;
    }
    let dummyNode = new Node();
    let recursion = function(node, prev){
        if(node === null){
            return;
        }
        if(prev.left === node){
            node.next = prev.right;
        } else if(prev.next !==null){ // ???
           node.next = prev.next.left;
        }else {
            node.next = null;
        }
        
         recursion(node.left, node);
         recursion(node.right, node);
    }
    
    recursion(root, dummyNode)
    
    return root;
   
};