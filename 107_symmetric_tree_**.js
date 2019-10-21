var levelOrderBottom = function(root) {
    var levels = [];
    var levelTraversal = function(root, level){
      if(root === null){
          return;
      }
       if(!levels[level]) {
           levels[level] = [];
       }
      levels[level].push(root.val);
        levelTraversal(root.left, level+1);
        levelTraversal(root.right, level+1);
          
    }
    levelTraversal(root,0);
    return levels.reverse();
};