/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    // Create a map to store the running sum and its corresponding index
    let mp = new Map();
    // Initialize variables to store the running sum and the maximum subarray length
    let sum = 0;
    let subArrayLength = 0;
    
    // Iterate through the array to calculate the running sum and find the maximum subarray length
    for (let i = 0; i < nums.length; i++) {
        // Update the running sum by adding 1 for each 1 and subtracting 1 for each 0
        sum += nums[i] === 0 ? -1 : 1;
        
        // If the running sum becomes 0, update the subarray length to the current index + 1
        if (sum === 0) {
            subArrayLength = i + 1;
        } 
        // If the running sum is encountered again, update the subarray length if necessary
        else if (mp.has(sum)) {
            subArrayLength = Math.max(subArrayLength, i - mp.get(sum));
        } 
        // If the running sum is encountered for the first time, store its index in the map
        else {
            mp.set(sum, i);
        }
    }
    
    // Return the maximum subarray length
    return subArrayLength;
};
