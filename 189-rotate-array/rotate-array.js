/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    while (nums.length <= k) {
        k = k - nums.length;
    }
    const temp = nums.splice(0, nums.length-k)
    nums.push(...temp)
};