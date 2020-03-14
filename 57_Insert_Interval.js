/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(intervals.length === 0) {return [newInterval]};
    
    let insertIndex = 0;
    while(insertIndex < intervals.length && intervals[insertIndex][1] < newInterval[0]){
       insertIndex++;
    }
    
    const before = intervals.slice(0, insertIndex);

    while(insertIndex < intervals.length && intervals[insertIndex][0] <= newInterval[1]){
        newInterval[0] = Math.min(intervals[insertIndex][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[insertIndex][1], newInterval[1]);
        insertIndex++;
    }
    const after = intervals.slice(insertIndex);
    
    return [...before, ...[newInterval], ...after];
    
};