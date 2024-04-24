/**
 
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let i = 1, j = x, ans = 0;
        while (i <=j){
            let mid = i + Math.floor((j-i)/2);
            
            if (mid * mid <= x){
                i = mid +1;
                ans = mid;
            }
            else
                j = mid-1;
        }
        
        return ans;
};
//  * Binary Search 
//  * Time O(log(n)) | Space O(1)