function climbStairs(n: number): number {
  let prev = 1;
  let cur = 2;

  if (n === 1) return 1;
  if (n === 2) return 2;

  for (let i = 2; i < n; i++) {
    let aux = cur;
    cur = prev + cur;
    prev = aux;
  }

  return cur;
}

console.log(climbStairs(3));
