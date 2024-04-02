/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // Create two maps to store mappings between characters of strings s and t
    let mapST = new Map();
    let mapTS = new Map();

    // Iterate over the characters of strings s and t using a loop
    for (let i = 0; i < s.length; i++) {
        // Get the current characters from strings s and t
        const c1 = s[i];
        const c2 = t[i];

        // Check if the current characters are already mapped in the maps
        if ((mapST.has(c1) && mapST.get(c1) !== c2) || (mapTS.has(c2) && mapTS.get(c2) !== c1)) {
            // If the mappings are inconsistent, return false
            return false;
        }
        
        // Update the mappings in both maps
        mapST.set(c1, c2);
        mapTS.set(c2, c1);
    }

    // If all mappings are consistent, return true
    return true;
};

