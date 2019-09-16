var deleteNode = function(node) {
    if(!node.next){
        node.val = null
    }
   node.val = node.next.val;
   node.next = node.next.next
};