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