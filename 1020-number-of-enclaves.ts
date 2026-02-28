function numEnclaves(grid: number[][]): number {
  let count = 0;
  let visited = new Set();

  function bfs(i: number, j: number) {
    visited.add(`${i},${j}`);

    const queue = [[i, j]];
    let newCount = 0;
    let isBorder = false;
    let head = 0;

    while (head < queue.length) {
      const [x, y] = queue[head]!;

      head++;

      newCount++;
      visited.add(`${x},${y}`);

      const directions = [
        [x + 1, y],
        [x - 1, y],
        [x, y + 1],
        [x, y - 1],
      ];

      if (x >= grid.length || x < 0 || y >= grid[0].length || y < 0) {
        isBorder = true;
      }

      for (const [newX, newY] of directions) {
        if (
          newX >= grid.length ||
          newX < 0 ||
          newY >= grid[0].length ||
          newY < 0
        ) {
          isBorder = true;
          continue;
        }

        if (!visited.has(`${newX},${newY}`) && grid[newX][newY] === 1) {
          visited.add(`${newX},${newY}`);
          queue.push([newX, newY]);
        }
      }
    }
    return isBorder ? 0 : newCount;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1 && !visited.has(`${i},${j}`)) {
        count += bfs(i, j);
      }
    }
  }

  return count;
}

console.log(
  numEnclaves([
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ]),
);
console.log(
  numEnclaves([
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ]),
);
