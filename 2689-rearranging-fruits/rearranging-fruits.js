/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
function minCost(basket1, basket2) {
    const count = new Map();

    // Count frequency of all fruit costs
    for (const cost of basket1) count.set(cost, (count.get(cost) || 0) + 1);
    for (const cost of basket2) count.set(cost, (count.get(cost) || 0) - 1);

    const extra1 = [];
    const extra2 = [];

    for (const [val, freq] of count.entries()) {
        // If freq is odd, impossible
        if (freq % 2 !== 0) return -1;

        const half = Math.abs(freq) / 2;
        if (freq > 0) {
            // Extra in basket1
            for (let i = 0; i < half; i++) extra1.push(val);
        } else if (freq < 0) {
            // Extra in basket2
            for (let i = 0; i < half; i++) extra2.push(val);
        }
    }

    // Sort extra1 ascending, extra2 descending
    extra1.sort((a, b) => a - b);
    extra2.sort((a, b) => b - a);

    const globalMin = Math.min(...basket1, ...basket2);
    let totalCost = 0;

    for (let i = 0; i < extra1.length; i++) {
        const a = extra1[i], b = extra2[i];
        totalCost += Math.min(a, b, 2 * globalMin);
    }

    return totalCost;
}
