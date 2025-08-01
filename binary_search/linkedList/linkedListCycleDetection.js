function hasCycle(head) {
  // set a slow pointer at head node
  // set a fast pointer at the head node's next
  // loop
  // if the pointers meet, return true
  let slow = head,
    fast = head.next;
  while (fast && fast.next) {
    if (fast === slow) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
}
