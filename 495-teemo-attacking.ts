function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let total = 0;
  let hasPoison = false;

  for (let i = 0; i < timeSeries.length; i++) {
    if (hasPoison) {
      if (timeSeries[i] <= timeSeries[i - 1] + duration - 1) {
        total = total + timeSeries[i] - timeSeries[i - 1];
      } else {
        total += duration;
      }
    }

    if (i === timeSeries.length - 1) {
      total += duration;
    }

    if (!hasPoison) {
      hasPoison = true;
    }
  }
  return total;
}

console.log(findPoisonedDuration([1, 3, 5, 7, 9, 11, 13, 15], 3));
