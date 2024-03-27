/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // Calculate the threshold for majority (more than half the length of the array)
    let half = nums.length / 2;
    
    // Initialize an empty object to store the count of each element
    let map = {};
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Increment the count for the current element in the map
        map[nums[i]] = (map[nums[i]] || 0) + 1;
        
        // Check if the count of the current element exceeds the threshold for majority
        if (map[nums[i]] > half) {
            // If yes, return the current element as the majority element
            return nums[i];
        }
    }
};


/*
Time Complexity: O(n)
Space Complexity: O(n)

1. Create half variable.
2. Create map object.
3. Loop through nums.
    a. Add the key and count to the map.
    b. Condition if the count is greater than half.
        i. Return that key.
*/