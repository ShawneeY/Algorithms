
var searchBST = function(root, val) {
    if(root === null) {
        return null;
    }
   
    var tree = root;
    
    while(root !== null){
         if(root.val === val) {
            return root;
        }
        if(val > root.val){
            root.next = root.right;
        }else {
            
            root.next = root.left;
        }
        root = root.next;
    }
   
    return root;
};