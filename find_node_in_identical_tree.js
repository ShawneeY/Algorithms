var findNode = function(tree1, node1, tree2) {
    // base case
    if(tree1 === null || tree2 === null){
          return null;
    }

    if(tree1 === node1){
        return tree2;
    }
    
    return findLvl(tree1.left, node1, tree2.left) || findLvl(tree1.right, node1, tree2.right);
};
