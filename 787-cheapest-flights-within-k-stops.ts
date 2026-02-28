function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number,
): number {
  const graphs: Map<number, Map<number, number>> = new Map();
  const dist = new Array(n).fill(Number.POSITIVE_INFINITY);
  const queue = [[src, 0]];
  let head = 0;
  let stops = 0;

  for (let i = 0; i < n; i++) {
    graphs.set(i, new Map());
  }

  for (const flight of flights) {
    graphs.get(flight[0])?.set(flight[1], flight[2]);
  }

  while (head < queue.length && stops <= k) {
    const levelSize = queue.length - head;

    for (let i = 0; i < levelSize; i++) {
      const [destination, distance] = queue[head];
      head++;

      if (dist[destination] > distance) {
        dist[destination] = distance;
      }

      for (const neighbors of graphs.get(destination)!) {
        if (dist[neighbors[0]] > neighbors[1] + distance) {
          dist[neighbors[0]] = neighbors[1] + distance;
          queue.push([neighbors[0], neighbors[1] + distance]);
        }
      }
    }
    stops++;
  }
  if (dist[dst] < Number.POSITIVE_INFINITY) {
    return dist[dst];
  }

  return -1;
}

console.log(
  findCheapestPrice(
    4,
    [
      [0, 1, 100],
      [1, 2, 100],
      [2, 0, 100],
      [1, 3, 600],
      [2, 3, 200],
    ],
    0,
    3,
    1,
  ),
);
