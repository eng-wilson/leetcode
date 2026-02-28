function earliestAcq(logs: number[][], n: number): number {
  logs.sort((a, b) => a[0] - b[0]);

  const graphs: Map<number, Set<number>> = new Map();

  for (let i = 0; i < n; i++) {
    graphs.set(i, new Set([i]));
  }

  for (let i = 0; i < logs.length; i++) {
    const p1 = logs[i][1];
    const p2 = logs[i][2];

    for (let s2 of graphs.get(p2)!) {
      graphs.get(p1)?.add(s2);
    }

    for (let p3 of graphs.get(p1)!) {
      graphs.set(p3, graphs.get(p1)!);
    }

    if (graphs.get(p1)?.size === n) {
      return logs[i][0];
    }
  }

  return -1;
}

console.log(
  earliestAcq(
    [
      [20190101, 0, 1],
      [20190104, 3, 4],
      [20190107, 2, 3],
      [20190211, 1, 5],
      [20190224, 2, 4],
      [20190301, 0, 3],
      [20190312, 1, 2],
      [20190322, 4, 5],
    ],
    6,
  ),
);
