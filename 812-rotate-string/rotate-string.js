/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
if (s.length !== goal.length) {
        return false;
    }
    return ((s + s).indexOf(goal) !== -1)
};

/*
Time Complexity:O(n)
Space Complexity: O(n)
1. Condition if s and goal are different lengths.
    a. Return false.
2. Add s to s.
    a. See if goal is an index of s.
    b. Return true or false.
*/