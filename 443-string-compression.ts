function compress(chars: string[]): number {
  let s = "";
  let count = 0;
  let currentChar = "";

  if (chars.length === 0) return 0;

  for (let i = 0; i < chars.length; i++) {
    if (!currentChar) {
      currentChar = chars[i];
      count = 1;
    } else {
      if (chars[i] === currentChar) {
        count++;
      } else {
        s = s + currentChar;
        if (count > 1) {
          s = s + count;
        }

        currentChar = chars[i];
        count = 1;
      }
    }
  }

  if (currentChar) {
    s = s + currentChar;
    if (count > 1) {
      s = s + count;
    }
  }

  for (let i = 0; i < s.length; i++) {
    chars[i] = s[i];
  }

  return s.length;
}
