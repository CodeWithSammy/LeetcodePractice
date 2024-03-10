/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // Check if the array is empty
    if (nums.length === 0) {
        return 0; // If empty, return 0 as there are no elements
    }

    let j = 0; // Initialize a pointer j to keep track of unique elements
    // Iterate through the array starting from the second element (index 1)
    for (let i = 1; i < nums.length; i++) {
        // Check if the current element is different from the element at index j
        if (nums[j] !== nums[i]) {
            // If different, increment j and update the element at index j+1 with the current element
            nums[++j] = nums[i];
        }
        // If the current element is the same as the element at index j, skip it
    }

    // Return the length of the array with duplicates removed (j + 1)
    // Adding 1 to j because j is a zero-based index
    return j + 1;
};