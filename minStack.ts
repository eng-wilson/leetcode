class MinStack {
  min: number;
  stack: number[] = [];
  constructor() {}

  push(val: number): void {
    if (val < this.min) {
      this.min = val;
    }
    this.stack.push(val);
  }

  pop(): void {
    this.stack.splice(this.stack.length - 1, 1);
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.min;
  }
}
