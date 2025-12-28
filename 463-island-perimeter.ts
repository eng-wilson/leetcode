function islandPerimeter(grid: number[][]): number {
  let result = 0;
  const map = new Set();

  function dfs(x: number, y: number): number {
    if (map.has(`${x},${y}`)) {
      return 0;
    }
    if (
      x < 0 ||
      y < 0 ||
      x >= grid.length ||
      y >= grid[0].length ||
      grid[x][y] === 0
    ) {
      return 1;
    }

    map.add(`${x},${y}`);
    result = dfs(x + 1, y);
    result += dfs(x - 1, y);
    result += dfs(x, y + 1);
    result += dfs(x, y - 1);

    return result;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        return dfs(i, j);
      }
    }
  }

  return result;
}
