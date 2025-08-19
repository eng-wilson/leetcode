function pivotIndex(nums: number[]): number {
  const sumArray: number[] = [];
  let reverseSumArray: number[] = [];
  let sum = 0;

  if (nums.length === 1) {
    return 0;
  }

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    sumArray.push(sum);
  }

  sum = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    sum = sum + nums[i];
    reverseSumArray.push(sum);
  }

  reverseSumArray = [...reverseSumArray.reverse()];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 && reverseSumArray[i + 1] === 0) {
      return 0;
    }

    if (i === nums.length - 1 && sumArray[i - 1] === 0) {
      return i;
    }

    if (sumArray[i - 1] === reverseSumArray[i + 1]) {
      return i;
    }
  }

  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
