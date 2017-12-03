var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.prototype);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value && !this.left) {
    this.left = BinarySearchTree(value);
  } else if (value < this.value && this.left) {
    this.left.insert(value);
  } else if (value > this.value && !this.right) {
    this.right = BinarySearchTree(value);
  } else if (value > this.value && this.right) {
    this.right.insert(value);
  }
};

BinarySearchTree.prototype.contains = function(value) {
  var wasFound = false;
  var containsValue = function(value, tree) {
    if (tree.value === value) {
      wasFound = true;
    } else if (value < tree.value && tree.left) {
      containsValue(value, tree.left);
    } else if (value > tree.value && tree.right) {
      containsValue(value, tree.right);
    }
  };
  containsValue(value, this);
  return wasFound;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 BinarySearchTree.prototype.insert: O(log(n))
 BinarySearchTree.prototype.contains: O(log(n))
 BinarySearchTree.prototype.depthFirstLog: O(n)
 */