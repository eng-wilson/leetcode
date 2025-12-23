function findLHS(nums: number[]): number {
  const freq = new Map();
  let output = 0;

  for (let i = 0; i < nums.length; i++) {
    freq.set(nums[i], 1 + (freq.get(nums[i]) || 0));
  }

  for (let i = 0; i < nums.length; i++) {
    if (freq.has(nums[i] + 1)) {
      output = Math.max(output, freq.get(nums[i] + 1) + freq.get(nums[i]));
    }
  }

  return output;
}

// console.log(findLHS([3, 2, 1]));
// console.log(findLHS([1, 2, 3, 4]));
console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
