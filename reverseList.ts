function reverseList(head: ListNode | null): ListNode | null {
  if (!head?.next || !head) {
    return head;
  }
  let tail: ListNode | null = null;
  let temp: ListNode | null = null;

  while (head) {
    temp = head.next;

    head.next = tail;
    tail = head;
    head = temp;
  }

  return tail;
}
