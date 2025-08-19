function isSubsequence(s: string, t: string): boolean {
  let i = 0;
  let j = 0;

  let answer = false;

  if (!s && !t) {
    return true;
  }

  if (s && !t) {
    return false;
  }

  if (!s && t) {
    return true;
  }

  while (i <= s.length || j <= t.length) {
    console.log(s[i], t[j]);
    if (s[i] === t[j]) {
      i++;
      j++;
    }
    if (s[i] !== t[j]) {
      j++;
    }

    if (j >= t.length && i < s.length) {
      return false;
    }

    if (i === s.length) {
      return true;
    }
  }

  return i > s.length;
}

console.log(isSubsequence("acb", "ahbgdc"));
