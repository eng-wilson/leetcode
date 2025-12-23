function findAnagrams(s: string, p: string): number[] {
  const ans = [];
  let j = 0;
  let count = 0;
  const freqS = new Map();
  const freqP = new Map();

  for (let i = 0; i < p.length; i++) {
    freqP.set(p[i], (freqP.get(p[i]) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    j = i;

    while (
      freqP.has(s[j]) &&
      count < p.length &&
      (freqS.get(s[j]) || 0) < freqP.get(s[j])
    ) {
      const newValue = (freqS.get(s[j]) || 0) + 1;

      freqS.set(s[j], newValue);

      if (newValue <= freqP.get(s[j])) {
        count++;
      }

      if (count === p.length) {
        ans.push(i);
      }
      j++;
    }
    count = 0;
    freqS.clear();
  }
  return ans;
}

console.log(findAnagrams("abab", "ab"));
