/**
 Do not return anything, modify rooms in-place instead.
 */
function wallsAndGates(rooms: number[][]): void {
  const queue: number[][] = [];
  const visited = new Set();
  let head = 0;

  function bfs(x: number, y: number) {
    queue.push([x, y, 1]);

    while (head < queue.length) {
      const [posX, posY, steps] = queue[head];
      head++;

      visited.add(`${posX},${posY}`);

      const directions = [
        [posX + 1, posY],
        [posX - 1, posY],
        [posX, posY + 1],
        [posX, posY - 1],
      ];

      for (const [newX, newY] of directions) {
        if (
          newX < 0 ||
          newY < 0 ||
          newX >= rooms.length ||
          newY >= rooms[0].length
        ) {
          continue;
        }

        if (rooms[newX][newY] === 0) {
          continue;
        }
        if (rooms[newX][newY] === -1) {
          continue;
        }
        if (!visited.has(`${newX},${newY}`)) {
          if (rooms[newX][newY] > steps) {
            rooms[newX][newY] = steps;
          }
          queue.push([newX, newY, steps + 1]);
          visited.add(`${newX},${newY}`);
        }
      }
    }
    visited.clear();
  }

  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[0].length; j++) {
      if (rooms[i][j] === 0 && !visited.has(`${i},${j}`)) {
        bfs(i, j);
      }
    }
  }
}

let rooms = [
  [2147483647, -1, 0, 2147483647],
  [2147483647, 2147483647, 2147483647, -1],
  [2147483647, -1, 2147483647, -1],
  [0, -1, 2147483647, 2147483647],
];

console.log(wallsAndGates(rooms));

console.log(rooms);
