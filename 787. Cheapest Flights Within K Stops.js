/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
  class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
      this._heap = [];
      this.comparator = comparator;
      this.left = i => (i << 1) + 1;
      this.right = i => (i + 1) << 1;
      this.parent = i => ((i + 1) >>> 1) - 1;
    }
    size() {
      return this._heap.length;
    }
    isEmpty() {
      return this.size() === 0;
    }
    peek() {
      return this._heap[0];
    }
    push(v) {
      this._heap.push(v);
      this._swimUp();
    }
    pop() {
      const popedValue = this._heap[0];
      const bottom = this.size() - 1;
      if (bottom > 0) {
        this._swap(0, bottom);
      }
      this._heap.pop();
      this._sinkDown();
      return popedValue;
    }
    greater(i, j) {
      return this.comparator(this._heap[i], this._heap[j]);
    }
    print() {
      console.log(this._heap);
    }
    _swap(i, j) {
      [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }
    _swimUp() {
      let node = this.size() - 1;
      while(node > 0 && this.greater(node, this.parent(node))) {
        this._swap(node, this.parent(node));
        node = this.parent(node);
      }
    }
    _sinkDown() {
      let node = 0;
      while(
        (this.left(node) < this.size() && this.greater(this.left(node), node)) ||
        (this.right(node) < this.size() && this.greater(this.right(node), node))
        ) {
        let maxChild = (this.right(node) < this.size() && this.greater(this.right(node), this.left(node))) ? this.right(node) : this.left(node);
        this._swap(node, maxChild);
        node = maxChild;
      }
    }
  }
  const queue = new PriorityQueue((node1, node2) => node1[0] < node2[0]);
  const neighbours = {};
  for (const flight of flights) {
    if (!neighbours[flight[0]]) {
      neighbours[flight[0]] = [];
    }
    neighbours[flight[0]].push([flight[1], flight[2]]);
  }
  queue.push([0, src, 0]);
  while (!queue.isEmpty()) {
    queue.print();
    const node = queue.pop();
    const price = node[0];
    const current = node[1];
    const step = node[2];
    if (current === dst) return price;
    if (step <= K) {
      if (current in neighbours) {
        for (const neighbour of neighbours[current]) {
          queue.push([price + neighbour[1], neighbour[0], step + 1]);
        }
      }
    }
  }
  return -1;
};

console.log(findCheapestPrice(5,
  [[0,1,5],[1,2,5],[0,3,2],[3,1,2],[1,4,1],[4,2,1]]
  ,0
  ,2
  ,2))

