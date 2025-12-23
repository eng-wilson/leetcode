function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map();

  const answer: number[][] = Array.from({ length: nums.length + 1 }, () => []);
  const finalAnswer: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  for (let i = 0; i < nums.length; i++) {
    (answer[map.get(nums[i])] ?? []).push(nums[i]);
    map.set(nums[i], -1);
  }

  for (let i = nums.length; i >= 0; i--) {
    if (answer[i] && answer[i].length > 0) {
      finalAnswer.push(...answer[i]);
    }
  }

  return finalAnswer.slice(0, k);
}

console.log(topKFrequent([1], 1));
