
var removeNthFromEnd = function(head, n) {
    // n = 2
    // 1->2->3->4->5
    //       p

    //           f  
    //   s
    // dummy->1->2->3->4->5
    // s -> n-1
    
    // s.next = s.next.next
    // s.next = null
    
    // return dummy.next
    
    var dummy = {val: -1, next: head};
    var slow = dummy;
    var fast = dummy;
    
    var count = n;
    while(count > 0) {
        fast = fast.next;
        count--;
    }
    
    while(fast.next != null) {
        slow = slow.next;
        fast = fast.next;
    }
    
    slow.next = slow.next.next;
    
    return dummy.next;
 };