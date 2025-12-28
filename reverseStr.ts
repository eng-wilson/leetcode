function reverseStr(s: string, k: number): string {
  let ans = s.split("");
  for (let i = 0; i < s.length; i += 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, ans.length - 1);

    while (left < right) {
      [ans[left], ans[right]] = [ans[right], ans[left]];
      left++;
      right--;
    }
  }

  return ans.join("");
}

console.log(reverseStr("abcdef", 3));
