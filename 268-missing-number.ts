function missingNumber(nums: number[]): number {
  let lastSeen = -1;
  const map = new Set(nums);

  for (let i = 0; i < nums.length; i++) {
    if (map.has(lastSeen + 1)) {
      lastSeen++;
    } else {
      return lastSeen + 1;
    }
  }
  return lastSeen + 1;
}

console.log(missingNumber([0, 1]));
