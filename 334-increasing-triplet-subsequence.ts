function increasingTriplet(nums: number[]): boolean {
  let i = Infinity;
  let j = Infinity;

  for (let m = 0; m < nums.length; m++) {
    if (nums[m] <= i) {
      i = nums[m];
    } else {
      if (nums[m] <= j) {
        j = nums[m];
      } else {
        return true;
      }
    }
  }

  return false;
}
