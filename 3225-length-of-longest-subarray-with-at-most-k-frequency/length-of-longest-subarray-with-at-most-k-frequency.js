/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


//  used sliding window approach to solve this problem
var maxSubarrayLength = function (nums, k) {
    let ans = 0;
    let start = -1;
    let frequency = {};

    for (let end = 0; end < nums.length; end++) {
        // Initialize frequency of nums[end] as 0 if it's not already initialized
        if (!frequency[nums[end]]) {
            frequency[nums[end]] = 0;
        }
        frequency[nums[end]] += 1;
        while (frequency[nums[end]] > k) {
            start++;
            frequency[nums[start]] -= 1;
        }
        ans = Math.max(ans, end - start)
    }
    return ans;
};