var isSameTree = function(p, q) {
    if (!p && !q) {
         return true;
     }
     if (!p || !q) {
         return false;
     }
     if(p.val !== q.val) {
       isSame =false;
     }
       isSameTree(p.left, q.left);
    isSameTree(p.right, q.right);
   
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};