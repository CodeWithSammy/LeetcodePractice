/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    // If k is less than or equal to 1, it's impossible to have a product less than k.
    // Hence, return 0.
    if (k <= 1) {
        return 0;
    }

    // Initialize product to store the current product of elements in the window.
    let product = 1;
    // Initialize result to store the count of subarrays with product less than k.
    let result = 0;
    // Initialize two pointers, right and left, for the sliding window approach.
    let right = 0;
    let left = 0;

    // Iterate through the array using the right pointer.
    while (right < nums.length) {
        // Update the product by multiplying with the current element.
        product *= nums[right];

        // If the product becomes greater than or equal to k,
        // shrink the window from the left side until the product becomes less than k.
        while (product >= k) {
            product /= nums[left];
            left++;
        }

        // At this point, all subarrays ending at the current right pointer position
        // have product less than k. So, add the count of such subarrays to the result.
        // The count of subarrays ending at the current right pointer position is
        // (right - left + 1).
        result += right - left + 1;

        // Move the right pointer to expand the window.
        right++;
    }

    // Finally, return the result which represents the count of subarrays
    // with product less than k.
    return result;
};
