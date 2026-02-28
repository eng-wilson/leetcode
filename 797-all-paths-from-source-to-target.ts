function allPathsSourceTarget(graph: number[][]): number[][] {
  const graphs: Map<number, number[]> = new Map();
  const paths: number[][] = [];

  for (let i = 0; i < graph.length; i++) {
    graphs.set(i, []);
  }

  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      graphs.get(i)?.push(graph[i][j]);
    }
  }

  function dfs(node: number, currentPath: number[]) {
    if (node === graph.length - 1) {
      paths.push([...currentPath]);
    }

    for (const neighbor of graphs.get(node)!) {
      currentPath.push(neighbor);
      dfs(neighbor, currentPath);
      currentPath.pop();
    }
  }

  dfs(0, [0]);

  return paths;
}

console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]));
