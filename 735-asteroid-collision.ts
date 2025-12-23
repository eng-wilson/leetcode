function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];

  for (let i = 0; i < asteroids.length; i++) {
    let asteroid = asteroids[i];

    while (asteroid < 0 && stack.length && stack[stack.length - 1] > 0) {
      let diff = asteroid + stack[stack.length - 1];

      if (diff > 0) {
        asteroid = 0;
      } else {
        if (diff < 0) {
          stack.pop();
        } else {
          if (diff === 0) {
            stack.pop();
            asteroid = 0;
          }
        }
      }
    }

    if (asteroid !== 0) {
      stack.push(asteroid);
    }
  }
  return stack;
}

console.log(asteroidCollision([1, -2, 1, -2]));
// console.log(asteroidCollision([10, 2, -5]));
