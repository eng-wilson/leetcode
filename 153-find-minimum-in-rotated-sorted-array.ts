function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
      continue;
    }

    if (nums[mid] < nums[right] && nums[mid] > nums[mid - 1]) {
      right = mid - 1;
      continue;
    }

    return nums[mid];
  }

  return nums[mid];
}

console.log(findMin([3, 2, 1]));
