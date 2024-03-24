/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slowPtr = 0, fastPtr = 0;
    while (true) {
        slowPtr = nums[slowPtr];
        fastPtr = nums[nums[fastPtr]];
        if (slowPtr === fastPtr) {
            break;
        }
    }

    let slowPtr2 = 0;
    while (true) {
        slowPtr = nums[slowPtr];
        slowPtr2 = nums[slowPtr2];
        if (slowPtr === slowPtr2) {
            return slowPtr;
        }
    }
};
