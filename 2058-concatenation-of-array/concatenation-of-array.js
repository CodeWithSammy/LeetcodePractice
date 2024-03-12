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

var getConcatenation = function (nums) {
    let res = [];
    for (let i = 0; i < nums.length * 2; i++) {
        res.push(nums[i % nums.length]);
    }
    return res;
};