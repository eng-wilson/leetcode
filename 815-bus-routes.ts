function numBusesToDestination(
  routes: number[][],
  source: number,
  target: number,
): number {
  const adj: Map<number, Set<number>> = new Map();

  for (let i = 0; i < routes.length; i++) {
    for (let j = 0; j < routes[i].length; j++) {
      if (!adj.has(routes[i][j])) {
        adj.set(routes[i][j], new Set());
      }

      adj.get(routes[i][j])?.add(i);
    }
  }

  const seenStop = new Set();
  const seenRoute = new Set();

  const queue = [[source, 0]];
  let head = 0;

  while (head < queue.length) {
    const [newStop, busCount] = queue[head];
    head++;

    if (newStop === target) {
      return busCount;
    }

    if (!adj.has(newStop)) {
      continue;
    }

    for (const route of adj.get(newStop)!) {
      if (!seenRoute.has(route)) {
        seenRoute.add(route);

        for (const stop of routes[route]) {
          if (!seenStop.has(stop)) {
            seenStop.add(stop);
            queue.push([stop, busCount + 1]);
          }
        }
      }
    }
  }

  return -1;
}

console.log(
  numBusesToDestination(
    [
      [1, 2, 7],
      [3, 6, 7],
    ],
    1,
    6,
  ),
);
