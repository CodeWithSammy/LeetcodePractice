function shipWithinDays(weights, days) {
    // Step 1: Find the minimum and maximum possible capacity
    let left = Math.max(...weights); // Min capacity = heaviest package
    let right = weights.reduce((sum, w) => sum + w, 0); // Max capacity = sum of all weights

    // Step 2: Binary search for the minimal capacity that works
    while (left < right) {
        let mid = Math.floor((left + right) / 2); // Possible capacity

        // Step 3: Check if this capacity works within 'days'
        let neededDays = 1;
        let currentLoad = 0;

        for (let w of weights) {
            if (currentLoad + w > mid) {
                neededDays++;
                currentLoad = 0;
            }
            currentLoad += w;
        }

        // Step 4: Narrow the search space
        if (neededDays <= days) {
            right = mid; // This capacity works, try smaller
        } else {
            left = mid + 1; // Too small, try larger
        }
    }

    // Step 5: Return the minimal working capacity
    return left;
}
