function largestAltitude(gain: number[]): number {
  const altitudes = [0];
  let max = 0;

  for (let i = 0; i < gain.length; i++) {
    const newAltitude = gain[i] + altitudes[i];

    altitudes.push(newAltitude);

    if (newAltitude > max) {
      max = newAltitude;
    }
  }

  return max;
}

console.log(largestAltitude([-5, 1, 5, 0, -7]));
