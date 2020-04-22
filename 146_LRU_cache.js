
var LRUCache = function (capacity) {
   this.capacity = capacity;
   // key: key, value: value

   this.cache = new Map();
   this.order = [];

};


LRUCache.prototype.get = function (key) {
   var cache = this.cache;
   var value = cache.get(key);
   var order = this.order;
   if (value) {
      var index = order.indexOf(key);
      order.splice(index, 1);
      order.unshift(key);
      return value;
   } else {
      return -1;
   }

};


LRUCache.prototype.put = function (key, value) {
   var cache = this.cache;
   var capacity = this.capacity;
   var order = this.order;

   if (cache.get(key)) {
      var index = order.indexOf(key);
      order.splice(index, 1);
      order.unshift(key);
      cache.set(key, value);
      return;
   }

   if (cache.size === capacity) {
      var evictKey = order.pop();
      cache.delete(evictKey);
   }
   order.unshift(key);
   cache.set(key, value)
};

// O(1)




function removeNode(node) { // O(3) -> O(1)
   var prev = node.prev;
   node.prev.next = node.next;
   node.next.prev = prev;
}

function insertAfter(node, newNode) { // O(5) -> O(1)

   var next = node.next;
   node.next = newNode;
   newNode.prev = node;
   newNode.next = next;
   next.prev = newNode;
}

function removeBefore(tail) { // O(1)

   var node = tail.prev.prev;
   var removed = tail.prev;
   node.next = tail;
   tail.prev = node;
   return removed;
}

var LRUCache = function (capacity) {
   this.capacity = capacity;

   this.cache = new Map(); // key -> double linked list node

   // use a DoubleLinkedList to maintain order
   this.head = { val: -1, prev: null, next: null };
   this.tail = { val: -1, prev: null, next: null };


   this.head.next = this.tail;
   this.tail.prev = this.head;

};

LRUCache.prototype.get = function (key) {
   var cache = this.cache;
   var node = cache.get(key);
   var head = this.head;

   if (node) {
      removeNode(node); // O(1)
      insertAfter(head, node); // O(1)
      return cache.get(node.key).val;
   } else {
      return -1;
   }
};


LRUCache.prototype.put = function (key, value) {
   var cache = this.cache;
   var capacity = this.capacity;
   var order = this.order;
   var head = this.head;
   var tail = this.tail;
   if (cache.get(key)) { // cache.get(key);
      var node = cache.get(key);
      node.val = value;
      removeNode(node); // O(1)
      insertAfter(head, node) // O(1)

      cache.set(key, node);
      return;
   }

   if (cache.size === capacity) {
      var removed = removeBefore(tail); // O(1);
      if (removed) {
         cache.delete(removed.key);
      }
   }

   var newNode = { key: key, val: value, prev: null, next: null };
   insertAfter(head, newNode);

   cache.set(key, newNode);

};