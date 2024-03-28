/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const result = [];
    let carry = 0;
    let pointer1 = num1.length - 1; // Pointer for iterating num1 from right to left
    let pointer2 = num2.length - 1; // Pointer for iterating num2 from right to left
    
    while (pointer1 >= 0 || pointer2 >= 0 || carry > 0) {
        let sum = carry;
        if (pointer1 >= 0) {
            sum += parseInt(num1[pointer1]);
            pointer1--;
        }
        if (pointer2 >= 0) {
            sum += parseInt(num2[pointer2]);
            pointer2--;
        }
        result.push(sum % 10);
        carry = Math.floor(sum / 10);
    }
    
    // Reverse the result array and join to form the result string
    return result.reverse().join('');
};
