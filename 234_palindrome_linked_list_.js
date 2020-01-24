
var isPalindrome = function(head) {
    if(head === null || head.next ===null){
        return true;
    }
    var newHead = head;
    var listCount  = 0;
    while(newHead) {
        newHead = newHead.next;
        listCount++;
    }
    var newList = {value:-1, next:null};
    var firstHalf = newList;
    var secondHalf = head;
    var halfPoint = 0;
    
    if(listCount%2 !== 0) {
        halfPoint = (listCount -1)/2;
    }else {
        halfPoint = listCount/2;
    }

    for(var i=0; i<halfPoint; i++){
        newList.next = secondHalf;
        secondHalf = secondHalf.next;
        newList = newList.next;
    }
    
    newList.next = null;
    if(listCount%2 !== 0){
        secondHalf = secondHalf.next;
    }
    firstHalf = firstHalf.next;
    var reversedHalf=null;
    var next;
    while(secondHalf!=null){
        next = secondHalf.next;
        secondHalf.next = reversedHalf;
        reversedHalf = secondHalf;
        secondHalf = next;
    }
    while(firstHalf!== null && reversedHalf!==null){

       if(firstHalf.val !== reversedHalf.val){
           return false;
       }
        firstHalf = firstHalf.next;
        reversedHalf = reversedHalf.next;
    }
   return (firstHalf == null && reversedHalf == null);
    
};