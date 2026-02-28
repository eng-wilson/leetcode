function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  if (prerequisites.length === 0) {
    return true;
  }
  const graphs: Map<number, number[]> = new Map();

  for (let i = 0; i < numCourses; i++) {
    graphs.set(i, []);
  }

  for (let requisites of prerequisites) {
    graphs.get(requisites[1])?.push(requisites[0]);
  }

  let seen = new Array(numCourses).fill(0);
  const visited: number[] = [];

  function dfs(node: number) {
    if (seen[node] === 2) {
      return true;
    }
    if (seen[node] === 1) {
      return false;
    }
    seen[node] = 1;

    for (const curr of graphs.get(node)!) {
      if (!dfs(curr)) {
        return false;
      }
    }

    seen[node] = 2;
    visited.push(node);

    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false;
    }
  }

  return true;
}

console.log(canFinish(2, [[0, 1]]));
