
var mergeTrees = function(t1, t2) {
    var mergeTree = null;
   
   if(t1 === null && t2 ===null){
        return null;
        }else if(t1 === null) {
            return t2;
        }else if(t2 === null) {
            return t1
    }
    
       t1.val += t2.val
       t1.left = mergeTrees(t1.left, t2.left);
       t1.right= mergeTrees(t1.right, t2.right);
    
    return t1
    
};