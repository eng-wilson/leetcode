function rotate(nums: number[], k: number): void {
  if (nums.length <= 1) {
    return;
  }

  nums.reverse();

  let i = 0;
  let j = (k % nums.length) - 1;

  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }

  i = k % nums.length;
  j = nums.length - 1;

  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
}
