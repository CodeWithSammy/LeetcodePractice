/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    // Initialize an empty array to store duplicate numbers
    let duplicates = [];

    // Iterate through each number in the array
    for (let num of nums) {
        // Get the absolute value of the current number
        let absNum = Math.abs(num);
        
        // Check if the value at index (absNum - 1) is negative
        if (nums[absNum - 1] < 0) {
            // If negative, it means absNum has been encountered before, so it's a duplicate
            // Add absNum to the list of duplicates
            duplicates.push(absNum);
        }
        
        // Mark the number at index (absNum - 1) as negative to indicate its presence
        nums[absNum - 1] = -nums[absNum - 1];
    }
    
    // Return the array containing duplicate numbers
    return duplicates;
};
