function canJump(nums: number[]): boolean {
  let j = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= j) {
      j = i;
    }
  }

  if (j === 0) {
    return true;
  }

  return false;
}

console.log(canJump([2, 3, 1, 1, 4]));
