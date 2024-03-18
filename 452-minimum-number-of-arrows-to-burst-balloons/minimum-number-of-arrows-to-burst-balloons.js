/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[0] - b[0]);
    let countOfArrows = points.length;
    let previous = points[0];

    for( i =1; i< points.length; i++){
        let current = points[i];
        if( current[0] <= previous[1]){
            countOfArrows -= 1;
            previous = [ current[0], Math.min(current[1], previous[1])]
        }
        else{
            previous = current;
        }
    }
    return countOfArrows;
};