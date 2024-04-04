/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let result = 0;
    let current = 0;
    for (let c = 0; c < s.length; c++) {
        if (s[c] === "(") {
            current += 1;
        } else if (s[c] === ")") {
            current -= 1;
        }
        result = Math.max(result, current);
    }
    return result;
};
/*
1.Initialize the variable to store the maximum nesting depth
2.Initialize the variable to keep track of the current nesting depth

3.Iterate over each character in the string
4.If the current character is an opening parenthesis
5.Increment the current nesting depth
6.If the current character is a closing parenthesis
7.Decrement the current nesting depth
8.Update the maximum nesting depth

9.Return the maximum nesting depth
*/