function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  if (nums[0] === target) {
    return 0;
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) {
      return mid;
    }

    if (target > nums[mid]) {
      left = mid + 1;
    }
    if (target < nums[mid]) {
      right = mid - 1;
    }
  }

  return -1;
}

[-1, 0, 3, 5, 9, 12];
