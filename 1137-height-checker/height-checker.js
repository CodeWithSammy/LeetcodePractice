/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    // Create an array representing the expected order of heights
    const expected = [...heights].sort((a, b) => a - b);
    let count = 0; // Initialize counter for mismatched heights
    
    // Iterate through each student's height
    for (let i = 0; i < heights.length; i++) {
        // Compare current height with expected height
        if (heights[i] !== expected[i]) {
            count++; // Increment counter if heights do not match
        }
    }
    
    return count; // Return the count of mismatched heights
};



/*
Approach:

1.Create an array expected representing the expected order of heights. Sort the original heights array to get the expected order.
2.Initialize a variable count to 0 to store the count of mismatched heights.
3.Iterate through each student's height in the heights array.
4.Compare the current height with the corresponding expected height. If they are not equal, increment the count.
5.After iterating through all heights, return the value of count.

*/