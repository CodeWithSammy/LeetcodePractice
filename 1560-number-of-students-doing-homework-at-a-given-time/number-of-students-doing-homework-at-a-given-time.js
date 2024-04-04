/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    let count = 0; // Initialize counter for students doing homework at queryTime
    
    // Iterate through each student's homework interval
    for (let i = 0; i < startTime.length; i++) {
        // Check if queryTime falls within the student's homework interval
        if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
            count++; // Increment counter if queryTime lies within the interval
        }
    }
    
    return count; // Return the count of students doing homework at queryTime
};
