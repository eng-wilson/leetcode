function containsDuplicate(nums: number[]): boolean {
  const duplicates = {};
  let answer = false;

  for (let i = 0; i < nums.length; i++) {
    if (duplicates[nums[i]]) {
      duplicates[nums[i]] = duplicates[nums[i]] + 1;

      if (duplicates[nums[i]] > 1) {
        answer = true;
        return answer;
      }
    } else {
      duplicates[nums[i]] = 1;
    }
  }

  return answer;
}

console.log(containsDuplicate([1, 2, 3, 1]));
