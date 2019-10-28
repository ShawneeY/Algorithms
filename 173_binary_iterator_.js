// Recursive
var BSTIterator = function(root) {
    this.treeValArr=[];
    this.isLeftSubtree=true;
    var self = this;
    this.inorder = function(node){
      if(!node){
         return; 
      }
      inorder(node.left);
      self.treeValArr.push(node.val);
      inorder(node.right);
  }
   this.inorder(root.left);
};

BSTIterator.prototype.next = function() {
    return this.treeValArr.shift();
};

BSTIterator.prototype.hasNext = function() {
  return this.treeValArr.length > 0;
};

// Iterative && space complexity friendly


var BSTIterator = function(root) {
    this.root = root;
    this.treeValArr=[];
    var self = this;
    while(root!==null){
      self.treeValArr.push(root);
      root = root.left;
    }
    this.inorder = function(node){
      if(!node){
         return; 
      }
      self.treeValArr.push(node);
      self.inorder(node.left);
  }

};

BSTIterator.prototype.next = function() {
  var node = this.treeValArr.pop();
  this.inorder(node.right);
  return node.val;
};


BSTIterator.prototype.hasNext = function() {
  return this.treeValArr.length > 0;
};


