
var getIntersectionNode = function(headA, headB) {
    // edge case two invalid lists
    // since two lists share the tail after intersection
    // get counts of two
    // make two lists point to pointer has same length
    // edge case same without the diff count
    // then check next for both

    if(headA === null|| headB === null) {
        return null
    }
    var headACount = 0
    var newHeadA = headA;
    while(newHeadA != null){
        newHeadA = newHeadA.next;
        headACount++
    }
    var headBCount = 0
    var newHeadB = headB;
    while(newHeadB != null){
        newHeadB = newHeadB.next;
        headBCount++
    }
    if(headACount > headBCount) {
        var diff = headACount - headBCount;
        for(var i =0; i<diff; i++){
            headA = headA.next;
        }
    }
    if(headBCount > headACount) {
        var diff = headBCount - headACount;
        for(var i =0; i<diff; i++){
            headB = headB.next;
        }
    }
    var intersection = null
    if(headA === headB) {
        return headA;
    }
    while(headA.next!=headB.next){
        headA = headA.next;
        headB = headB.next;
        if(headA.next === null || headB.next === null) {
            break;
        }
    }
    intersection = headA.next;

    return intersection;
};