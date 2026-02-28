function rob(nums: number[]): number {
  const dp = [];

  if (nums.length >= 1) {
    dp.push(nums[0]);
  }

  if (nums.length >= 2) {
    dp.push(Math.max(nums[1], dp[0]));
  }

  for (let i = 2; i < nums.length; i++) {
    let newMax = Math.max(dp[i - 1], dp[i - 2] + nums[i]);

    dp.push(newMax);
  }

  return dp[dp.length - 1];
}
