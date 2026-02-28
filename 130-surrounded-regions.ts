/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  const visited = new Set();

  function bfs(x: number, y: number) {
    const queue = [[x, y]];

    while (queue.length) {
      const [qX, qY] = queue.shift()!;
      visited.add(`${x},${y}`);

      const directions = [
        [qX + 1, qY],
        [qX - 1, qY],
        [qX, qY + 1],
        [qX, qY - 1],
      ];

      for (const [newX, newY] of directions) {
        if (
          newX < 0 ||
          newX >= board.length ||
          newY < 0 ||
          newY >= board[0].length
        ) {
          // do something
        }
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "O") {
        bfs(i, j);
      }
    }
  }
}
