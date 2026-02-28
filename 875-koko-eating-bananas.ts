function minEatingSpeed(piles: number[], h: number): number {
  let left = 1;
  let right = 0;

  for (let i = 0; i < piles.length; i++) {
    right = Math.max(right, piles[i]);
  }

  let sum = right;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let timeSpent = 0;

    for (let i = 0; i < piles.length; i++) {
      timeSpent += Math.ceil(piles[i] / mid);
    }

    if (timeSpent <= h) {
      right = mid - 1;
    }

    if (timeSpent > h) {
      left = mid + 1;
    }
  }

  return left;
}
