function cutOffTree(forest: number[][]): number {
  let steps = 0;
  let x = 0;
  let y = 0;
  let previous = forest[0][0];

  let total = 0;

  for (let i = 0; i < forest.length; i++) {
    for (let j = 0; j < forest[i].length; j++) {
      if (forest[i][j] > 0) {
        total++;
      }
    }
  }

  const xSize = forest.length;
  const ySize = forest[0].length;

  function canGoUp(x: number, y: number) {
    return x < xSize - 1 && forest[x + 1][y] > previous;
  }
  function canGoDown(x: number, y: number) {
    return x > 0 && forest[x - 1][y] > previous;
  }
  function canGoRight(x: number, y: number) {
    return y < ySize - 1 && forest[x][y + 1] > previous;
  }
  function canGoLeft(x: number, y: number) {
    return y > 0 && forest[x][y - 1] > previous;
  }

  let canWalk = true;

  while (canWalk && steps < total) {
    if (
      canGoLeft(x, y) ||
      canGoDown(x, y) ||
      canGoRight(x, y) ||
      canGoUp(x, y)
    ) {
      if (canGoLeft(x, y)) {
        y--;
      } else {
        if (canGoRight(x, y)) {
          y++;
        } else {
          if (canGoUp(x, y)) {
            x++;
          } else {
            if (canGoDown(x, y)) {
              x--;
            }
          }
        }
      }

      previous = forest[x][y];
      steps++;
    } else {
      canWalk = false;
      steps = -1;
    }
  }

  return steps;
}

console.log(
  cutOffTree([
    [1, 2, 3],
    [0, 0, 4],
    [7, 6, 5],
  ])
);
