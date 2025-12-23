function longestConsecutive(nums: number[]): number {
  const map = new Set();
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    map.add(nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];

    if (!map.has(current - 1)) {
      let length = 0;
      while (map.has(current + length)) {
        map.delete(current);
        length++;
      }

      max = Math.max(length, max);
    }
  }

  return max;
}

// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));
