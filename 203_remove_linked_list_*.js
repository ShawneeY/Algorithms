// 
var removeElements = function(head, val) {
    var prev = null;
    var cur = head;
    while(cur !== null) {
        if(cur.val === val) {
            // if the first element is to be removed, move head to the next position
            if(cur === head) {
                 head = head.next;
            }else {
            // get the previous element to point to the next element
                prev.next = cur.next;
            }
            
        }else {
            // current value does not equal to the given value, the move previous element forward to continue
            prev = cur;
        }
        // move current forward
        cur = cur.next
    }   
     return head;
 };