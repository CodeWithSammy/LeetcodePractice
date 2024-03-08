/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // if x is less than 0 then we return false, else we convert into string, 
    // split it, reverse and then join back again
    return x < 0 ? false: x === +x.toString().split("").reverse().join("");
};