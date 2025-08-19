function moveZeroes(nums: number[]): void {
  let i = 0;
  let j = 1;

  while (i < nums.length && j < nums.length) {
    if (nums[i] === 0 && nums[j] !== 0) {
      let k = nums[i];
      nums[i] = nums[j];
      nums[j] = k;
      i++;
      j++;
    }

    if (nums[i] === 0 && nums[j] === 0) {
      j++;
    }

    if (nums[i] !== 0 && nums[j] === 0) {
      i++;
      j++;
    }

    if (nums[i] !== 0 && nums[j] !== 0) {
      i++;
      j++;
    }
  }

  console.log(nums);

  return;
}

moveZeroes([1, 0, 1]);
