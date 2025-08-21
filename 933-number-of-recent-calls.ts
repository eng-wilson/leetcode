class RecentCounter {
  pings: number[] = [];
  constructor() {}

  ping(t: number): number {
    this.pings.push(t);

    while (this.pings[0] < t - 3000) {
      this.pings.shift();
    }

    return this.pings.length;
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

let recentCounter = new RecentCounter();
recentCounter.ping(642); // requests = [1], range is [-2999,1], return 1
recentCounter.ping(1849); // requests = [1, 100], range is [-2900,100], return 2
recentCounter.ping(4921); // requests = [1, 100, 3001], range is [1,3001], return 3
recentCounter.ping(5936); // requests = [1, 100, 3001, 3002], range is [2,3002], return 3
