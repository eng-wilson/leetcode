function minimumTime(d: number[], r: number[]): number {
  let left = 0;
  let aux = (d[0] + d[1]) * Math.max(r[0] * r[1]);
  let right = Math.max(100, aux);

  function canFinish(availableTime: number): boolean {
    const leastCommonMultiplier =
      (r[0] / greatestCommonDivisor(r[0], r[1])) * r[1];

    const noneCanDeliver = Math.floor(availableTime / leastCommonMultiplier);
    const bothCanDeliver =
      availableTime -
      Math.floor(availableTime / r[0]) -
      Math.floor(availableTime / r[1]) +
      noneCanDeliver;

    const onlyFirstCanDeliver =
      Math.floor(availableTime / r[1]) - noneCanDeliver;
    const onlySecondCanDeliver =
      Math.floor(availableTime / r[0]) - noneCanDeliver;

    if (d[0] > onlyFirstCanDeliver + bothCanDeliver) {
      return false;
    }
    if (d[1] > onlySecondCanDeliver + bothCanDeliver) {
      return false;
    }

    const deliveriesD0 = Math.max(0, d[0] - onlyFirstCanDeliver);
    const deliveriesD1 = Math.max(0, d[1] - onlySecondCanDeliver);

    return deliveriesD0 + deliveriesD1 <= bothCanDeliver;
  }

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (canFinish(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function greatestCommonDivisor(a: number, b: number) {
  while (b) {
    [a, b] = [b, a % b];
  }

  return a;
}
