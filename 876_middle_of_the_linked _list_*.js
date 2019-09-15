
var middleNode = function(head) {
    if(!head.val){
        return [];
    }
    if(!head.next){
        return head;
    }
    var mergeHead = {value:-1, next:null}, 
    crt = mergeHead;
    var count = 0;
       while(head){
           crt.next= head.next
           crt = crt.next;
           head=head.next
           count++;
       } 
   
   var getMiddelNode = function(count) {
       if(count%2){
           return (count-1)/2
       }else {
           return count/2;
       }
   }
   var middleNode = getMiddelNode(count);

   for(i=0; i<middleNode; i++) {
       mergeHead = mergeHead.next;
   }
    return mergeHead;
};