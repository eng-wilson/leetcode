function findJudge(n: number, trust: number[][]): number {
  const trustedBy: Map<number, number[]> = new Map();
  const trusts: Map<number, number[]> = new Map();
  let judge = -1;

  for (let i = 1; i <= n; i++) {
    trustedBy.set(i, []);
    trusts.set(i, []);
  }

  for (const pair of trust) {
    if (!trustedBy.has(pair[1])) {
      trustedBy.set(pair[1], []);
    }
    trustedBy.get(pair[1])!.push(pair[0]);
  }

  for (const pair of trust) {
    if (!trusts.has(pair[0])) {
      trusts.set(pair[0], []);
    }
    trusts.get(pair[0])!.push(pair[1]);
  }

  for (let i = 1; i <= n; i++) {
    if (trustedBy.get(i)?.length === n - 1 && trusts.get(i)?.length === 0) {
      judge = i;
    }
  }

  return judge;
}

console.log(findJudge(2, [[1, 2]]));
// console.log(
//   findJudge(4, [
//     [1, 2],
//     [3, 2],
//     [1, 3],
//     [4, 1],
//     [3, 1],
//     [2, 1],
//     [2, 3],
//     [4, 3],
//     [4, 2],
//     [3, 4],
//     [2, 4],
//   ]),
// );
