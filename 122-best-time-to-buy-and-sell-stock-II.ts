function maxProfit2(prices: number[]): number {
  let sum = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      sum = sum + prices[i] - prices[i - 1];
    }
  }
  return sum;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
