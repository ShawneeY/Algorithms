var reverseList = function(head) {
    var current = head;
    var prev = null;
  
    while(current!=null) {
        var next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
  };
//https://www.geeksforgeeks.org/reverse-a-linked-list/