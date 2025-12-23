function divisorSubstrings(num: number, k: number): number {
  const nums = num.toString();
  let sum = 0;
  let chars = "";

  for (let i = 0; i < nums.length; i++) {
    let j = i;
    chars = "";
    while (chars.length < k && i <= nums.length - k) {
      chars += nums[j];
      j++;
    }

    if (num % Number(chars) === 0) {
      sum++;
    }
  }

  return sum;
}

console.log(divisorSubstrings(240, 2));
