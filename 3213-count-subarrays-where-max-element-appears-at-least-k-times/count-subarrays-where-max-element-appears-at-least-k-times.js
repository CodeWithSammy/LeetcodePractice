/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let max_element = Math.max(...nums);
    let ans = 0;
    let start = 0;
    let max_element_in_window = 0;
    
    for (let end = 0; end < nums.length; end++) {
        if (nums[end] == max_element) {
            max_element_in_window++;
        }
        
        while (max_element_in_window >= k) {
            ans += nums.length - end;
            if (nums[start] == max_element) {
                max_element_in_window--;
            }
            start++;
        }
    }
    
    return ans;
};
