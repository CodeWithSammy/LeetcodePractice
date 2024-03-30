/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    // Initialize a map to store the count of distinct elements
    const count = new Map();
    let res = 0; // Initialize the result count
    let lFar = 0; // Initialize the left pointer for far condition
    let lNear = 0; // Initialize the left pointer for near condition
    
    // Iterate through the array using a sliding window approach
    for (let r = 0; r < nums.length; r++) {
        // Update the count of the current element in the map
        count.set(nums[r], (count.get(nums[r]) || 0) + 1);
        
        // Adjust the left pointers until the count of distinct elements becomes equal to k
        while (count.size > k) {
            count.set(nums[lNear], count.get(nums[lNear]) - 1);
            if (count.get(nums[lNear]) === 0) {
                count.delete(nums[lNear]);
            }
            lNear++;
            lFar = lNear;
        }
        
        // Adjust lNear until there are k distinct elements in the current window
        while (count.get(nums[lNear]) > 1) {
            count.set(nums[lNear], count.get(nums[lNear]) - 1);
            lNear++;
        }
        
        // If there are exactly k distinct elements in the current window, update the result count
        if (count.size === k) {
            res += lNear - lFar + 1;
        }
    }
    return res; // Return the final result count
};
