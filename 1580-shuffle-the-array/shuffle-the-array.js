/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    // Initialize an empty array to store the shuffled result
    let res = [];
    // Iterate over the first 'n' elements of the array
    for (let i = 0; i < n; i++) {
        // Push the i-th element from the first half of the array
        res.push(nums[i]);
        // Push the i-th element from the second half of the array
        res.push(nums[i + n]);
    }
    // Return the shuffled array
    return res;
};