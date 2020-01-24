var isSubtree = function(s, t) {
   
    if(!s && !t){
         return true;
        }
    if(!s || !t){
         return false;
    }
    var isEqual = function(s,t){
         if(!s && !t){
             return true;
            }
        if(!s || !t){
             return false;
        }
        if(s.val !== t.val) return false;
        
        return isEqual(s.left, t.left) && isEqual(s.right, t.right);
    }
    
    return isEqual(s,t) || isSubtree(s.left, t) || isSubtree(s.right, t);
 };
