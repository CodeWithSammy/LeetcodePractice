/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
/**
 * Take heed, good sir: this function doth compute the minimal cost
 * to make thy two baskets equal. Return –1 should the task be unfeasible.
 *
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @returns {number} minimal total cost, or –1 if impossible
 */
function minCost(basket1, basket2) {
    const n = basket1.length;
    if (n !== basket2.length) {
        // Though this case should not arise in LeetCode, we maintain formality
        throw new Error("Baskets must contain equal quantity of fruits");
    }

    // 1. Tally net imbalance of each fruit cost
    const count = new Map();
    for (let i = 0; i < n; i++) {
        const a = basket1[i], b = basket2[i];
        count.set(a, (count.get(a) || 0) + 1);
        count.set(b, (count.get(b) || 0) - 1);
    }

    // 2. Verify that every fruit’s count is even
    for (const [val, c] of count.entries()) {
        if (Math.abs(c) % 2 !== 0) return -1;
    }

    // 3. Build swapList of items needing movement
    const swapList = [];
    for (const [val, c] of count.entries()) {
        const times = Math.abs(c) / 2;
        for (let i = 0; i < times; i++) {
            swapList.push(val);
        }
    }

    // 4. Find the global minimum fruit cost among both baskets
    let globalMin = Infinity;
    for (const x of basket1) globalMin = Math.min(globalMin, x);
    for (const x of basket2) globalMin = Math.min(globalMin, x);

    // 5. No swaps needed if all balanced already
    if (swapList.length === 0) return 0;

    // Sort the list of needed swaps
    swapList.sort((u, v) => u - v);

    // We need only half the items in the list (each swap handles two)
    const k = swapList.length / 2;
    let cost = 0;
    for (let i = 0; i < k; i++) {
        // For each needed item, choose the cheaper of direct swap (val)
        // or double‑swap via the cheapest fruit in either basket (2 * globalMin)
        const val = swapList[i];
        cost += Math.min(val, 2 * globalMin);
    }

    return cost;
}

// \U0001f34e Example usage:
console.log( minCost([4,2,2,2], [1,4,1,2]) ); // outputs 1
console.log( minCost([2,3,4,1], [3,2,5,1]) ); // outputs -1

