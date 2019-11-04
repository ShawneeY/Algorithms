var canAttendMeetings = function(intervals) {
    
    if(intervals.length === 0){
        return true;
    }
    
    function isOverlapping(a, b){
        return Math.max(b[0], a[0]) < Math.min(b[1], a[1]);
    }
    
    var timeIntervalRange = [];
    
    for(var i=0; i<intervals.length; i++){
   
        for(var j=0; j<intervals.length; j++){
          if(j === i) continue;

          if(isOverlapping(intervals[i], intervals[j])) return false;
            
        }
    }
    return true;
    
};

// better one
var canAttendMeetings = function(intervals) {
    
    if(intervals.length === 0){
        return true;
    }
    
    function isOverlapping(a, b){
        return Math.max(b[0], a[0]) < Math.min(b[1], a[1]);
    }
    
    intervals.sort(function(a,b){return a[0] - b[0]});
    
    for(var i=0; i<intervals.length-1; i++){
        var sl = intervals[i+1][0];
        var el = intervals[i][1]
        
        if(sl < el){
            return false;
        }
    }
    return true;
    
};
//O(n) + O(nlgn)