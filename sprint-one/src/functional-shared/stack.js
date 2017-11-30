var extend = function(obj) {
  var args = Array.from(arguments).slice(1);
  for (var i = 0; i < args.length; i++) {
    for (var key in args[i]) {
      obj[key] = args[i][key];
    }
  }
  return obj;
};

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
  var someInstance = {storage: {}};
  extend(someInstance, stackMethods);
  return someInstance;
};


