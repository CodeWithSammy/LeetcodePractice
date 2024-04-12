/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // If the height array is empty, return 0
    if (!height.length) {
        return 0;
    }

    // Initialize left and right pointers
    let l = 0, r = height.length - 1;
    // Initialize leftMax and rightMax variables
    let leftMax = height[l], rightMax = height[r];
    // Initialize the result variable
    let res = 0;

    // Loop until the left pointer is less than the right pointer
    while (l < r) {
        // If the leftMax is less than the rightMax
        if (leftMax < rightMax) {
            // Move the left pointer to the right
            l++;
            // Update the leftMax
            leftMax = Math.max(leftMax, height[l]);
            // Add the trapped water to the result
            res += leftMax - height[l];
        } else {
            // Otherwise, move the right pointer to the left
            r--;
            // Update the rightMax
            rightMax = Math.max(rightMax, height[r]);
            // Add the trapped water to the result
            res += rightMax - height[r];
        }
    }

    // Return the result
    return res;
};
