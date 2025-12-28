function mostCommonWord(paragraph: string, banned: string[]): string {
  const map = new Map();
  const bannedSet = new Set(banned);
  let mostFrequent = 0;
  let mostFrequentWord = "";

  const words = paragraph.toLowerCase().match(/[a-z0-9]+/g) ?? [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLocaleLowerCase();

    if (!bannedSet.has(word)) {
      let newValue = 0;
      if (map.has(word)) {
        newValue = (map.get(word) || 0) + 1;
      } else {
        newValue = 1;
      }

      map.set(word, newValue);

      if (newValue >= mostFrequent) {
        mostFrequent = newValue;
        mostFrequentWord = word;
      }
    }
  }

  return mostFrequentWord;
}

console.log(mostCommonWord("Bob. hIt, baLl", ["bob", "hit"]));
