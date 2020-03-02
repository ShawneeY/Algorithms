/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if(intervals.length === 0){
        return 0;
    }
    
    intervals.sort((a,b) => a[0] - b[0]); // O(nlgn)
    
    let meetings = []; // meetings存储的是所有的overlapping的会议
    for(let interval of intervals) { // O(n)
        if (meetings.length == 0) {
            meetings.push(interval);
        } else {
            let earliest = meetings.shift(); // earliest ending meeting
            if (earliest[1] > interval[0]) { // overlap
                meetings.push(earliest);
                meetings.push(interval);
            } else {
                meetings.push(interval);
            }
            
            meetings.sort((a,b) => a[1] - b[1]); // O(nlgk) 按结束时间从小到大排列，第一个meeting就是最早结束的那个
        }
    }
    
    return meetings.length;
};