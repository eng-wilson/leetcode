function minimumCost(
  cost1: number,
  cost2: number,
  costBoth: number,
  need1: number,
  need2: number
): number {
  // Caso 1: both nunca vale a pena
  if (costBoth >= cost1 + cost2) {
    return need1 * cost1 + need2 * cost2;
  }

  let ans = Number.POSITIVE_INFINITY;

  const maxBoth = Math.min(need1, need2);

  // Caso 2: testar extremos relevantes
  for (const both of [0, maxBoth]) {
    const rem1 = Math.max(0, need1 - both);
    const rem2 = Math.max(0, need2 - both);

    const total = both * costBoth + rem1 * cost1 + rem2 * cost2;

    ans = Math.min(ans, total);
  }

  // Caso 3: usar only both até cobrir tudo
  const onlyBoth = Math.max(need1, need2) * costBoth;
  ans = Math.min(ans, onlyBoth);

  return ans;
}
