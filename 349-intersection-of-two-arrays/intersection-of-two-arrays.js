/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let result = new Set();
    for( let num of set1){
        if(set2.has(num)){
            result.add(num)
        }
    }
    return [...result];
};