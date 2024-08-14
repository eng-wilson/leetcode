function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < board[0].length; i++) {
    let columnHash = {};
    let rowHash = {};
    let subHash = {};

    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== ".") {
        if (!columnHash[board[i][j]]) {
          columnHash[board[i][j]] = true;
        } else {
          return false;
        }
      }

      if (board[j][i] !== ".") {
        if (!rowHash[board[j][i]]) {
          rowHash[board[j][i]] = true;
        } else {
          return false;
        }
      }

      let subRow = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      let subCol = 3 * (i % 3) + (j % 3);

      if (board[subRow][subCol] !== ".") {
        if (!subHash[board[subRow][subCol]]) {
          subHash[board[subRow][subCol]] = true;
        } else {
          return false;
        }
      }
    }
  }

  return true;
}
