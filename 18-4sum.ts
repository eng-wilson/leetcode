function fourSum(nums: number[], target: number): number[][] {
  const ans: number[][] = [];

  let left1 = 0;
  let left2 = 1;
  let right1 = nums.length - 2;
  let right2 = nums.length - 1;

  nums.sort((a, b) => a - b);

  while (left2 < right1) {
    const sum = nums[left1] + nums[left2] + nums[right1] + nums[right2];
    if (sum === target) {
      ans.push([nums[left1], nums[left2], nums[right1], nums[right2]]);
      left2++;

      right1--;
    } else {
      if (sum > target) {
        if (right1 === right2 - 1) {
          right1--;
        } else {
          right2--;
        }
      }

      if (sum < target) {
        if (left2 === left1 + 1) {
          left2++;
        } else {
          left1++;
        }
      }
    }
  }

  return ans;
}
