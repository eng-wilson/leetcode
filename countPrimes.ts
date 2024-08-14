function countPrimes(n: number): number {
  let result = 0
  for (let i = 2; i < n; i++) {
    if (i > 2 && i % 2 === 0) {
      break;
    }
    if (i === 2 || i === 3) {
      result++
      break;
    }
    if (i > 3 && ) {

    }
  }
  return 0;
}

console.log(countPrimes(10));
