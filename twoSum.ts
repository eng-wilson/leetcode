function twoSum(nums: number[], target: number): number[] {
  const hash: any = {};
  const answer: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const value = target - nums[i];
    if (typeof hash[value] != "undefined") {
      answer.push(...[hash[value], i]);
    } else {
      hash[nums[i]] = i;
    }
  }

  return answer;
}

console.log(twoSum([2, 7, 11, 15], 9));
