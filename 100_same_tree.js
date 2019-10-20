var isSameTree = function(p, q) {
    if(!p || !q ){
        return p === q;
    }
    isSameTree(p.left, q.left);
    isSameTree(p.right, q.right);
    
   return p === q;
};