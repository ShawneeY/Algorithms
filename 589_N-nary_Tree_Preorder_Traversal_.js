// Recursive
var preorder = function(root) {

    var newList = [];
    var preorder = function(root){
        if(!root){
            return;
        }  
        newList.push(root.val);
        var subList = root.children;

        if(subList && subList.length > 0) {
            for(var i=0; i < subList.length; i++){
                 preorder(subList[i]);
            }

        }
    }
    preorder(root);
    return newList;
    
};

//Iterative
var preorder = function(root) {
    if(root === null ){
        return [];
    }
    var newList = [];
    var stack = [];
    var current = root;
    while(current != null || stack.length > 0) {
         while(current){
            newList.push(current.val);
             if(current.children.length > 0) {
                 stack.push(current);
             }
            current = current.children[0];
        }
        
        current = stack.pop();
        if(current){
            var subList = current;
            subList.children.splice(0,1);
            if(subList.children.length > 0){
                stack.push(subList);
            }

            current = subList.children[0];
        }
      
    
    }
    return newList;
    
};
