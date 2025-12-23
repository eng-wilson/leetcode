function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let ans: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    if (nums[i] <= 0 && nums[i] !== nums[i - 1]) {
      while (j < k) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          ans.push([nums[i], nums[j], nums[k]]);
          j++;
          k--;

          while (nums[j] === nums[j - 1]) {
            j++;
          }
          while (nums[k] === nums[k + 1]) {
            k--;
          }
        }
        if (nums[i] + nums[j] + nums[k] < 0) {
          j++;
        }
        if (nums[i] + nums[j] + nums[k] > 0) {
          k--;
        }
      }
    }
  }

  return ans;
}

console.log(
  threeSum([2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10])
);
