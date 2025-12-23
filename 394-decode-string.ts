function decodeString(s: string): string {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[") {
      let amount = Number(s[i - 1]);
      let openBrackets = 1;
      let newString = s.slice(i + 1);

      while (openBrackets) {
        for (let j = 0; j < newString.length; j++) {
          if (newString[j] === "[") {
            openBrackets++;
          } else {
            if (newString[j] === "]") {
              openBrackets--;
            } else {
              while (amount) {
                stack.push(newString[j]);
              }
            }
          }
        }
      }
    }
  }

  console.log(stack);
  return "";
}

console.log(decodeString("3[a]2[bc]"));
