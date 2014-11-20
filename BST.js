var Node = function(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}

Node.prototype = {
  show: function() {
    return this.data;
  }
}

var BinarySearchTree = function () {
  this.root = null;
}

BinarySearchTree.prototype = {
  insert: function (data) {
    var newNode = new Node(data, null, null);

    if (this.root == null) {
      this.root = newNode;
    } else {
      var current = this.root;
      var parent;
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left; 
          if (current == null) {
            parent.left = newNode;
            break; 
          }
        } else {
          current = current.right;
          if (current == null) {
            parent.right = newNode;
            break;
          }
        }
      }
    }
  },
  inorder: function(){
  
  },
  preorder: function(){
console.log('venus1');
  },

  postorder: function(){
console.log('venus1');
  },



};


var bst = new BinarySearchTree();

bst.insert(4);
bst.insert(5);
bst.insert(6);
bst.insert(1);
bst.insert(2);
bst.insert(3);

bst.show();

