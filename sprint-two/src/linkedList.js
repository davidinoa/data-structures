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
      this.head.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function() {
    var removedNode = this.head.value;
    this.head = this.head.next;
    return removedNode;
  };

  list.contains = function(target) {
    if (this.head.next === null) {
      return this.head.value === target;
    } else {
      return this.head.value === target ||
      this.head.next.value === target;
    }
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
 */