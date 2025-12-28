class DoubleListNode {
  key: number;
  val: number;
  next: DoubleListNode | null;
  prev: DoubleListNode | null;

  constructor(key: number, val: number) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  capacity: number;
  head: DoubleListNode;
  tail: DoubleListNode;

  keyMap: Map<number, DoubleListNode>;

  constructor(capacity: number) {
    this.capacity = capacity;

    this.head = new DoubleListNode(-1, -1);
    this.tail = new DoubleListNode(-1, -1);

    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.keyMap = new Map();
  }

  get(key: number): number {
    if (!this.keyMap.has(key)) {
      return -1;
    }

    const node = this.keyMap.get(key)!;
    this.remove(node);
    this.add(node);

    return node.val;
  }

  put(key: number, value: number): void {
    const existingNode = this.keyMap.get(key);

    if (existingNode) {
      existingNode.val = value;
      this.remove(existingNode);
      this.add(existingNode);
    } else {
      const newNode = new DoubleListNode(key, value);
      this.add(newNode);
      this.keyMap.set(key, newNode);
    }

    if (this.keyMap.size > this.capacity) {
      const oldNode = this.head.next;

      if (oldNode) {
        this.keyMap.delete(oldNode.key);
        this.remove(oldNode);
      }
    }
  }

  add(node: DoubleListNode) {
    const prevNode = this.tail.prev!;

    prevNode.next = node;
    node.next = this.tail;
    node.prev = prevNode;
    this.tail.prev = node;
  }

  remove(node: DoubleListNode) {
    if (node.next && node.prev) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
