function rob(nums: number[]): number {
  const dp1 = [];
  const dp2 = [];

  if (nums.length >= 1) {
    dp1.push(nums[0]);
    dp2.push(0);
  }
  if (nums.length >= 2) {
    dp1.push(Math.max(nums[1], dp1[0]));
    dp2.push(Math.max(nums[1], dp2[0]));
  }

  if (nums.length === 2) {
    return Math.max(dp1[0], dp1[1]);
  }

  for (let i = 2; i < nums.length - 1; i++) {
    let newMax = Math.max(dp1[i - 1], dp1[i - 2] + nums[i]);

    dp1.push(newMax);
  }

  for (let i = 2; i < nums.length; i++) {
    let newMax = Math.max(dp2[i - 1], dp2[i - 2] + nums[i]);

    dp2.push(newMax);
  }

  return Math.max(dp1[dp1.length - 1], dp2[dp2.length - 1]);
}

console.log(rob([4, 1, 2, 7, 5, 3, 1]));
