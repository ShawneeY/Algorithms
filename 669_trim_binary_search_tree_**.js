// My solution --nac
var trimBST = function(root, L, R) {
    if(!root || !L || !R){
        return null;
    }
    
    if(root.val < L){
        root=root.right;
    }
    else if(root.val > R){
        root=root.left;
    }
    
    trimBST(root.left,L,R);
        
    trimBST(root.right,L,R);
    return root;
};

// Correct solution --ac
var trimBST = function(root, L, R) {
    if (root == null) {
        return null;
    }
    
    root.left = trimBST(root.left, L, R);    
    root.right = trimBST(root.right, L, R);
    
    if (root.val < L) {
        root = root.right;
    } else if (root.val > R) {
        root = root.left;
    }
        
    return root;
};