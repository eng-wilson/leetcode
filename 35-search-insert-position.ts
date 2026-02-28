function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (nums[mid] === target) {
      return mid;
    }

    if (target > nums[mid]) {
      left = mid + 1;
    }

    if (target < nums[mid]) {
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  if (target > nums[mid]) {
    return mid + 1;
  } else {
    if (mid - 1 <= 0) {
      return 0;
    }
    return mid - 1;
  }
}

console.log(searchInsert([1, 3], 2));
