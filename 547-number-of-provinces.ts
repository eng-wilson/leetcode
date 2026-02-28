function findCircleNum(isConnected: number[][]): number {
  const graphs: Map<number, number[]> = new Map();

  for (let i = 0; i < isConnected.length; i++) {
    graphs.set(i, []);
  }

  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected[0].length; j++) {
      let val = isConnected[i][j];
      if (val === 1) {
        graphs.get(i)!.push(j);
      }
    }
  }

  let visited = new Set();
  let count = 0;

  function graphSearch(value: number): number {
    if (visited.has(value)) return 0;

    visited.add(value);

    const neighbors = graphs.get(value)!;

    for (let n of neighbors) {
      graphSearch(n);
    }

    return 1;
  }

  for (let i = 0; i < isConnected.length; i++) {
    count += graphSearch(i);
  }

  return count;
}

console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ]),
);
