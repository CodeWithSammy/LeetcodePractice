/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//  Solution 1
// var isAnagram = function(s, t) {
//     s = s.split("").sort().join("");
//     t = t.split("").sort().join("");
//     return s ===t;
// };

//  Solution 2
var isAnagram = function(s, t) {
    // Check if the lengths of the two strings are different, they cannot be anagrams
    if (s.length !== t.length) return false;
    
    // Create two objects to store the frequency of characters in each string
    let obj1 = {};
    let obj2 = {};
    
    // Count the frequency of characters in the first string, s
    for (let i = 0; i < s.length; i++) {
        // Increment the count of character s[i] in obj1
        obj1[s[i]] = (obj1[s[i]] || 0) + 1; 
        // Count the frequency of characters in the second string, t
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }
    
    // Compare the frequencies of characters in obj1 and obj2
    for (const key in obj1) {
        // If the frequencies of corresponding characters in s and t are different, return false
        if (obj1[key] !== obj2[key]) return false;
    }
    
    // If all characters have the same frequencies in both strings, return true (they are anagrams)
    return true;
};