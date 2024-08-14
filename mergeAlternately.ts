function mergeAlternately(word1: string, word2: string): string {
  let i = 0;
  let j = 0;
  let answer = "";

  while (word1[i] || word2[j]) {
    if (word1[i]) {
      answer += word1[i];
    }
    if (word2[j]) {
      answer += word2[j];
    }
    i++;
    j++;
  }

  return answer;
}
