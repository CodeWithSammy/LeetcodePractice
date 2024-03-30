/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start =0;
    let end = nums.length -1;
    
    while(start <= end){
        let mid = Math.floor(start + (end - start) / 2);
        if(target < nums[mid]){
            //search in left
            end = mid - 1;
        }else if( target > nums[mid]){
            //search in right
            start = mid + 1;
        }else{
            //this means mid == target
            //answer found
            return mid;
        }
    }
    return start;
};