/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let left = 1, right = Math.max(...piles);

    const canEatAll = (speed) => {
        let hours = 0;
        for (let bananas of piles) {
            hours += Math.ceil(bananas / speed);
        }
        return hours <= h;
    };

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (canEatAll(mid)) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left
};