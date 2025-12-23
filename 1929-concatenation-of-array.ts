function getConcatenation(nums: number[]): number[] {
  const ans: number[] = [];

  for (let i = 0; i < 2; i++) {
    nums.forEach((n) => ans.push(n));
  }
  return ans;
}

console.log(getConcatenation([1, 2, 1]));
