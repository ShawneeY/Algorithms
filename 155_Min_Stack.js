/**
 * initialize your data structure here.
 */
var MinStack = function() {
     this.list = [];
     this.minVal = [Number.MAX_SAFE_INTEGER];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.list.push(x); 
    let currMin = this.minVal[this.minVal.length - 1];
    currMin = Math.min(currMin, x);
    this.minVal.push(currMin);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.list.length > 0){
        this.list.pop();
        this.minVal.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
   let length = this.list.length;
   
    return this.list[length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minVal[this.minVal.length - 1]
    
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */