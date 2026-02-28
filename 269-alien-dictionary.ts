function alienOrder(words: string[]): string {
  const graphs: Map<string, string[]> = new Map();

  const ans: string[] = [];

  for (const word of words) {
    for (const char of word) {
      graphs.set(char, []);
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];

    {
      if (w1.length > w2.length && w1.startsWith(w2)) {
        return "";
      }

      for (let j = 0; j < Math.min(w1.length, w2.length); j++) {
        if (w1[j] !== w2[j]) {
          graphs.get(w1[j])?.push(w2[j]);
          break;
        }

        if (w1[j] === w2[j]) {
          continue;
        }

        graphs.get(w1[j])?.push(w2[j]);
      }
    }
  }

  const seen: Map<string, number> = new Map();

  function dfs(node: string) {
    if (seen.get(node) === 2) {
      return true;
    }
    if (seen.get(node) === 1) {
      // cycle
      return false;
    }

    seen.set(node, 1);

    const nextList = graphs.get(node);

    if (!nextList) {
      return true;
    }

    for (const char of graphs.get(node)!) {
      if (!dfs(char)) {
        return false;
      }
    }

    ans.push(node);
    seen.set(node, 2);
    return true;
  }

  for (const word of words) {
    for (const char of word) {
      if (!dfs(char)) {
        return "";
      }
    }
  }

  ans.reverse();

  return ans.join("");
}

// console.log(alienOrder(["wrt", "wrf", "er", "ett", "rftt"]));
// console.log(alienOrder(["zy", "zx"]));
// console.log(alienOrder(["abc", "ab"]));
console.log(
  alienOrder([
    "ozvcdpgfq",
    "mridvkklqj",
    "dpwecbwor",
    "xxtistijm",
    "xxuon",
    "tudbazpggu",
    "hnuumktbjy",
    "bogbcoi",
  ]),
);
