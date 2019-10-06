// Recursive
var postorder = function(root) {
    if(root === null){
        return [];
    }
    var newList = [];
    
    function post (root) {
       if(root === null){
            return;
       }
      
       if(root.children && root.children.length > 0) {
           for(var i = 0; i< root.children.length; i++){
               post(root.children[i])
               newList.push(root.children[i].val)
           }
       }
    } 
    post(root);
    newList.push(root.val);
    return newList;
};

// Iterative

var postorder = function(root) {
    
    if(root === null) {
        return [];
    }
    
    var newList = [];
    var stack = [];
    var current = root;
    
    while(current != null || stack.length > 0){
        while(current != null){
            if(current.children){
                stack.push(current);
            }
            current = current.children[0];
        }
        current = stack.pop();
        var subList = current.children;
        if(subList && subList.length > 0) {
            newList.push(subList[0].val);
            subList.splice(0,1);
            if(subList.length > 0) {
                stack.push(subList);
            }
            current = subList[0];
        }
    }
    return newList;
};