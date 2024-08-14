function findDuplicate(nums: number[]): number {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      return nums[i];
    } else {
      hash[nums[i]] = nums[i];
    }
  }

  return 0;
}
