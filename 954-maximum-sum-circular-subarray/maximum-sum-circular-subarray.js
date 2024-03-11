/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let globalMax = nums[0],
    globalMin = nums[0],
    currMax =0,
    currMin =0,
    total = 0;

    for( let num of nums){
        currMax = Math.max(currMax + num, num)
        currMin = Math.min(currMin + num, num)
        total += num;
        globalMax = Math.max( globalMax, currMax);
        globalMin = Math.min( globalMin, currMin);
        
    }
    
    return globalMax < 0 ? globalMax :Math.max(globalMax, total- globalMin ) 
    
};