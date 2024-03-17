/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const result = [];

    for (let i = 0; i < intervals.length; i++) {
        // If the end of newInterval is less than the start of current interval
        // Add newInterval and rest of intervals
        if (newInterval[1] < intervals[i][0]) {
            result.push(newInterval);
            return result.concat(intervals.slice(i));
        } 
        // If the start of newInterval is greater than the end of current interval
        // Add current interval as it is
        else if (newInterval[0] > intervals[i][1]) {
            result.push(intervals[i]);
        } 
        // If there's an overlap between newInterval and current interval
        // Update newInterval to cover both intervals
        else {
            newInterval = [
                Math.min(newInterval[0], intervals[i][0]),
                Math.max(newInterval[1], intervals[i][1])
            ];
        }
    }

    // Add the final merged interval
    result.push(newInterval);
    return result;
};
