function maxOperations(nums: number[], k: number): number {
  let operations = 0;
  let auxArray = [...nums].sort((a, b) => a - b);
  let i = 0;
  let j = auxArray.length - 1;

  while (i < j) {
    const sum = auxArray[i] + auxArray[j];
    if (sum === k) {
      operations++;
      i++;
      j--;
    } else if (sum < k) {
      i++;
    } else {
      j--;
    }
  }
  return operations;
}
