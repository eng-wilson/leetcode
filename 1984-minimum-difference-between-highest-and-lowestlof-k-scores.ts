function minimumDifference(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let min = 0;

  if (nums.length <= 1) {
    return min;
  }

  for (let i = k - 1; i < nums.length; i++) {
    if (min === 0) {
      min = nums[i] - nums[i - k + 1];
    } else {
      min = Math.min(min, nums[i] - nums[i - k + 1]);
    }
  }
  return min;
}

console.log(minimumDifference([9, 4, 1, 7], 2));
