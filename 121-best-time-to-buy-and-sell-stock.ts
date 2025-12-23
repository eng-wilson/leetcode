function maxProfit(prices: number[]): number {
  let profit = 0;
  let highest = 0;
  let lowest = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[lowest]) {
      lowest = i;
      highest = i;
    }

    if (prices[i] > prices[highest]) {
      highest = i;
      let diff = prices[highest] - prices[lowest];

      profit = Math.max(diff, profit);
    }
  }

  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
