// https://aonecode.com/facebook-interview-questions-currency-exchange

/*

/*

Given a list of currency exchange table, determine if currency A can be converted to currency B

example:

Exchange table:
[["USD", "EUR"], ["EUR", "JPY"], ["USD", "JPY"]]

Queries:
[["USD", "JPY"],["JPY", "EUR"],["USD", "CAD"]]

Results:
[true, true, false]

https://leetcode.com/playground/Wu4jEzGQ
*/


var constructGraph = function(graph, from, to){
    if(graph.get(from)){
          var currency = graph.get(from);
          currency.add(to);
      }else {
          var toSet = new Set();
          toSet.add(to);
          graph.set(from, toSet);
          
      }
}



var canConvert = function(rates, a, b) {
  // adjacency list
  var graph = new Map()
  
  
  for(var i = 0; i < rates.length; i++ ){
      var from = rates[i][0];
      var to = rates[i][1];
      constructGraph(graph, from, to);
      constructGraph(graph, to, from);  
  }
  
  let queue = [a];
  let visited = new Set();
  while(queue.length){
      const length = queue.length;
      for(let i = 0; i < length; i++){
          const curr = queue.shift();
          if(visited.has(curr)) continue; 
          
          if(curr == b) return true;
          
          visited.add(curr);
          
          const neighbours = graph.get(curr);
          
          for(let neighbour of neighbours){
              queue.push(neighbour);
          }
      }

  }
  return false; 
}
  
var rates = [["USD", "EUR"], ["EUR", "JPY"], ["USD", "JPY"]];
var a = "USD";
var b = "CAD";

var result = canConvert(rates, a, b);
console.log(result);

// Better version
// https://aonecode.com/facebook-interview-questions-currency-exchange

/*

/*

Given a list of currency exchange table, determine if currency A can be converted to currency B

example:

Exchange table:
[["USD", "EUR"], ["EUR", "JPY"], ["USD", "JPY"]]

Queries:
[["USD", "JPY"],["JPY", "EUR"],["USD", "CAD"]]

Results:
[true, true, false]

*/

var constructGraph = function(graph, from, to){
    if(graph.get(from)){
          var currency = graph.get(from);
          currency.add(to);
      }else {
          var toSet = new Set();
          toSet.add(to);
          graph.set(from, toSet);
          
      }
}



var canConvert = function(rates, a, b) {
  // adjacency list
  var graph = new Map()
  
  
  for(var i = 0; i < rates.length; i++ ){
      var from = rates[i][0];
      var to = rates[i][1];
      constructGraph(graph, from, to);
      constructGraph(graph, to, from);  
  }
  
  let queue = [a];
  let visited = new Set();
 visited.add(a);
  while(queue.length){
      const length = queue.length;
      for(let i = 0; i < length; i++){
          const curr = queue.shift();
        
          if(curr == b) return true;
          
          const neighbours = graph.get(curr);
          
          for(let neighbour of neighbours){
              if(visited.has(neighbour)) continue;
              queue.push(neighbour);
              visited.add(neighbour);
          }
      }

  }
  return false; 
}
  
var rates = [["USD", "EUR"], ["EUR", "JPY"], ["USD", "JPY"]];
var a = "USD";
var b = "CAD";

var result = canConvert(rates, a, b);
console.log(result);