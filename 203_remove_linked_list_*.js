
var removeElements = function(head, val) {
    var prev = null;
    var cur = head;
    while(cur !== null) {
        if(cur.val === val) {
            if(cur === head) {
                 head = head.next;
            }else {
                prev.next = cur.next;
            }
            
        }else {
            prev = cur;
        }
        cur = cur.next
    }   
     return head;
 };