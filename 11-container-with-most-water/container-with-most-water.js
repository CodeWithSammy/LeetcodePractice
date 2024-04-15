/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let result = 0; // Initialize the variable to store the maximum area
    let l = 0; // Initialize the left pointer to the start of the array
    let r = height.length - 1; // Initialize the right pointer to the end of the array

    // Start a loop that continues until the left pointer is less than the right pointer
    while (l < r) {
        // Calculate the area of the container formed by the two vertical lines at indices l and r
        let area = (r - l) * Math.min(height[l], height[r]);
        
        // Update the result variable with the maximum of its current value and the calculated area
        result = Math.max(result, area);

        // Move the pointers based on the height of the vertical lines
        if (height[l] < height[r]) {
            l += 1; // If the height at index l is less than the height at index r, increment l
        } else {
            r -= 1; // Otherwise, decrement r
        }
    }

    // After the loop completes, return result, which contains the maximum area of water that can be contained
    return result;
};
