/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // Initialize an array to store the result
    const res = [[1]]; // Initialize the first row with [1]

    // Iterate from the second row (index 1) up to numRows
    for (let i = 1; i < numRows; i++) {
        res[i] = []; // Initialize the current row array

        // Iterate through each element of the current row (index i)
        for (let j = 0; j < i + 1; j++) {
            // Calculate the value of the current element:
            // It is the sum of the corresponding elements from the previous row
            // If the previous row doesn't have elements at index k or j - 1, use 0 instead
            res[i][j] = (res[i - 1][j] || 0) + (res[i - 1][j - 1] || 0);
        }
    }

    // Return the resulting array
    return res;
};