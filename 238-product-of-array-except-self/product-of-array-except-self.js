/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
    // Initialize an empty array to store the result
    const result = [];
    // Initialize prefix and postfix variables to store product values
    let prefix = 1;
    let postfix = 1;
    
    // Calculate the prefix products
    for (let i = 0; i < nums.length; i++) {
        // Store the prefix product for the current element in the result array
        result[i] = prefix;
        // Update the prefix product for the next iteration
        prefix *= nums[i];
    }
    
    // Calculate the postfix products and update the result array
    for (let i = nums.length - 2; i >= 0; i--) {
        // Update the postfix product for the current element
        postfix *= nums[i + 1];
        // Multiply the current result value by the corresponding postfix product
        result[i] *= postfix;
    }
    
    // Return the final result array
    return result;
}
