function sortArray(nums: number[]): number[] {
  if (nums.length <= 1) return nums;

  const mid = Math.floor(nums.length / 2);
  const left = sortArray(nums.slice(0, mid));
  const right = sortArray(nums.slice(mid));

  return merge(left, right);
}

function merge(a: number[], b: number[]): number[] {
  let i = 0,
    j = 0;
  const res: number[] = [];

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) res.push(a[i++]);
    else res.push(b[j++]);
  }

  return res.concat(a.slice(i)).concat(b.slice(j));
}
