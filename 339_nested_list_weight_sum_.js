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
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
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
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSum = function(nestedList) {
    let val = 0;
    
     for( let item of nestedList){
         let lvl = 1;
         let que = [item];
         while(que.length > 0){
             let length = que.length;
             for (let i = 0; i < length; i++){
                 let curr = que.shift();
 
                 if(curr.isInteger()){
                     val += curr.getInteger() * lvl;   
                 }else {
                     for(let nextItem of curr.getList()) {
                         que.push(nextItem);
                     }
                 }
             }
             lvl = lvl + 1;
         }
     }
 
 
     return val;
 
 };
var depthSum = function(nestedList) {
    let val = 0;
  
    let dfs = function(item, lvl){
        if(item.isInteger()){
            val = val + item.getInteger() * lvl;
            return; 
        }
       for(let i of item.getList()){
            dfs(i, lvl + 1)
        }
    }
    
    for(let list of nestedList){
        let lvl = 1;
        dfs(list, lvl);
    }
     return val;
 
 };