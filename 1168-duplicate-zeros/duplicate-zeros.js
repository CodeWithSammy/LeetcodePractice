/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    // Iterate through the array
    for (var i = 0; i < arr.length; i++) {
        // If the current element is 0
        if (arr[i] === 0) {
            // Insert a zero at the current position
            // (duplicating the zero)
            arr.splice(i, 0, 0);
            // Remove the last element of the array
            arr.pop();
            // Increment i by 1 to skip the next element
            // as it has been duplicated and already processed
            i += 1;
        }
    }
};
