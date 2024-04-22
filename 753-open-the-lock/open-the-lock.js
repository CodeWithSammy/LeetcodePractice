/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    if (deadends.includes("0000")) {
        return -1;
    }

    // Function to generate neighboring combinations
    const children = (wheel) => {
        const res = [];
        for (let i = 0; i < 4; i++) {
            let digit = (parseInt(wheel[i]) + 1) % 10;
            res.push(wheel.substring(0, i) + digit + wheel.substring(i + 1));
            digit = (parseInt(wheel[i]) + 10 - 1) % 10;
            res.push(wheel.substring(0, i) + digit + wheel.substring(i + 1));
        }
        return res;
    };

    const q = [];
    const visit = new Set(deadends);
    q.push(["0000", 0]); // [wheel, turns]

    while (q.length > 0) {
        const [wheel, turns] = q.shift();
        if (wheel === target) {
            return turns;
        }
        const neighbors = children(wheel);
        for (const child of neighbors) {
            if (!visit.has(child)) {
                visit.add(child);
                q.push([child, turns + 1]);
            }
        }
    }
    return -1;
};
