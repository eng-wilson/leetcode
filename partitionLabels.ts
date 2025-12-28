function partitionLabels(s: string): number[] {
  const mapStart = new Map<string, number>();
  const mapEnd = new Map<string, number>();

  const ans: number[] = [];
  let start = 0;
  let final = 0;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (mapStart.has(ch)) {
      mapEnd.set(ch, i);
    } else {
      mapStart.set(ch, i);
    }
  }

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    const endIdx = mapEnd.get(ch)!;
    final = Math.max(final, endIdx);

    if (i >= final) {
      ans.push(final + 1 - start);
      start = i + 1;
    }
  }

  return ans;
}

console.log(partitionLabels("ababcbacadefegdehijhklij"));
console.log(partitionLabels("eccbbbbdec"));
