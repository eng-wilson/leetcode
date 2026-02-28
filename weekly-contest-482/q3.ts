function minAllOneMultiple(k: number): number {
  // impossível se tiver fator 2 ou 5
  if (k % 2 === 0 || k % 5 === 0) return -1;

  let rem = 0;

  for (let len = 1; len <= k; len++) {
    rem = (rem * 10 + 1) % k;
    if (rem === 0) return len;
  }

  // por pigeonhole, se não achou em k passos, não existe
  return -1;
}
