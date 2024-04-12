/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(ops) {
    // Initialize an empty stack
    let stack = [];

    // Iterate through each operation in the array
    for (let op of ops) {
        // If the operation is '+'
        if (op === '+') {
            // Add the sum of the last two valid points to the stack
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        }
        // If the operation is 'C'
        else if (op === 'C') {
            // Remove the last valid point from the stack
            stack.pop();
        }
        // If the operation is 'D'
        else if (op === 'D') {
            // Double the last valid point and add it to the stack
            stack.push(2 * stack[stack.length - 1]);
        }
        // If the operation is a number
        else {
            // Convert the operation to an integer and add it to the stack
            stack.push(parseInt(op));
        }
    }

    // Return the sum of all valid points in the stack
    return stack.reduce((acc, curr) => acc + curr, 0);
};
