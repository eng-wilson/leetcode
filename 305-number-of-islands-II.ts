function numIslands2(m: number, n: number, positions: number[][]): number[] {
  const grid: number[][] = Array.from({ length: m }, () => Array(n).fill(0));

  // for (let i = 0; i < m; i++) {
  //   grid[i] = [];
  //   for (let j = 0; j < n; j++) {
  //     grid[i][j] = 0;
  //   }
  // }

  let visited = new Map();
  let count = 0;
  const ans: number[] = [];

  function countIslands(x: number, y: number) {
    grid[x][y] = 1;

    const queue = [[x, y]];
    let head = 0;
    let isNew = true;
    count++;

    while (head < queue.length) {
      const [currentX, currentY] = queue[head];
      head++;

      visited.set(`${currentX},${currentY}`, 1);

      const directions = [
        [currentX + 1, currentY],
        [currentX - 1, currentY],
        [currentX, currentY + 1],
        [currentX, currentY - 1],
      ];

      for (const [newX, newY] of directions) {
        if (
          newX < 0 ||
          newY < 0 ||
          newX >= grid.length ||
          newY >= grid[0].length
        ) {
          continue;
        }

        if (visited.get(`${newX},${newY}`) === 2) {
          isNew = false;
          break;
        }
        if (grid[newX][newY] === 1 && visited.get(`${newX},${newY}`) !== 2) {
          queue.push([newX, newY]);
          visited.set(`${newX},${newY}`, 1);
        }
      }
    }

    visited.set(`${x},${y}`, 2);
    if (isNew) {
      ans.push(count);
    } else {
      ans.push(ans[ans.length - 1]);
      count--;
    }
  }

  for (let i = 0; i < positions.length; i++) {
    countIslands(positions[i][0], positions[i][1]);
  }

  return ans;
}

console.log(
  numIslands2(3, 3, [
    [0, 0],
    [0, 1],
    [1, 2],
    [2, 1],
  ]),
);
