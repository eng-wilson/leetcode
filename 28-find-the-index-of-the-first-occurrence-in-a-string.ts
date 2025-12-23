function strStr(haystack: string, needle: string): number {
  let max = needle.length;
  let count = 0;
  let j = 0;
  let initial = 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[j]) {
      if (count === 0) {
        initial = i;
      }

      j++;
      count++;

      console.log(i, j, count);

      if (count === max) {
        return initial;
      }
    } else {
      count = 0;
      j = 0;
    }
  }
  return -1;
}

console.log(strStr("mississippi", "issip"));
