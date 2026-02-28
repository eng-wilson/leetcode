function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < board.length; i++) {
    let line = new Set();
    let column = new Set();
    let grid = new Set();

    for (let j = 0; j < board[i].length; j++) {
      if (line.has(board[i][j]) && !!Number(board[i][j])) {
        return false;
      }
      line.add(board[i][j]);
    }

    for (let j = 0; j < board[i].length; j++) {
      if (column.has(board[j][i]) && !!Number(board[j][i])) {
        return false;
      }
      column.add(board[j][i]);
    }

    if (i % 3 === 0) {
      for (let j = 0; j < board[i].length; j += 3) {
        for (let l = 0; l < 3; l++) {
          for (let k = 0; k < 3; k++) {
            if (
              grid.has(board[i + l][j + k]) &&
              !!Number(board[i + l][j + k])
            ) {
              return false;
            }
            grid.add(board[i + l][j + k]);
          }
        }
        grid.clear();
      }
    }

    line.clear();
    column.clear();
    grid.clear();
  }

  return true;
}

console.log(
  isValidSudoku([
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."],
  ]),
);
