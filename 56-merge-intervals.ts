function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const ans: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    if (ans[ans.length - 1][1] >= start) {
      ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], end);
    } else {
      ans.push([start, end]);
    }
  }

  return ans;
}

console.log(
  merge([
    [4, 7],
    [1, 4],
  ]),
);
