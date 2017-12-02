// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = {};
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.indexOf(node) !== -1;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (node === this.nodes[i]) {
      this.nodes.splice(i, 1);
    }
  }
  delete this.edges[node];
  for (var key in this.edges) {
    if (this.hasEdge(key, node)) {
      this.removeEdge(key, node);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.edges[fromNode].indexOf(toNode) !== -1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNodeEdges = this.edges[fromNode];
  for (var i = 0; i < fromNodeEdges.length; i++) {
    if (fromNodeEdges[i] === toNode) {
      fromNodeEdges.splice(i, 1);
    }
  }
  var toNodeEdges = this.edges[toNode];
  if (toNodeEdges !== undefined) {
    for (var i = 0; i < toNodeEdges.length; i++) {
      if (toNodeEdges[i] === fromNode) {
        toNodeEdges.splice(i, 1);
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 Graph.prototype.addNode: O(1)
 Graph.prototype.contains: O(n)
 Graph.prototype.removeNode: O(n)
 Graph.prototype.hasEdge: O(n)
 Graph.prototype.addEdge: O(1)
 Graph.prototype.removeEdge: O(n)
 */