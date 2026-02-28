function searchMatrix(matrix: number[][], target: number): boolean {
  let left = 0;
  let right = matrix[0].length - 1;

  let top = 0;
  let bottom = matrix.length - 1;

  let verticalMid = 0;
  let horizontalMid = 0;

  while (top <= bottom) {
    verticalMid = Math.floor((top + bottom) / 2);

    if (matrix[verticalMid][0] > target) {
      bottom = verticalMid - 1;
    }

    if (matrix[verticalMid][matrix[0].length - 1] < target) {
      top = verticalMid + 1;
    }

    if (
      target >= matrix[verticalMid][0] &&
      target <= matrix[verticalMid][matrix[0].length - 1]
    ) {
      break;
    }
  }

  while (left <= right) {
    horizontalMid = Math.floor((left + right) / 2);

    if (target < matrix[verticalMid][horizontalMid]) {
      right = horizontalMid - 1;
    }
    if (target > matrix[verticalMid][horizontalMid]) {
      left = horizontalMid + 1;
    }

    if (target === matrix[verticalMid][horizontalMid]) {
      return true;
    }
  }

  return false;
}

// console.log(
//   searchMatrix(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     3
//   )
// );
