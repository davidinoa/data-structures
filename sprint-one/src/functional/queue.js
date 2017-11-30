var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var countAdded = 0;
  var countRemoved = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (countAdded === 0) {
      storage[countAdded] = value;
    } else {
      storage[countAdded] = value;
    }
    countAdded++;
  };

  someInstance.dequeue = function() {
    var firstValue = storage[countRemoved];
    delete storage[countRemoved];
    countRemoved++;
    return firstValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

