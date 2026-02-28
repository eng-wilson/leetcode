function sortedSquares(nums: number[]): number[] {
  const ans = Array(nums.length);

  let i = 0;
  let j = nums.length - 1;
  let k = nums.length - 1;

  while (k >= 0) {
    if (Math.pow(nums[i], 2) > Math.pow(nums[j], 2)) {
      ans[k] = Math.pow(nums[i], 2);
      i++;
    } else {
      ans[k] = Math.pow(nums[j], 2);
      j--;
    }
    k--;
  }

  return ans;
}
