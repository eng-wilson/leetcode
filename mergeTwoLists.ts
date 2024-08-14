function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }

  const list3 = new ListNode(0);
  let head = list3;

  while (list1 && list2) {
    if (list2.val > list1.val) {
      head.next = list1;
      list1 = list1.next;
    } else {
      head.next = list2;
      list2 = list2.next;
    }

    head = head.next;
  }

  head.next = list1 ?? list2;

  return list3.next;
}
