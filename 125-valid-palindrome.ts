function isPalindrome(s: string): boolean {
  let input = s.replace(/[^a-zA-Z0-9]/g, "").toLocaleLowerCase();

  let i = 0;
  let j = input.length - 1;

  while (i < j) {
    if (input[i] !== input[j]) {
      return false;
    }

    i++;
    j--;
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
