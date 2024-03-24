/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // Initialize two pointers slowPtr and fastPtr to track duplicates
    let slowPtr = 0, fastPtr = 0;
    
    // Phase 1: Finding the intersection point of slow and fast pointers
    while (true) {
        // Move slowPtr one step forward
        slowPtr = nums[slowPtr];
        // Move fastPtr two steps forward
        fastPtr = nums[nums[fastPtr]];
        // If slowPtr and fastPtr meet, there's a cycle
        if (slowPtr === fastPtr) {
            break; // Exit the loop
        }
    }

    // Reset one of the pointers and continue to find the entry point of the cycle
    let slowPtr2 = 0;
    while (true) {
        // Move both pointers one step forward at each iteration
        slowPtr = nums[slowPtr];
        slowPtr2 = nums[slowPtr2];
        // If they meet, that's the entry point of the cycle, which represents the duplicate number
        if (slowPtr === slowPtr2) {
            return slowPtr; // Return the duplicate number
        }
    }
};

