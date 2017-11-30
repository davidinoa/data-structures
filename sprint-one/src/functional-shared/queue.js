var extend = function(obj) {
  var args = Array.from(arguments).slice(1);
  for (var i = 0; i < args.length; i++) {
    for (var key in args[i]) {
      obj[key] = args[i][key];
    }
  }
  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    if (this.countAdded === 0) {
      this.storage[this.countAdded] = value;
    } else {
      this.storage[this.countAdded] = value;
    }
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
  var someInstance = {
    storage: {},
    countAdded: 0,
    countRemoved: 0
  };
  extend(someInstance, queueMethods);
  return someInstance;
};


