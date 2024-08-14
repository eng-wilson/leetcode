function maxSubArray(nums: number[]): number {
  let maxSum = nums[0];
  let sum = maxSum;

  for (let i = 1; i < nums.length; i++) {
    if (sum + nums[i] > nums[i]) {
      sum = sum + nums[i];
    } else {
      sum = nums[i];
    }

    if (sum > maxSum) {
      maxSum = sum;
    }
  }

  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
