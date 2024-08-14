function productExceptSelf(nums: number[]): number[] {
  const prefixSum: number[] = [];
  const postSum: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefixSum.push(nums[i]);
    } else {
      prefixSum.push(nums[i] * prefixSum[i - 1]);
    }
  }

  let k = 0;

  for (let j = nums.length - 1; j >= 0; j--) {
    if (j === nums.length - 1) {
      postSum.push(nums[j]);
    } else {
      postSum.push(nums[j] * postSum[k - 1]);
    }
    k++;
  }

  postSum.reverse();

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      nums[i] = postSum[i + 1];
    } else {
      if (i === nums.length - 1) {
        nums[i] = prefixSum[i - 1];
      } else {
        nums[i] = prefixSum[i - 1] * postSum[i + 1];
      }
    }
  }
  return nums;
}
