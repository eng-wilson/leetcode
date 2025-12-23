function groupAnagrams2(strs: string[]): string[][] {
  const answer: any = {};

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i].split("").sort().join();
    if (typeof answer[word] != "undefined") {
      answer[word] = [...answer[word], strs[i]];
    } else {
      answer[word] = [strs[i]];
    }
  }

  return Object.values(answer);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
