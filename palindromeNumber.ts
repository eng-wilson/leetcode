function isPalindrome(x: number): boolean {
  if (String(x).split("").reverse().join("") === String(x)) {
    return true;
  }
  return false;
}

console.log(isPalindrome(121));
