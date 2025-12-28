function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
  if (rec1[2] > rec2[0] && rec1[3] > rec2[1]) {
    return true;
  }
  return false;
}

console.log(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3]));
console.log(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1]));
console.log(isRectangleOverlap([0, 0, 1, 1], [2, 2, 3, 3]));
