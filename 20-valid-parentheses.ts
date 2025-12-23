function isValid(s: string): boolean {
  const map: { [key: string]: string } = {
    [")"]: "(",
    ["]"]: "[",
    ["}"]: "{",
  };
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && map[s[i]] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length > 0 ? false : true;
}

console.log(isValid("()[]{}"));
