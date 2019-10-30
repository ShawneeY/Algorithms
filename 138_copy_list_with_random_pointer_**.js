var copyRandomList = function(head) {
    var copyHead = {val: null, next:null, random:null}
    var fakeList = copyHead;
    var random = head;
    while(random){
        var curr = random;
        curr = curr.random;
        fakeList.next = random;
        fakeList.random = curr;
        fakeList = fakeList.next;
    }
    return copyHead.next;
};