function findMaxAverage(nums: number[], k: number): number {
  // sum of the first window
  let windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += nums[i];

  let maxSum = windowSum;

  // slide the window: add the new right element, remove the left element
  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    if (windowSum > maxSum) maxSum = windowSum;
  }

  return maxSum / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
// console.log(findMaxAverage([5], 1));
