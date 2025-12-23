function longestOnes(nums: number[], k: number): number {
  let maxSum = 0;
  let zeros = 0;
  let count = 0;
  let l = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeros++;
    }

    while (zeros > k) {
      if (nums[l] === 0) {
        zeros--;
      }
      l++;
    }

    count = i - l + 1;
    maxSum = Math.max(maxSum, count);
  }
  return maxSum;
}

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
