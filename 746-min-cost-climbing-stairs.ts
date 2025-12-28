function minCostClimbingStairs(cost: number[]): number {
  if (cost.length === 1) return cost[0];
  if (cost.length === 2) return Math.min(cost[0], cost[1]);

  const auxArr = Array(cost.length + 1).fill(0);

  for (let i = 2; i <= cost.length; i++) {
    auxArr[i] = Math.min(
      auxArr[i - 2] + cost[i - 2],
      auxArr[i - 1] + cost[i - 1]
    );
  }

  return auxArr[auxArr.length - 1];
}

console.log(minCostClimbingStairs([10, 15, 20]));
