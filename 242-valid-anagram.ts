function isAnagram(s: string, t: string): boolean {
  let word1 = new Map();
  let word2 = new Map();

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    word1.set(s[i], (word1.get(s[i]) || 0) + 1);
    word2.set(t[i], (word2.get(t[i]) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (word1.get(s[i]) !== word2.get(s[i])) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram"));
