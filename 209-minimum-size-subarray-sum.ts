function minSubArrayLen(target: number, nums: number[]): number {
  let sum = 0;
  let min = nums.length;
  let hasMin = false;

  let i = 0;
  let j = 0;

  while (i < nums.length) {
    if (sum < target && j < nums.length) {
      sum += nums[j];
      j++;
    } else {
      if (sum >= target) {
        min = Math.min(min, j - i);
        hasMin = true;
      }

      sum -= nums[i];
      i++;
    }
  }

  return hasMin ? min : 0;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
