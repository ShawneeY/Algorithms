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