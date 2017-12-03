var extend = function(obj) {
  var args = Array.from(arguments).slice(1);
  for (var i = 0; i < args.length; i++) {
    for (var key in args[i]) {
      obj[key] = args[i][key];
    }
  }
  return obj;
};

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.removeChild = function(index) {
  // var findTarget = function(tree, target) {
  //   if (tree.value === target) {
  //     tree
  //   } else {
  //     for (var i = 0; i < tree.children.length; i++) {
  //       findTarget(tree.children[i], target);
  //     }
  //   }
  // };
  this.children.splice(index, 1);
};

treeMethods.contains = function(target) {
  var isContained = false;

  var findTarget = function(tree, target) {
    if (tree.value === target) {
      isContained = true;
    } else {
      for (var i = 0; i < tree.children.length; i++) {
        findTarget(tree.children[i], target);
      }
    }
  };

  findTarget(this, target);
  return isContained;
};



/*
 * Complexity: What is the time complexity of the above functions?
treeMethods.addChild: O(1)
treeMethods.contains: O(c^n)
 */
