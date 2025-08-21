function maxArea(height: number[]): number {
  let i = 0;
  let j = height.length - 1;
  let area = 0;

  while (i < j) {
    let shortest = Math.min(height[i], height[j]);

    if (shortest * (j - i) > area) {
      area = shortest * (j - i);
    }

    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }
  return area;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
