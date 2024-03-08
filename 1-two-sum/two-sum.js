/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//  Solution 1
var twoSum = function(numbers, targetSum) {
    let numIndicesMap = {};
    for (let [currentIndex, currentNum] of numbers.entries()) {
        if (numIndicesMap[currentNum] !== undefined) {
            return [numIndicesMap[currentNum], currentIndex];
        }
        numIndicesMap[targetSum - currentNum] = currentIndex;
    }
};

//  Solution 2
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             // logic
//             if (nums[i] + nums[j] === target) return [i, j];
//         }
//     }
// };
