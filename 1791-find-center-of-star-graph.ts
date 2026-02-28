function findCenter(edges: number[][]): number {
  const graphs: Map<number, number[]> = new Map();

  for (const edge of edges) {
    if (!graphs.has(edge[0])) {
      graphs.set(edge[0], []);
    }
    if (!graphs.has(edge[1])) {
      graphs.set(edge[1], []);
    }
    graphs.get(edge[0])?.push(edge[1]);
    graphs.get(edge[1])?.push(edge[0]);
  }

  for (const node of graphs) {
    if (node[1].length === graphs.size - 1) {
      return node[0];
    }
  }

  return 0;
}

console.log(
  findCenter([
    [1, 2],
    [2, 3],
    [4, 2],
  ]),
);
