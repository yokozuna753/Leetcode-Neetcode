/*

Given the beginning of a linked list head, return true if there is a cycle in the linked list. 
Otherwise, return false.

There is a cycle in a linked list if at least one node in the list can be visited again by following the next pointer.

Internally, index determines the index of the beginning of the cycle, if it exists. 
The tail node of the list will set it's next pointer to the index-th node. 
If index = -1, then the tail node points to null and no cycle exists.

Note: index is not given to you as a parameter.

*/

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// define a set
// iterate through the linked list -> start at the head
// add the current node's val to the set
// check if the node's next val is in the set
// * yes: return true (cycle)
// move the current to the current's next
// return false (if we have reached null)

// class Solution {
//   hasCycle(head) {
//     const set = new Set();
//     let curr = head;
//     while (curr) {
//       console.log(curr.val, curr.next);
//       set.add(curr.val);
//       if (set.has(curr.next.val)) return true;
//       curr = curr.next;
//     }
//     return false;
//   }
// }

class Solution {
  hasCycle(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) return true;
    }
    return false;
  }
}


let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);
let d = new ListNode(4);

a.next = b;
b.next = c;
c.next = d;
d.next = b;
// c.next = null by default

let solution = new Solution();
console.log(solution.hasCycle(a)); // should log false