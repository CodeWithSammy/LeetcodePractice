/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function kthFactor(n, k) {
    // Keep track of the number of factors found
    let count = 0;
    // Iterate from 1 up to n
    for (let i = 1; i <= n; i++) {
        // If i is a factor of n
        if (n % i === 0) {
            count++; // Increment the count of factors
            // If the count matches k, return i as the kth factor
            if (count === k) {
                return i;
            }
        }
    }
    // If k exceeds the total number of factors, return -1
    return -1;
}




