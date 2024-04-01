/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let strArr = s.split(" ").slice(0,k).join(" ")
    return strArr
};