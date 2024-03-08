/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    // Create a map to store the frequency of each number in the array
    const freqCounter = new Map();

    // Iterate through the array and count the frequency of each number
    for (const num of nums) {
        freqCounter.set(num, (freqCounter.get(num) || 0) + 1);
    }

    // Find the maximum frequency among all elements
    const maxFrequency = Math.max(...freqCounter.values());

    // Filter out the numbers with maximum frequency
    const maxFreqElements = [...freqCounter.keys()].filter(num => freqCounter.get(num) === maxFrequency);

    // Calculate the total frequency by multiplying maximum frequency with the number of elements with maximum frequency
    const totalFrequency = maxFrequency * maxFreqElements.length;

    // Return the total frequency
    return totalFrequency;
};