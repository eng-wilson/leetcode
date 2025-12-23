function maxVowels(s: string, k: number): number {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let maxSum = 0;
  let count = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      maxSum++;
      count++;
    }
  }

  maxSum = count;

  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i]) && !vowels.has(s[i - k])) {
      count++;
    }
    if (!vowels.has(s[i]) && vowels.has(s[i - k])) {
      count--;
    }

    if (count > maxSum) {
      maxSum = count;
    }
  }

  return maxSum;
}

console.log(maxVowels("leetcode", 3));
