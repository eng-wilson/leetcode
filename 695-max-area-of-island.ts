function maxAreaOfIsland(grid: number[][]): number {
  let max = 0;
  const visited = new Set();

  function bfs(x: number, y: number) {
    let sum = 1;
    const queue: number[][] = [];

    visited.add(`${x},${y}`);

    queue.push([x, y]);

    while (queue.length) {
      const firstPair: number[] = queue.shift()!;
      const [nX, nY] = firstPair;

      const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];

      directions.forEach(([dX, dY]) => {
        if (
          nX + dX < grid.length &&
          nX + dX >= 0 &&
          nY + dY < grid[0].length &&
          nY + dY >= 0 &&
          grid[nX + dX][nY + dY] === 1 &&
          !visited.has(`${nX + dX},${nY + dY}`)
        ) {
          visited.add(`${nX + dX},${nY + dY}`);
          sum++;
          queue.push([nX + dX, nY + dY]);
        }
      });
    }

    max = Math.max(sum, max);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        bfs(i, j);
      }
    }
  }

  return max;
}
