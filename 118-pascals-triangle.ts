function generate(numRows: number): number[][] {
  const ans: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    const row: number[] = Array(i + 1).fill(1);

    if (i === 0) {
      ans.push(row);
    } else {
      ans.push(row);

      for (let j = 0; j <= ans[i - 1].length; j++) {
        if (j > 0 && j < ans[i - 1].length) {
          ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j];
        }
      }
    }
  }
  return ans;
}

console.log(generate(5));
