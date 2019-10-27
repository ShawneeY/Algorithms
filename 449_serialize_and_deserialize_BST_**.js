
var serialize = function(root) {
    if(!root){
        return "";
    }
    function traversal(root, arr){
        if(!root){
            return arr.push("N");
        }
        arr.push(root.val);
        traversal(root.left, arr);
        traversal(root.right, arr);
        
        return arr;
    }
    var array = traversal(root,[]);
    return array.join(",");
};


var deserialize = function(data) {
    if(!data){
        return null;
    }
    var dataArr = data.split(",");
    function backToTree (dataArr){
        if(dataArr[0] === "N"){
            dataArr.shift()
            return null;
        }else {
            var val = dataArr.shift();
            var newTree = {val:parseInt(val,0), left: null, right:null}

            newTree.left = backToTree(dataArr);
            newTree.right = backToTree(dataArr);

            return newTree;
        }
       
    }
   
    return  backToTree(dataArr);
};

