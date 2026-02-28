function twoSum(numbers: number[], target: number): number[] {
  let i = 0;
  let j = numbers.length - 1;

  const ans = [];

  while (i < j) {
    if (numbers[i] + numbers[j] > target) {
      j--;
    }
    if (numbers[i] + numbers[j] < target) {
      i++;
    }

    if (numbers[i] + numbers[j] === target) {
      ans.push(i + 1);
      ans.push(j + 1);
      break;
    }
  }
  return ans;
}

console.log(twoSum([2, 7, 11, 15], 9));
