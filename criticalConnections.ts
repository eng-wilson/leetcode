function criticalConnections(n: number, connections: number[][]): number[][] {
  const graph: number[][] = Array.from({ length: n }, () => []);

  for (const [u, v] of connections) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const ans: number[][] = [];
  const disc = new Array<number>(n).fill(-1); // discovery time
  const low = new Array<number>(n).fill(0);
  let time = 0;

  function dfs(u: number, parent: number): void {
    disc[u] = low[u] = time++;

    for (const v of graph[u]) {
      if (v === parent) continue;

      if (disc[v] === -1) {
        dfs(v, u);
        low[u] = Math.min(low[u], low[v]);

        // If v can't reach an ancestor of u, edge (u,v) is a bridge
        if (low[v] > disc[u]) {
          ans.push([u, v]);
        }
      } else {
        // back-edge
        low[u] = Math.min(low[u], disc[v]);
      }
    }
  }

  // Graph is connected by problem statement, but this is safe anyway
  for (let i = 0; i < n; i++) {
    if (disc[i] === -1) dfs(i, -1);
  }

  return ans;
}
