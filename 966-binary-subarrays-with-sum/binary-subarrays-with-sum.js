/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    // Define a helper function to calculate the number of subarrays
    // with sum less than or equal to the given value x
    const helper = function(x) {
        if (x < 0) return 0; // If x is negative, return 0

        let res = 0;
        let l = 0; // Left pointer
        let curr = 0; // Current sum
        for (let r = 0; r < nums.length; r++) {
            curr += nums[r]; // Add the current number to the current sum

            // Shrink the window from the left until the sum is less than or equal to x
            while (curr > x) {
                curr -= nums[l]; // Subtract the leftmost number from the current sum
                l++; // Move the left pointer to the right
            }
            // Add the number of subarrays ending at index r with sum less than or equal to x
            res += (r - l + 1);
        }
        return res;
    };

    // Return the difference between the number of subarrays with sum equal to goal
    // and the number of subarrays with sum equal to (goal - 1)
    return helper(goal) - helper(goal - 1);
};
