class DoublyLinkedListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  // 保证链表的头部永远是最新的
  this.cache = {};
  this.capacity = capacity;
  this.head = new DoublyLinkedListNode();
  this.head.prev = null;
  this.tail = new DoublyLinkedListNode();
  this.tail.next = null;
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

LRUCache.prototype.addNode = function (node) {
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
};

LRUCache.prototype.removeNode = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

LRUCache.prototype.moveToHead = function (node) {
  this.removeNode(node);
  this.addNode(node);
};

LRUCache.prototype.removeTail = function () {
  const last = this.tail.prev;
  this.removeNode(last);
  return last;
};

LRUCache.prototype.cacheSize = function () {
  return Object.keys(this.cache).length;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.cache[key];
  if (!node) return -1;
  // 将查询的节点移至链表头部
  this.moveToHead(node);
  return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let node = this.cache[key];
  if (!node) {
    node = new DoublyLinkedListNode(key, value);
    this.cache[key] = node;
    this.addNode(node);
  } else {
    node.value = value;
    this.moveToHead(node);
  }
  if (this.cacheSize() > this.capacity) {
    const removed = this.removeTail();
    delete this.cache[removed.key];
  }
};
