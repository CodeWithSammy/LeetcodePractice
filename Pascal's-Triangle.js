/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
    // Initialize the triangle with the first row already in place: [1]
    const triangle = [[1]];

    // Start building rows from index 1 up to numRows - 1 (since row 0 is already added)
    for (let i = 1; i < numRows; i++) {
        // Get the previous row to calculate the current row's values
        const prevRow = triangle[i - 1];

        // Start the current row with a leading 1
        const row = [1];

        // Fill in the inner values of the current row
        // Each value is the sum of the two values above it in the previous row
        for (let j = 1; j < i; j++) {
            // Add the sum of the two numbers above this position
            row[j] = prevRow[j - 1] + prevRow[j];
        }

        // End the current row with a trailing 1
        row.push(1);

        // Add the completed row to the triangle
        triangle.push(row);
    }

    // Return the full triangle after all rows are constructed
    return triangle;
}
