// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  let fast = head;
  let slow = head;

  if (!head) {
    return false;
  }

  if (!head.next) {
    return false;
  }

  while (fast && fast.next) {
    fast = fast?.next?.next;

    if (slow?.next) {
      slow = slow?.next;
    }

    if (fast == slow) {
      return true;
    }
  }
  return false;
}
