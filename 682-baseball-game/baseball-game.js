/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    // Initialize an empty stack to store scores
    let scoreStack = [];

    // Iterate through each operation
    for (let o of operations) {
        // If the operation is '+', and the stack has at least 2 elements
        if (o === '+' && scoreStack.length >= 2) {
            // Calculate the sum of the last two valid scores
            let summed = scoreStack[scoreStack.length - 2] + scoreStack[scoreStack.length - 1];
            // Push the sum onto the stack
            scoreStack.push(summed);
        }
        // If the operation is 'D', and the stack has at least 1 element
        else if (o === 'D' && scoreStack.length >= 1) {
            // Double the last valid score
            let doubled = scoreStack[scoreStack.length - 1] * 2;
            // Push the doubled score onto the stack
            scoreStack.push(doubled);
        }
        // If the operation is 'C', and the stack has at least 1 element
        else if (o === 'C' && scoreStack.length >= 1) {
            // Remove the last valid score from the stack
            scoreStack.pop();
        }
        // If the operation is a number
        else {
            // Convert the operation to a number and push it onto the stack
            scoreStack.push(parseInt(o));
        }
    }

    // Return the sum of all scores in the stack
    return scoreStack.reduce((acc, cur) => acc + cur, 0);
};
