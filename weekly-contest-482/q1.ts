function maximumScore(nums: number[]): number {
  const n = nums.length;
  const preffix = new Array(n);
  const suffix = new Array(n);

  preffix[0] = nums[0];
  suffix[n - 1] = nums[n - 1];

  let min = nums[n - 1];

  for (let i = 1; i < n; i++) {
    preffix[i] = preffix[i - 1] + nums[i];
  }

  for (let i = n - 2; i >= 0; i--) {
    min = Math.min(min, nums[i + 1]);
    suffix[i] = min;
  }

  let max = preffix[0] - suffix[0];

  for (let i = 1; i < n - 1; i++) {
    max = Math.max(max, preffix[i] - suffix[i]);
  }

  return max;
}

console.log(maximumScore([1, 1]));
