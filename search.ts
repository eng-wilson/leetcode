function search(nums: number[], target: number): number {
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    let m = Math.floor(i + (j - i) / 2);

    if (target === nums[m]) {
      return m;
    }
    if (target > nums[m]) {
      i = m + 1;
    }
    if (target < nums[m]) {
      j = m - 1;
    }
  }
  return -1;
}
