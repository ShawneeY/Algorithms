/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeTwoSortedList = function(l1, l2){
    
    let root = null;
    let recursion = (l1, l2, node) => {
        if(!l1 && !l2){
            return null;
        }
         if(l1 === null || l2 === null){
           return node = l1 ? l1 : l2;
         }
        
        if(l1.val >= l2.val){
            node = {val:l2.val}
            node.next =  recursion(l1, l2.next, node);
        } else {
            node = {val:l1.val}
            node.next =  recursion(l1.next, l2, node);
        }
    
        
        return node;
    }
   
   return recursion(l1, l2, root);
    
}
var mergeKLists = function(lists) {
    
    if(lists.length === 0) return null;
    
    let root = lists.pop();

    while(lists.length > 0){
        let curr = lists.pop();
        root = mergeTwoSortedList(root, curr);
    }
    
    return root;
};