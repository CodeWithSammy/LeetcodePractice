/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    // Initialize index pointer at the end of the string
    let i = s.length - 1;
    // Initialize the length of the last word
    let length = 0;
    // Move the pointer to the last non-space character
    while (s[i] == " ") {
        i -= 1;
    }
    // Count the length of the last word by moving the pointer
    while (i >= 0 && s[i] !== " ") {
        length += 1;
        i -= 1;
    }
    // Return the length of the last word
    return length;
};