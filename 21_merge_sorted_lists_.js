var mergeTwoLists = function(l1, l2) {
  var mergedHead = { val : -1, next : null },
      crt = mergedHead;
  while(l1 && l2) {
      if(l1.val > l2.val) {
          crt.next = l2;
          l2 = l2.next;
      } else {
          crt.next = l1;
          l1 = l1.next;
      }
      crt = crt.next;
  }
  crt.next = l1 || l2;
  
  return mergedHead.next;
};

// second go 
var mergeTwoLists = function(l1, l2) {
   
    
    let root = null;
    let recursion = (l1, l2, node) => {
        if(!l1 && !l2){
            return null;
        }
         if(l1 === null || l2 === null){
           return node = l1 ? l1 : l2;
         }
        
        if(l1.val >= l2.val){
            node = {val:l2.val}
            node.next =  recursion(l1, l2.next, node);
        } else {
            node = {val:l1.val}
            node.next =  recursion(l1.next, l2, node);
        }
    
        
        return node;
    }
   
   return recursion(l1, l2, root);
  
};