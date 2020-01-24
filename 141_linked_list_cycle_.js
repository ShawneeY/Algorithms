//solution 1 : two pointers
var hasCycle = function(head) {
    if(head === null || head.next === null) {
        return false;
    }
    var slow = head;
    var fast = head.next;
     while(slow != fast) {
         if(fast == null || fast.next == null) {
             return false
         }
         slow = slow.next;
         fast = fast.next.next;
     }
     return true;
 };

// solution 2 : hashset
var hasCycle = function(head) {
    if(head === null || head.next === null) {
        return false;
    }
    var nodeSeen = new HashSet();
    while(head != null) {
        if(nodeSeen.contains(head))
        {
            return true;
        }else {
            nodeSeen.add(head)
            head = head.next;
        }
    }
     return false;
 };