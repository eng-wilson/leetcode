function jump(nums: number[]): number {
  let jumps = 0;
  let farthest = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length - 1) {
    farthest = 0;

    for (let i = left; i <= right; i++) {
      if (i + nums[i] > farthest) {
        farthest = i + nums[i];
      }
    }
    jumps++;
    left = right + 1;
    right = farthest;
  }

  return jumps;
}

console.log(jump([2, 3, 1, 1, 4]));
