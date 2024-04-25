/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(" ");
    if (pattern.length !== words.length) {
        return false;
    }
    
    const charToWord = new Map(); // Map to store character to word mappings
    const wordToChar = new Map(); // Map to store word to character mappings
    
    for (let i = 0; i < pattern.length; i++) {
        const c = pattern[i];
        const w = words[i];
        
        // Check if the current character is already mapped to a word
        if (charToWord.has(c)) {
            if (charToWord.get(c) !== w) {
                return false; // If mapped to a different word, return false
            }
        } else {
            charToWord.set(c, w); // Otherwise, create a new mapping
        }
        
        // Check if the current word is already mapped to a character
        if (wordToChar.has(w)) {
            if (wordToChar.get(w) !== c) {
                return false; // If mapped to a different character, return false
            }
        } else {
            wordToChar.set(w, c); // Otherwise, create a new mapping
        }
    }

    // If all characters and words are correctly mapped, return true
    return true;
};

