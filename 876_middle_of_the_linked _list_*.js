
var middleNode = function(head) {
    if(!head.val){
        return [];
    }
    if(!head.next){
        return head;
    }
    var count = 0;
    var current = head;
    
    while(current){
        current = current.next;
        count++;
    } 
   
   var middleNodeIndex = count%2 != 0 ? (count-1)/2 : count/2;

   for(i=0; i<middleNodeIndex; i++) {
       head = head.next;
   }
   return head;
};