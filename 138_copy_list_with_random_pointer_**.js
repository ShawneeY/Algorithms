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
// Deep copy means copy value not reference
// map value <-> node relationship 
// form list follow relationship in map
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

//nac
var copyRandomList = function(head) {
    if(!head){
        return null;
    }
    var dummyHead = {val:null, next:null, random:null}
    dummyHead.next = head;
    
    var map = new Map();
 
    var prev = dummyHead;
    map[prev] = prev;
    var curr = head;
     
    while(curr){
       if(!map[curr]){
           map[curr] = {val:curr.val, next: null, random:null}
       }
       
       if(!map[curr.random] && curr.random){
           map[curr.random] = {val: curr.random.val, next:null, random:null};
       }
       
       map[prev].next = map[curr];
       map[curr].random =  map[curr.random] ? map[curr.random] : null;
 
       prev = curr;
       curr = curr.next;
    }
     return map[head];
    
 };

