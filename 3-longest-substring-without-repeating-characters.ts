function lengthOfLongestSubstring(s: string): number {
  let output = 0;
  let right = 0;
  let seen = new Set();

  for (let i = 0; i < s.length; i++) {
    while (right < s.length && !seen.has(s[right])) {
      seen.add(s[right]);
      right++;
      output = Math.max(right - i, output);
    }
    seen.delete(s[i]);
  }

  return output;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
