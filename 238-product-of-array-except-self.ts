function productExceptSelf(nums: number[]): number[] {
  let suffix = new Array(nums.length).fill(1);
  let preffix = new Array(nums.length).fill(1);
  let answer = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    preffix[i] = preffix[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    answer[i] = preffix[i] * suffix[i];
  }

  return answer;
}

console.log(productExceptSelf([1, 2, 3, 4]));
