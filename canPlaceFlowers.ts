function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let answer = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) {
      i++;
    } else {
      if (!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1]) {
        answer++;
        i++;
      }
    }
  }
  if (answer >= n) {
    return true;
  }

  return false;
}
