/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let nums1Index = m - 1
    let nums2Index = n - 1
    let mergeIndex = m + n - 1

    while (nums1Index >= 0 && nums2Index >= 0) {
        if (nums1[nums1Index] > nums2[nums2Index]) {
            nums1[mergeIndex] = nums1[nums1Index];
            nums1Index--;
        } else {
            nums1[mergeIndex] = nums2[nums2Index];
            nums2Index--;
        }
        mergeIndex--;
    }

    while(nums2Index >=0){
        nums1[mergeIndex] = nums2[nums2Index]
        nums2Index--;
        mergeIndex--;
    }
};

/**This function merges two sorted arrays (nums1 and nums2) into nums1, in-place and sorted.

nums1 has enough space at the end to hold all values.

We start from the end of both arrays to avoid overwriting useful data in nums1.

Using three pointers:

nums1Index – last valid element in nums1

nums2Index – last element in nums2

mergeIndex – last index in nums1 (where merged values go)

At each step, compare the two values and place the larger one at mergeIndex, moving backward.

If anything remains in nums2, copy it (what remains in nums1 is already correctly placed).

This ensures an efficient O(m + n) time and O(1) space merge operation. */