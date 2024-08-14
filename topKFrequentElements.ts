function topKFrequent(nums: number[], k: number): number[] {
  const answer = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!answer.has(nums[i])) {
      answer.set(nums[i], 1);
    } else {
      answer.set(nums[i], answer.get(nums[i]) + 1);
    }
  }

  const newMap = new Map(
    [...answer.entries()]
      .sort((a, b) => Number(b[1]) - Number(a[1]))
      .slice(0, k)
  );

  return [...newMap.keys()];
}

console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
