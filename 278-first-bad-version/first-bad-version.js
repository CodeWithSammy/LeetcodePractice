/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    return function(n) {
        let left = 1, right = n;
        
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            
            if (isBadVersion(mid)) {
                right = mid; // First bad version is at mid or before
            } else {
                left = mid + 1; // First bad version is after mid
            }
        }

        return left; // Both pointers meet at the first bad version
    };
};
