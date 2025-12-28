function numIslands(grid: string[][]): number {
  let islands = 0;

  const visited = new Set();

  function bfs(x: number, y: number) {
    const queue: number[][] = [];
    visited.add(`${x},${y}`);

    queue.push([x, y]);

    while (queue.length) {
      const firstPair = queue.shift();

      const [newX, newY] = firstPair!;

      const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];

      directions.forEach(([nX, nY]) => {
        if (
          newX + nX < grid.length &&
          newX + nX >= 0 &&
          newY + nY < grid[0].length &&
          newY + nY >= 0 &&
          grid[newX + nX][newY + nY] === "1" &&
          !visited.has(`${newX + nX},${newY + nY}`)
        ) {
          queue.push([newX + nX, newY + nY]);
          visited.add(`${newX + nX},${newY + nY}`);
        }
      });
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1" && !visited.has(`${i},${j}`)) {
        bfs(i, j);
        islands++;
      }
    }
  }

  return islands;
}
