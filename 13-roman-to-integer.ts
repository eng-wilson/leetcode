function romanToInt(s: string): number {
  const map: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    if (i === s.length - 1) {
      if (map[s[i]]) {
        sum += map[s[i]];
      }
    } else {
      if (map[s[i + 1]] > map[s[i]]) {
        sum -= map[s[i]];
      } else {
        sum += map[s[i]];
      }
    }
  }
  return sum;
}

console.log(romanToInt("MCMXCIV"));
