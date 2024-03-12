/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = new Map();
    for( let str of strs){
        let count = Array(26).fill(0);
        for(let char of str ){
            count[char.charCodeAt(0)- 'a'.charCodeAt(0)]++;
        }
        let key = count.join('-');
        if (!result.has(key)) {
            result.set(key, []); 
        }
        result.get(key).push(str);
    }
    return Array.from(result.values());
};