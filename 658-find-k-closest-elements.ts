function findClosestElements(arr: number[], k: number, x: number): number[] {
  let left = 0;

  if (x < arr[0]) {
    left = 0;
  }
  if (x > arr[arr.length - 1]) {
    left = arr.length - k;
  }

  if (x >= arr[0] && x <= arr[arr.length - 1]) {
    let diff: number = arr[arr.length - 1];
    let index = -1;

    for (let i = 0; i < arr.length; i++) {
      if (Math.abs(arr[i] - x) < diff) {
        diff = Math.abs(arr[i] - x);
        index = i;
      }
    }

    left = index - Math.floor(k / 2);
  }

  const ans = [];

  for (let i = left; i < left + k; i++) {
    ans.push(arr[i]);
  }

  return ans;
}

console.log(findClosestElements([1, 1, 2, 3, 4, 5], 4, -1));
