function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let highest = -1;
  let answer: boolean[] = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > highest) {
      highest = candies[i];
    }
  }
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= highest) {
      answer.push(true);
    } else {
      answer.push(false);
    }
  }
  return answer;
}
