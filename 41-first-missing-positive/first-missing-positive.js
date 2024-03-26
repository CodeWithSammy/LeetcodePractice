/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    // Create a set to store positive numbers from the given array
    const numSet = new Set(nums.filter(num => num > 0)); 
    
    // Initialize a variable i to track the first missing positive integer
    let i = 1;
    
    // Iterate until the set contains the current value of i
    while (numSet.has(i)) {
        i++; // Increment i to check the next positive integer
    }
    
    // Return the first missing positive integer
    return i;
};
