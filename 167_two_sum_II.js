var twoSum = function(numbers, target) {
    // base case 
    if(!numbers || numbers.length === 1) {
        return [];
    }
    
    var start = 0;
    var end = numbers.length-1;
    
    while(start < end){
        var s = numbers[start];
        var e = numbers[end];
        if(s+e === target){
            return [start+1, end+1];
        } 
        if(s+e < target){
            start = start+1;
        }
        if(s+e > target){
            end = end-1
        }
    }
    return [];
     
};