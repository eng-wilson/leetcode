function isPalindrome(s: string): boolean {
  let result = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  if (!result) {
    return true;
  }

  let i = 0;
  let j = result.length - 1;

  while (i <= j) {
    if (result[i] === result[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}

isPalindrome("A man, a plan, a canal: Panama");
