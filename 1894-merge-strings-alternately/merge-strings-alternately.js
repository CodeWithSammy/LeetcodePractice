/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let slow = 0
    let fast = 0

    let answer = "";

    while (slow < word1.length && fast < word2.length) {
        answer += word1[slow++]
        answer += word2[fast++]
    }

    if (slow < word1.length) answer += word1.slice(slow);
    if (fast < word2.length) answer += word2.slice(fast);

    return answer;
};