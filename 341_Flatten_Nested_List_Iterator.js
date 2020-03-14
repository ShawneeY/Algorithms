//Option 1

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    this.nestedList = nestedList;
    this.list = [];
    const flatten = el => {
        if(el.isInteger()){
            this.list.push(el.getInteger())
        }
        
        const list = el.getList();
        for(let item of list){
            flatten(item);
        }
    }
    
    for(let item of nestedList){
        flatten(item);
    }
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return this.list.length > 0;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
   return this.list.shift();
};


//Option2
/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
var NestedIterator = function(nestedList) {
    this.nestedList = nestedList;
    //this.list = [];
    //this.flatten(this.nestedList.shift())

};

// NestedIterator.prototype.flatten = function(el) {
//     if (el === undefined) return;
    
//     if(el.isInteger()){
//        this.list.push(el.getInteger())
//         return;
//     }
    
//     let list = el.getList();
//     for(let item of list){
//        this.flatten(item);
//     }

// }

/**
 * @this NestedIterator
 * @returns {boolean}
 */
// [[1,[3,4]],2,[1,1]]

// [1,[3,4]]
// [2, [1,1]]

// [1,[3,4],[2],[1,1]]

NestedIterator.prototype.hasNext = function() {
    while(this.nestedList.length > 0) {
        const element = this.nestedList.shift();
        if (element.isInteger()) {
            this.nestedList.unshift(element.getInteger());
            return true;
        } else {
            const list = element.getList();
            for(let i = list.length-1; i >= 0; i--) {
                this.nestedList.unshift(list[i]);
            }
        }
    }
    
    return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return this.nestedList.shift();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

// Iterative 
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    // have the array flattened
    
    this.list = [];
    const flatten = nestedList => {
        while(nestedList.length > 0){
            let curr = nestedList.shift();
            if(curr.isInteger()){
                this.list.push(curr.getInteger())
            }else {
                let list = curr.getList();
                nestedList = [...list, ...nestedList];
            }
        }
    }
   flatten(nestedList);
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return this.list.length > 0;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return this.list.shift();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/