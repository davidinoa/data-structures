var stackMethods = {
  push: function(value) {
    if (this.size() === 0) {
      this.storage[0] = value;
    } else {
      this.storage[this.size()] = value;
    }
  },
  pop: function() {
    var lastValue = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return lastValue;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};

var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};