function countGoodSubstrings(s: string): number {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (
      i >= 2 &&
      s[i - 1] !== s[i] &&
      s[i - 2] !== s[i] &&
      s[i - 1] !== s[i - 2]
    ) {
      count++;
    }
  }
  return count;
}

console.log(countGoodSubstrings("xyzzaz"));
