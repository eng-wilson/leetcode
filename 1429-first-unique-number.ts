class FirstUnique {
  queue: number[];
  frequency: Map<number, number>;
  constructor(nums: number[]) {
    this.queue = nums;
    this.frequency = new Map();

    for (let i = 0; i < this.queue.length; i++) {
      const value = this.queue[i];
      this.frequency.set(value, (this.frequency.get(value) || 0) + 1);
    }
  }

  showFirstUnique(): number {
    while (this.queue.length > 0 && this.frequency.get(this.queue[0])! > 1) {
      this.queue.shift();
    }

    if (this.queue.length === 0) {
      return -1;
    }

    return this.queue[0];
  }

  add(value: number): void {
    this.frequency.set(value, (this.frequency.get(value) || 0) + 1);

    this.queue.push(value);
  }
}

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
