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
var mergeKLists = function(lists) {
    const sort = lists => {

        return lists.sort((a,b) => { return (a === null ? 0 : a.val) -  (b === null ? 0 : b.val)})
        
    }
    
    let dummyHead = {val:null, next:null}
    let current = dummyHead;
    
    while(lists.length > 0){
        sort(lists);
        
        let min = lists.shift();
        
        if(min !== null){
            current.next = min;
            current = current.next;
            
            min = min.next;
            if(min !== null){
                lists.unshift(min);
            }
        }
    }
    
    return dummyHead.next;
    
};