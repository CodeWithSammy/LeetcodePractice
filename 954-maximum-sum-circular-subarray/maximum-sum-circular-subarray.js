/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    // Initialize variables to track the maximum and minimum subarray sums
    let globalMax = nums[0],    // Maximum subarray sum
        globalMin = nums[0],    // Minimum subarray sum
        currMax = 0,            // Current maximum subarray sum
        currMin = 0,            // Current minimum subarray sum
        total = 0;              // Total sum of all elements in the array

    // Iterate through the array to find the maximum and minimum subarray sums
    for (let num of nums) {
        // Update the current maximum and minimum subarray sums
        currMax = Math.max(currMax + num, num);  // Update the current maximum
        currMin = Math.min(currMin + num, num);  // Update the current minimum

        // Update the total sum of all elements in the array
        total += num;

        // Update the global maximum and minimum subarray sums
        globalMax = Math.max(globalMax, currMax); // Update the global maximum
        globalMin = Math.min(globalMin, currMin); // Update the global minimum
    }
    
    // Determine the maximum circular subarray sum
    // If the global maximum subarray sum is less than 0, return it
    if (globalMax < 0) {
        return globalMax;
    }
    // Otherwise, return the maximum of the global maximum and the difference
    // between the total sum and the global minimum subarray sum
    else {
        return Math.max(globalMax, total - globalMin);
    }
};