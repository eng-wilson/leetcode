function containsDuplicate(nums: number[]): boolean {
  let counter = new Map();

  for (let i = 0; i < nums.length; i++) {
    counter.set(nums[i], (counter.get(nums[i]) || 0) + 1);

    if (counter.get(nums[i]) > 1) {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
