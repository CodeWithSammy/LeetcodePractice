/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    // Initialize an empty map to store the sums of squares of digits encountered
    let map = {};

    // Continue the loop until n becomes 1 (happy number) or a cycle is detected
    while (n !== 1) {
        // Store the current value of n in a variable current
        let current = n;
        // Initialize a variable sum to calculate the sum of squares of digits
        let sum = 0;
        
        // Calculate the sum of squares of digits for the current value of n
        while (current !== 0) {
            sum += (current % 10) ** 2; // Add the square of the last digit to sum
            current = Math.floor(current / 10); // Remove the last digit from current
        }
        
        // Check if the sum has been encountered before (cycle detected)
        if (map[sum]) {
            return false; // If yes, return false as it's not a happy number
        }
        
        // Mark the current sum as visited in the map
        map[sum] = true;
        
        // Update n to the new sum for the next iteration
        n = sum;
    }
    
    // If the loop exits with n equal to 1, return true as it's a happy number
    return true;
};

/*
Time Complexity: O(n^2)
Space Complexity: O(n)

1. Create map object.
2. While loop through "n" being not equal to 1.
    a. Create a current variable equal to "n".
    b. Create sum variable.
    c. While loop for current being not equal to 0.
        i. Add to sum the squared of (current mod 10).
        ii. Divide current by 10.
    d. Condition if sum is in the map.
        i. Return false.
    e. Add sum to map with a value of true.
    f. Set n = sum.
3. Return true.

*/