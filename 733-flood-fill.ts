function bfsFill(
  image: number[][],
  x: number,
  y: number,
  initialColor: number,
  finalColor: number
) {
  const rowLength = image.length;
  const columnLength = image[0].length;
  if (
    x < 0 ||
    y < 0 ||
    x >= rowLength ||
    y >= columnLength ||
    image[x][y] !== initialColor
  )
    return;

  image[x][y] = finalColor;

  bfsFill(image, x + 1, y, initialColor, finalColor);
  bfsFill(image, x - 1, y, initialColor, finalColor);
  bfsFill(image, x, y + 1, initialColor, finalColor);
  bfsFill(image, x, y - 1, initialColor, finalColor);
}

function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  if (image[sr][sc] === color) {
    return image;
  }
  bfsFill(image, sr, sc, image[sr][sc], color);

  return image;
}

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
