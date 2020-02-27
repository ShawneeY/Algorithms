var findNode = function(tree1, node1, tree2) {
    if(tree1 === null || tree2 === null){
          return;
    }

    if(tree1 === node1){
        return tree2;
    }
    return findLvl(tree1.left, tree2.left, lvl+1) || findLvl(tree1.right,tree2.right, lvl+1);
};