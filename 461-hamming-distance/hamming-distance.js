/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    x = x.toString(2)
    y = y.toString(2)

    if (x.length < y.length) {
        while (x.length !== y.length) {
            x = "0" + x;
        }
    } else {
        while (x.length !== y.length) {
            y = "0" + y;
        }
    }
    let distance = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) {
            distance++;
        }
    }
    return distance;
};