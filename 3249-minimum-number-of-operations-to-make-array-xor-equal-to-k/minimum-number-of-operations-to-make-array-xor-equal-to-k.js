/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let value = k
    for (let item of nums){
        value ^= item
    }

    let answer = 0
    while (value > 0){
        value&=(value-1)
        answer++
    }
        
    return answer
};