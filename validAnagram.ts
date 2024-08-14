function isAnagram(s: string, t: string): boolean {
  const result: { [key: string]: number } = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (result[s[i]]) {
      result[s[i]] = result[s[i]] + 1;
    } else {
      result[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (result[t[i]] > 0) {
      result[t[i]] = result[t[i]] - 1;
    } else {
      return false;
    }
  }

  return !Object.values(result).some((value) => value > 0);
}

console.log(isAnagram("anagram", "nagaram"));
