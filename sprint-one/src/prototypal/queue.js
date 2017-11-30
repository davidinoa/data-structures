var queueMethods = {
  enqueue: function(value) {
    this.storage[this.countAdded] = value;
    this.countAdded++;
  },
  dequeue: function() {
    var firstValue = this.storage[this.countRemoved];
    delete this.storage[this.countRemoved];
    this.countRemoved++;
    return firstValue;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};

var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.countAdded = 0;
  someInstance.countRemoved = 0;
  return someInstance;
};

