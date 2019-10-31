//nac
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

//ac
var copyRandomList = function(head) {
    const map = new Map();
 
    function copy(node)   {
    if (node == null) return null;
    if (map.get(node) != null) return map.get(node);

    const n = new Node(node.val);
    map.set(node, n);

    n.next = copy(node.next);
    n.random = copy(node.random);
    return n;
    }

    return copy(head);
};
