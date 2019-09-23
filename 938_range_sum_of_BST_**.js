var rangeSumBST = function(root, L, R) {
    var sum = 0;
    var treeSum = function(root, L, R){
        if(root === null) {
            return;
        }

        if(root.val>=L && root.val<=R){
            sum+=root.val;
        }
        treeSum(root.right,L,R);
        treeSum(root.left,L,R);
     
    }
    treeSum(root, L, R)
    return sum;
};