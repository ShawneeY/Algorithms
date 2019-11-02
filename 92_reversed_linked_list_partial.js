var reverseBetween = function(head, m, n) {
    
    if(!head){
        return null;
    }
    if(m === n){
        return head
    }
    var position = 1
    var newList = head;
    var subList = null;
    var afterN = null;

    while(position < n+1){
        if(position === m) {
            subList = newList;
        }
        if(position === n){
            afterN = newList.next;
            newList.next = null
        }
        position++;
       
        newList = newList.next;
    }
    var prev = null;

    while(subList){
        var next = subList.next;
        subList.next = prev;
        prev = subList;
        subList = next;
    }
    position = 1;
    var result = head;
    while(result){
        if(m==1 && position===1){
            head = prev;
            result = head;
        } else if (position === m-1){
            result.next = prev;
        }

        if(position === n){
            result.next = afterN
        }
        result = result.next;

        position++;
    }

    return head;
   
};