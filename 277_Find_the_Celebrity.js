/**
 * Definition for knows()
 * 
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
var solution = function(knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    
    this.knows = knows;
    var self = this;
    return function(n) {

       for(let i = 0; i < n; i++){
           let isCelebrity = true;
           for(let j = 0; j < n; j++){
              if(i === j) continue;
              if(knows(j,i) === false  || knows(i,j) === true){
                  isCelebrity = false;
                  break;
              } 
           }
           if(isCelebrity === false) continue;
           
           if(isCelebrity === true){
               return i;
           }
       }
        
        return -1;
        
    };
};