

//ac
// Deep copy means copy value not reference
// map value <-> node relationship 
// form list follow relationship in map
var copyRandomList = function (head) {
    const map = new Map();

    function copy(node) {
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



// Iteration
var copyRandomList = function (head) {
    if (head === null) {
        return null;
    }

    let map = new Map();
    //let dummyHead = new Node();
    let dummyHead = head;

    while (head !== null) {
        let copy = new Node(head.val);
        map.set(head, copy);

        head = head.next;
    }

    head = dummyHead;
    while (head !== null) {
        let copy = map.get(head);
        if (head.next != null) {
            copy.next = map.get(head.next);
        }

        copy.random = map.get(head.random);
        head = head.next;
    }

    return map.get(dummyHead);
};

