function validPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  let isValid = true;
  let skipped = false;

  while (left < right) {
    console.log(left, right);
    if (s[left] !== s[right]) {
      if (!skipped) {
        if (s[right - 1] === s[left]) {
          right--;
          skipped = true;
        } else {
          if (s[right] === s[left + 1]) {
            left++;
            skipped = true;
          } else {
            isValid = false;
          }
        }
      } else {
        isValid = false;
      }
    }

    left++;
    right--;
  }

  return isValid;
}

console.log(validPalindrome("eceec"));
