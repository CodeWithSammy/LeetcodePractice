/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let left = 0, right = s.length - 1;
    let result = s.split('');
    let vowels = new Set(['a','e','i','o','u','A','E','I','O','U'])
    while(left < right){
        if(!vowels.has(result[left])){
            left++;
        }
        else if(!vowels.has(result[right])){
            right--;
        }
        else{
            [result[left], result[right]] = [result[right], result[left]]
            left++;
            right--;
        }
    }
    return result.join('');
};