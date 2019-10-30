var addTwoNumbers = function(l1, l2) {
    var dummyNode = {val: null, next: null};
    var newList = dummyNode;
    function helper(l1, l2, carry){
          if(!l1 && !l2 && !carry) {
                return;
           }
           
           var sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
           var nodeVal = sum % 10;
           var newNode = {val: nodeVal, next:null }
           
           dummyNode.next=newNode;
           dummyNode = dummyNode.next;
           var carry =  parseInt(sum/10);
           helper(l1 ? l1.next : null, l2 ? l2.next : null, carry);
   }
   helper(l1, l2, 0);
   return newList.next;
};