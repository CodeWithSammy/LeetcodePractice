var maxProfit = function (prices) {
    let left = 0; // buy day
    let right = 1; // sell day
    let maxProfit = 0;

    while (right < prices.length) {
        if (prices[right] > prices[left]) {
            // profitable transaction
            let profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit);
        } else {
            // found a cheaper price, update buy day
            left = right;
        }
        right++;
    }

    return maxProfit;
};
