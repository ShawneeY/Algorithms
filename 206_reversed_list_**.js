
var reverseList = function(head) {
    var current = head;
    var prev = {value: null, next: head};
  
    while(current!=null) {
        var next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
      return head;
  };