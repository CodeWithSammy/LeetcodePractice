/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    // Step 1: Count the occurrences of each character in the string 's'
    const charCount = {};
    // Initialize the charCount object with keys from the 'order' string
    for (const char of order) {
        charCount[char] = 0;
    }

    // Count occurrences of characters in the string 's'
    for (const char of s) {
        // Increment the count of the character if it's in the 'order' string
        if (charCount[char] !== undefined) {
            charCount[char]++;
        }
    }

    // Step 2: Build the sorted string based on the order in 'order'
    let sortedS = '';
    // Iterate through each character in the 'order' string
    for (const char of order) {
        // Repeat the character according to its count and append it to 'sortedS'
        sortedS += char.repeat(charCount[char]);
    }

    // Step 3: Add remaining characters from 's' that are not in 'order' to 'sortedS'
    for (const char of s) {
        // If the character is not in 'order', append it to 'sortedS'
        if (!order.includes(char)) {
            sortedS += char;
        }
    }

    // Return the final sorted string
    return sortedS;
};