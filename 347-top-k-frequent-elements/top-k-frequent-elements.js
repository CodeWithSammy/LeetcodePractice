/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let count = {};
    let freqOfElements = new Array(nums.length + 1).fill().map(() => []);
    for (let n of nums) {
        count[n] = 1 + (count[n] || 0);
    }
    for (let [n, c] of Object.entries(count)) {
        freqOfElements[c].push(parseInt(n));
    }
    let result = [];
    for (let i = freqOfElements.length - 1; i > 0; i--) {
        for (let n of freqOfElements[i]) {
            result.push(n);
            if (result.length === k) {
                return result;
            }
        }
    }

};