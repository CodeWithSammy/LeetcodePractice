/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashSet = new Set();

    for( let n of nums){
        if(hashSet.has(n)){
            return true;
        }
        else{
            hashSet.add(n)
        }
    }
    return false;
};