/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    // Step 1: Convert the sentence into an array of words
    const words = s.split(" ");
    
    // Step 2: Sort the words array according to the number in the last position of the word
    words.sort((a, b) => {
        const numA = parseInt(a[a.length - 1]); // Extract the number from the last position of word a
        const numB = parseInt(b[b.length - 1]); // Extract the number from the last position of word b
        return numA - numB; // Compare the numbers
    });
    
    // Step 3: Remove the numbers from the last position of each word and join the words array again
    return words.map(word => word.slice(0, -1)).join(" ");
};
/*
my approach/intution:-
1. convert the sentence into array of words
2. sort the words array according to the number 
   in the last position of the word
3. after  sorting remove the numbers from the last 
   position and join the words array again
*/