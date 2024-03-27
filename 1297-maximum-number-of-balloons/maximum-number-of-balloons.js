/**
 * @param {string} text
 * @return {number}
 */
// var maxNumberOfBalloons = function(text) {
//     const count = { b: 0, a: 0, l: 0, o: 0, n: 0 };
//     for (const char of text) {
//         if (char === 'b' || char === 'a' || char === 'l' || char === 'o' || char === 'n') {
//             count[char]++;
//         }
//     }
//     // Calculate the maximum number of instances of "balloon" that can be formed
//     const minOccurrences = Math.min(
//         count['b'],
//         count['a'],
//         Math.floor(count['l'] / 2),
//         Math.floor(count['o'] / 2),
//         count['n']
//     );
//     return minOccurrences;
// };

var maxNumberOfBalloons = function(text) {
    const count = { b: 0, a: 0, l: 0, o: 0, n: 0 };
    for (const char of text) {
        if (char === 'b' || char === 'a' || char === 'l' || char === 'o' || char === 'n') {
            count[char]++;
        }
    }
    // Check if all required characters are present
    if (Object.keys(count).length !== 5) {
        return 0;
    }
    // Calculate the maximum number of instances of "balloon" that can be formed
    const minOccurrences = Math.min(
        count['b'],
        count['a'],
        Math.floor(count['l'] / 2),
        Math.floor(count['o'] / 2),
        count['n']
    );
    return minOccurrences;
};


