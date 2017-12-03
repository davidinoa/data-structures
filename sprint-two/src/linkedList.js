var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function() {
    var removedNode = this.head.value;
    this.head = this.head.next;
    return removedNode;
  };

  list.contains = function(target) {
    var foundTarget = false;

    var findTarget = function(target, node) {
      if (node.value === target) {
        foundTarget = true;
      } else if (node.next) {
        findTarget(target, node.next);
      }
    };
    findTarget(target, this.head);
    return foundTarget;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * list.addTail: O(1)
 * list.removeHead: O(1)
 * list.contains: O(n)
 */








