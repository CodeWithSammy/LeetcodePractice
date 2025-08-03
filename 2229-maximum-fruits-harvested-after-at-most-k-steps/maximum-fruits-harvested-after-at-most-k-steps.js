/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
function maxTotalFruits(fruits, startPos, k) {
  let maxFruits = 0;
  let total = 0;
  let left = 0;

  for (let right = 0; right < fruits.length; right++) {
    total += fruits[right][1];

    // Try shrinking from the left if we can't reach this window in ≤ k steps
    while (left <= right && !canReach(fruits, left, right, startPos, k)) {
      total -= fruits[left][1];
      left++;
    }

    maxFruits = Math.max(maxFruits, total);
  }

  return maxFruits;
}

function canReach(fruits, left, right, startPos, k) {
  const leftPos = fruits[left][0];
  const rightPos = fruits[right][0];

  // Two ways: go left first then right, or right first then left
  const toLeftThenRight = Math.abs(startPos - leftPos) + (rightPos - leftPos);
  const toRightThenLeft = Math.abs(startPos - rightPos) + (rightPos - leftPos);

  return Math.min(toLeftThenRight, toRightThenLeft) <= k;
}
