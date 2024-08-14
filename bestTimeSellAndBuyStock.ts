function maxProfit(prices: number[]): number {
  let lowest = prices[0];
  let highest = prices[0];
  let answer = 0;

  for (let i = 1; i <= prices.length - 1; i++) {
    if (prices[i] > highest) {
      highest = prices[i];
      if (highest - lowest > answer) {
        answer = highest - lowest;
      }
    }
    if (prices[i] < lowest) {
      lowest = prices[i];
      highest = prices[i];
    }
  }

  return answer;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
