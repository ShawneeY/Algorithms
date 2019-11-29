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

var canConvert = function(rates, queries) {
    var map = new Map();
   
    var constructMap = function(map, from, to){
       if(map.get(from)){
            var toMap = map.get(from);
            if(!toMap.get(to)){
                toMap.set(to, true);
            }
        }else{
            var toMap = new Map();
            toMap.set(to, true);
            map.set(from, toMap);
        }
    }
        
  
    for(var i = 0; i < rates.length; i++){
        var from = rates[i][0];
        var to = rates[i][1];
        constructMap(map, from, to);
        constructMap(map, to, from);
    }

    var results=[];
    
    for(var i = 0; i < queries.length; i++){
        var from = queries[i][0];
        var to = queries[i][1];
        
        if(map.get(from)){
            var toMap = map.get(from);
            if(toMap.get(to)){
                results.push(true);
            }else{
                results.push(false);
            }
        }else{
            results.push(false);
        }
    }
    return results;
}

var results = canConvert([["USD", "EUR"], ["EUR", "JPY"], ["USD", "JPY"]], [["USD", "JPY"],["JPY", "EUR"],["USD", "CAD"]])
console.log(results)