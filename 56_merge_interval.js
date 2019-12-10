var merge = function(intervals) {
     
    if(intervals.length === 0){
        return [];
    }
    
    function isOverlapping(a, b){
        return Math.max(b[0], a[0]) < Math.min(b[1], a[1]);
    }
    intervals.sort(function(a,b){return a[0] - b[0]});
    var results=[intervals[0]];
    for(var i=0; i<intervals.length; i++){
        var a = intervals[i];
        var b = results[results.length -1];
        if(a[0] <= b[1]){ //overlap
            results[results.length -1] = [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
        }else {
            results.push(a);
        }
    }
    return results;
    
};

// Second go

var merge = function(intervals) {
    if(intervals.length === 0){
        return [];
    }
    let sorted = intervals.sort(function(a,b){return a[0] - b[0]});
    
    let mergedList = [sorted[0]];
    
    for(let i = 0; i < sorted.length; i++){
        let length = mergedList.length;
        
        let mergedItem = mergedList[length - 1];
        
        let curr = sorted[i];

        if ((mergedItem[1] >= curr[0] && mergedItem[1] <= curr[1]) || mergedItem[1] > curr[1]){
            mergedList.pop();
            mergedList.push([Math.min(curr[0], mergedItem[0]), Math.max(curr[1], mergedItem[1])]);
        }else {
            mergedList.push(curr);
        }
    }
    return mergedList;
};