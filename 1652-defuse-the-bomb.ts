function decrypt(code: number[], k: number): number[] {
  let ans: number[] = [];

  for (let i = 0; i < code.length; i++) {
    if (k > 0) {
      let right = (i + 1) % code.length;
      let sum = 0;
      let total = k;
      while (total > 0) {
        sum += code[right];
        right = (right + 1) % code.length;
        total--;
      }
      ans.push(sum);
    }
    if (k < 0) {
      let right = i - 1 < 0 ? code.length - 1 : i - 1;
      let sum = 0;
      let total = Math.abs(k);
      while (total > 0) {
        sum += code[right];
        right = right - 1 < 0 ? code.length - 1 : right - 1;
        total--;
      }
      ans.push(sum);
    }
    if (k === 0) {
      ans.push(0);
    }
  }
  return ans;
}

console.log(decrypt([2, 4, 9, 3], -2));
