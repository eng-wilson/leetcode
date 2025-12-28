function topKFrequent(words: string[], k: number): string[] {
  const map = new Map();
  const set = new Set();
  const ans: string[] = [];
  const bucket: string[][] = Array.from({ length: words.length }, () => []);

  for (let i = 0; i < words.length; i++) {
    map.set(words[i], (map.get(words[i]) || 0) + 1);
  }

  for (let i = 0; i < words.length; i++) {
    if (!set.has(words[i])) {
      const newIndex = map.get(words[i]);

      bucket[newIndex].push(words[i]);

      set.add(words[i]);
    }
  }

  let j = bucket.length - 1;
  let count = 0;

  bucket.forEach((freq) => freq.sort());

  while (count < k && j >= 0) {
    if (bucket[j].length > 0) {
      bucket[j].forEach((word: string) => {
        if (count < k) {
          ans.push(word);
          count++;
        }
      });
    }

    j--;
  }

  return ans;
}

console.log(
  topKFrequent(
    ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
    4
  )
);
