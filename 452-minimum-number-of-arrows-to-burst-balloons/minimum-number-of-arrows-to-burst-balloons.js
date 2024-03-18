/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    points.sort((a, b) => a[0] - b[0]);
    let countOfArrows = points.length;
    let previous = points[0];
    // the loop iteration to start from 1 instead of 0 since previous is initialized with points[0].
    for (i = 1; i < points.length; i++) {
        let current = points[i];
        if (current[0] <= previous[1]) {
            countOfArrows -= 1;
            previous = [current[0], Math.min(current[1], previous[1])]
            // [1,5] [2,6] -> [2,5]
            // [1,5] [2,4] -> [2,4]
            // taking the minimum for getting the merged array
        }
        else {
            previous = current;
        }
    }
    return countOfArrows;
};

