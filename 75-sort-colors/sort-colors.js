/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let low = 0, mid = 0, high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]]
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};

/**
Core Idea
Use three pointers:

low: the position to place the next 0

mid: the current element being examined

high: the position to place the next 2

Traverse the array with mid:

If the element is 0: swap with low, then move both low and mid forward

If it's 1: just move mid forward

If it's 2: swap with high, then move high backward (don’t move mid yet) */