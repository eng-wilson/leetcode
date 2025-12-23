function isValid2(s: string): boolean {
  const stack: string[] = [];

  for (let i = 0; i <= s.length - 1; i++) {
    if (stack.length > 0) {
      if (
        (s[i] === ")" && stack[stack.length - 1] === "(") ||
        (s[i] === "]" && stack[stack.length - 1] === "[") ||
        (s[i] === "}" && stack[stack.length - 1] === "{")
      ) {
        stack.splice(stack.length - 1, 1);
      } else {
        stack.push(s[i]);
      }
    } else {
      stack.push(s[i]);
    }
  }

  if (stack.length === 0) {
    return true;
  }
  return false;
}

console.log(isValid("()"));
