
var LRUCache = function(capacity) {
    this.capacity = capacity;
    // key: key, value: value

    this.cache = new Map();
    this.order = [];
    
};


LRUCache.prototype.get = function(key) {
    var cache = this.cache;
    var value= cache.get(key);
    var order = this.order;
    if(value){
         var index = order.indexOf(key);
         order.splice(index,1);
         order.unshift(key);
        return value;
    }else {
        return -1;
    }
   
};


LRUCache.prototype.put = function(key, value) {
    var cache = this.cache;
    var capacity = this.capacity;
    var order = this.order;
    
    if(cache.get(key)){
       var index = order.indexOf(key);
       order.splice(index,1);
       order.unshift(key);
       cache.set(key, value);
       return;
    }
    
    if(cache.size === capacity){
       var evictKey = order.pop();
       cache.delete(evictKey);
    }
    order.unshift(key);
    cache.set(key, value)
};

