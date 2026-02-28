function finalPrices(prices: number[]): number[] {
  const answer: number[] = [];

  for (let i = 0; i < prices.length; i++) {
    let j = i + 1;
    while (j < prices.length) {
      if (prices[j] <= prices[i]) {
        answer.push(prices[i] - prices[j]);
        break;
      } else {
        if (j === prices.length - 1) {
          answer.push(prices[i]);
        }
      }
      j++;
    }
    if (i === prices.length - 1) {
      answer.push(prices[i]);
    }
  }

  return answer;
}

console.log(finalPrices([8, 4, 6, 2, 3]));
