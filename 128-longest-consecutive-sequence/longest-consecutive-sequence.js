/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // Convert the array 'nums' into a set for faster lookup
    const numSet = new Set(nums);
    // Initialize the variable 'longest' to store the length of the longest consecutive sequence found
    let longest = 0;

    // Iterate through each number in the set 'numSet'
    for (const n of numSet) {
        // Check if the current number 'n' is the start of a sequence
        if (!numSet.has(n - 1)) {
            let length = 1; // Initialize the length of the current sequence
            // Increment the current number and check if the incremented number is in 'numSet'
            while (numSet.has(n + length)) {
                length++; // Increment the length of the current sequence
            }
            // Update the value of 'longest' with the maximum length found
            longest = Math.max(length, longest);
        }
    }
    // Return the length of the longest consecutive sequence found
    return longest;
};