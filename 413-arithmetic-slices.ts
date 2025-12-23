function numberOfArithmeticSlices(nums: number[]): number {
  let sum = 0;
  let right = 0;
  let diff = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    right = i + 1;
    diff = nums[right] - nums[i];

    while (nums[right] - nums[right - 1] === diff) {
      right++;

      if (right - i >= 3) {
        sum++;
      }
    }
  }
  return sum;
}

console.log(numberOfArithmeticSlices([1, 2, 3, 4]));
