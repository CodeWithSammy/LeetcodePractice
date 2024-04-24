/**
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (mem[n] !== undefined) return mem[n];
    return mem[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};

const mem = {
    0: 0,
    1: 1,
    2: 1
};