

var HashTable = function() {
  this._limit = 8;
  // this._tuplesCount = 0;
  // this._ratio = this._tuplesCount / this._limit;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {
  // if (this._ratio >= 0.75) {
  //   this._limit *= 2;
  // }
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (!Array.isArray(this._storage[index])) {
    this._storage[index] = [];
  }

  var bucket = this._storage[index];
  var tuple = [k, v];
  var foundTuple = false;

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      foundTuple = true;
      // this._tuplesCount--;
    }
  }
  if (!foundTuple) {
    bucket.push(tuple);
  }
  // this._tuplesCount++;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 HashTable.prototype.insert: O(1)
 HashTable.prototype.retrieve: O(1)
 HashTable.prototype.remove: O(1)
 */


