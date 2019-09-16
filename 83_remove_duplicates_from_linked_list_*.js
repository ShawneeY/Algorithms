var deleteDuplicates = function(head) {
    // empty linked list check is head === null not head.val === null
    if(head === null || head.next ===null){
        return head;
    }
    var headRef = head;
    
    // head != null && head.next != null means breaks when gets to 2nd last
    while(head!=null && head.next!=null) {
        if(head.val === head.next.val){
            if(head.next.next === null){
                head.next = null
            }else {
                head.next = head.next.next;
            }   
        }else {
           head = head.next 
        }
    }
    return headRef;
};
