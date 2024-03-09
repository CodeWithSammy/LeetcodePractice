/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    // Create a Set from nums1 to quickly check for common elements
    const set = new Set(nums1);
    
    // Filter nums2 to get elements that exist in both nums1 and nums2
    const common = nums2.filter(n => set.has(n))
                        // Sort the common elements in ascending order
                        .sort((a,b) => a - b)[0];
    
    // If common is not undefined (i.e., there are common elements), return the smallest common element
    // If there are no common elements, return -1
    return common !== undefined ? common : -1;
};
