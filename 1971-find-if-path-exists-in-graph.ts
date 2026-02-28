function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number,
): boolean {
  const graphs: Map<number, number[]> = new Map();

  for (let i = 0; i < n; i++) {
    graphs.set(i, []);
  }

  for (const edge of edges) {
    graphs.get(edge[0])?.push(edge[1]);
    graphs.get(edge[1])?.push(edge[0]);
  }

  let visited = Array(n).fill(0);
  let answer = false;

  function dfs(src: number): boolean {
    if (visited[src] === 2) return true;
    if (visited[src] === 1) return false;
    if (src === destination) {
      answer = true;
      return true;
    }

    visited[src] = 1;

    for (const neighbor of graphs.get(src)!) {
      dfs(neighbor);
    }

    visited[src] = 2;
    return true;
  }

  dfs(source);

  return answer;
}

console.log(
  validPath(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2,
  ),
);
