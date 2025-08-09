/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
    let left = 1;
    let right = Math.max(...nums);
    let answer = right;

    const computeSum = (divisor) => {
        let total = 0;
        for (let num of nums) {
            total += Math.ceil(num / divisor);
        }
        return total;
    };

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let total = computeSum(mid);

        if (total <= threshold) {
            answer = mid;      // optimistic choice
            right = mid - 1;   // try smaller
        } else {
            left = mid + 1;    // need larger divisor
        }
    }

    return answer;
};
