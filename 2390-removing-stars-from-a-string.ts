function removeStars(s: string): string {
  const stack: string[] = [];
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "*") {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }

  for (let i = 0; i < stack.length; i++) {
    result = result + stack[i];
  }
  return result;
}

console.log(removeStars("leet**cod*e"));
