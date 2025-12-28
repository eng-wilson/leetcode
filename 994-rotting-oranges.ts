function orangesRotting(grid: number[][]): number {
  let answer = 0;

  const rottenPositions: number[][] = [];
  let freshOranges = 0;

  function bfs(positions: number[][]) {
    const queue = positions;

    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    while (queue.length && freshOranges > 0) {
      const queueLength = queue.length;

      for (let i = 0; i < queueLength; i++) {
        const item = queue.shift()!;
        const x = item?.[0]!;
        const y = item?.[1]!;

        directions.forEach((dir) => {
          const nx = x + dir[0];
          const ny = y + dir[1];

          if (
            nx >= 0 &&
            nx < grid.length &&
            ny >= 0 &&
            ny < grid[0].length &&
            grid[nx][ny] === 1
          ) {
            freshOranges--;

            grid[nx][ny] = 2;
            queue.push([nx, ny]);
          }
        });
      }

      answer++;
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        rottenPositions.push([i, j]);
      }
      if (grid[i][j] === 1) {
        freshOranges++;
      }
    }
  }

  bfs(rottenPositions);

  if (freshOranges > 0) return -1;

  return answer;
}

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
