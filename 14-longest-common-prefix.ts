function longestCommonPrefix(strs: string[]): string {
  let ans = strs[0];
  const minLength = strs[0].length;

  if (strs.length === 0) {
    return "";
  }

  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    let aux = "";
    while (strs[i][j] && strs[0][j] && strs[i][j] === strs[0][j]) {
      aux += strs[i][j];

      j++;
    }
    if (aux.length < ans.length) {
      ans = aux;
    }
  }

  return ans;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
