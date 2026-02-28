function mergeAlternately(word1: string, word2: string): string {
  let i = 0;
  let j = 0;

  let ans: string = "";

  while (ans.length < word1.length + word2.length) {
    if (i < word1.length) {
      ans += word1[i];
      i++;
    }
    if (j < word2.length) {
      ans += word2[j];
      j++;
    }
  }

  return ans;
}
