/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.arr = new Array();
    this.map = new Map();
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val)){
        return false;
    }else {
        this.map.set(val, this.arr.length)
        this.arr.push(val);
        return true;
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.map.has(val)){
        return false;
    }
    const end = this.arr[this.arr.length - 1];
    const endIndex = this.map.get(end);
    const valueIndex = this.map.get(val);
    this.arr[this.arr.length - 1] = val;
    this.arr[valueIndex] = end;
    this.arr.pop();
    this.map.set(end, valueIndex);
    this.map.delete(val);
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
   let randomIndex = Math.floor(Math.random() * this.arr.length);
   return this.arr[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */