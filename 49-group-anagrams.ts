function groupAnagrams(strs: string[]): string[][] {
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split("").sort().join();

    map.set(sorted, [...(map.get(sorted) || []), strs[i]]);
  }

  return [...map.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
