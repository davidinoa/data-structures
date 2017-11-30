var Queue = function() {
  this.storage = {};
  this.countAdded = 0;
  this.countRemoved = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.countAdded] = value;
  this.countAdded++;
};
Queue.prototype.dequeue = function() {
  var firstValue = this.storage[this.countRemoved];
  delete this.storage[this.countRemoved];
  this.countRemoved++;
  return firstValue;
};
Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};


