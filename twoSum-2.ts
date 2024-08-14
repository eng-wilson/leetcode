function twoSum2(numbers: number[], target: number): number[] {
  let i = 0;
  let j = 1;

  while (i < numbers.length && j < numbers.length) {
    if (numbers[i] + numbers[j] === target) {
      return [i + 1, j + 1];
    }
    if (numbers[i] + numbers[j] < target) {
      i++;
      j++;
    }
    if (numbers[i] + numbers[j] > target && i > 0) {
      i--;
    }
  }
  return [];
}
