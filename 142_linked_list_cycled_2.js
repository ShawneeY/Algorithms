//Slow O(N^2)to be refactored
var detectCycle = function(head) {
    if(!head){
        return null
    }
    var curr = head;
    var nodes=[]
    var pos = 0
    var cycleStart = null;
    while(curr){
        if(nodes.indexOf(curr) != -1){
            return curr;
        }
        nodes.push(curr);
        
        curr = curr.next;
    }

   
    return null;
};