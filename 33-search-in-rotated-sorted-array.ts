function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    console.log(left, mid, right);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] >= nums[right]) {
      if (target > nums[mid] || target <= nums[right]) {
        left = mid + 1;
        continue;
      } else {
        right = mid - 1;
      }
    }

    if (nums[mid] <= nums[right]) {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
        continue;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

// console.log(search([3, 1, 2], 2));
// console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8));
// console.log(search([8, 1, 2, 3, 4, 5, 6, 7], 8));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1, 3], 3));
