/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var getConcatenation = function(nums) {
//     return [...nums ,...nums];
// };

// var getConcatenation = function (nums) {
//   return nums.concat(nums);
// };

// var getConcatenation = function (nums) {
//     var ans = [];
//     for (var i = 0; i < 2; i++) {
//         for (var n of nums) {
//             ans.push(n);
//         }
//     }
//     return ans;
// };

var getConcatenation = function(nums) {
    // Initialize an empty array to store the concatenated result
    let res = [];

    // Loop from 0 to twice the length of the input array nums
    for (let i = 0; i < nums.length * 2; i++) {
        // Push the element at the current index % length of nums into res
        res.push(nums[i % nums.length]);
    }

    // Return the concatenated array
    return res;
};