function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const ans: number[] = [];
  const adj: Map<number, number[]> = new Map();

  for (let i = 0; i < numCourses; i++) {
    adj.set(i, []);
  }

  for (let courses of prerequisites) {
    adj.get(courses[1])?.push(courses[0]);
  }

  const seen = new Array(numCourses).fill(0);

  function dfs(curr: number) {
    if (seen[curr] === 2) {
      return true;
    }
    if (seen[curr] === 1) {
      return false;
    }
    seen[curr] = 1;

    for (let next of adj.get(curr)!) {
      if (!dfs(next)) {
        return false;
      }
    }

    seen[curr] = 2;
    ans.push(curr);
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return [];
    }
  }

  return ans.reverse();
}

console.log(findOrder(2, [[0, 1]]));
