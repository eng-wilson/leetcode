function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return 1;
  }

  let left = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[left - 1]) {
      nums[left] = nums[i];
      left++;
    }
  }

  return left;
}
