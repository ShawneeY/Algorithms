/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if(intervals.length === 0){
        return 0;
    }
    
    intervals.sort((a,b) => a[0] - b[0]); // O(nlgn)
    
    // compare if current is after earliest finish in meetings
    //if after, means meeting happnes after the earliest finished one
    //before ealiest one is finished, overlapped ones take one room each
    // meetings is a queue, overlap, keep pushing, not overlap, shift put the first one
    

    let meetings = [intervals[0]];
    
    for(let i = 1; i < intervals.length; i++){
        let earlyEnd = meetings.shift();

        let curr = intervals[i];
        if(curr[0] < earlyEnd[1]){
            meetings.push(earlyEnd);
            meetings.push(curr);
        }else {
            meetings.push(curr);
        }
        
        meetings.sort((a,b) => a[1] - b[1]);
    }

   return meetings.length;
};