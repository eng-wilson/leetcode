function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let j = 0;
  let freq = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (freq.has(nums[i])) {
      if (Math.abs(freq.get(nums[i]) - i) <= k) {
        return true;
      } else {
        freq.set(nums[i], i);
      }
    } else {
      freq.set(nums[i], i);
    }
  }

  return false;
}

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
