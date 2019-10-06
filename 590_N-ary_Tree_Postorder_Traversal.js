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