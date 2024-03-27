/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let start = 0;
    let end = 0;
    while (start < nums.length) {
        if (nums[start] == 0) {
            k--;
        }
        if (k < 0) {
            if (nums[end] == 0) {
                k++;
            }
            end++
        }
        start++
    }
    return start - end;
};
