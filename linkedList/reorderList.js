/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

/**
  //  * @param {ListNode} head
  //  * @return {void}
   *
   * GOAL: reorder the linked list: [n, n-1,1, n-2, 2] -> n = list length
   * O(n) solution for time and space
   * - set temp array
   * - traverse the linked list and store each val in the array
   * - split the array by the middle element into two arrays (round up)
   * - make a new linked list
   *      - iterate through the first half list in order
   *          - set a pointer for this
   *      - iterate in reverse through the second half list
   *          - set a pointer for this
   *      - store each value in the lists in [n, n-1,1, n-2, 2] fashion
   * - return the new linked list
   */

// class ListNode {
//   constructor(val = 0, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor(head = null) {
//     this.head = head;
//   }
//   append(val) {
//     let newNode = new ListNode(val);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let curr = this.head;
//     while (curr.next) {
//       curr = curr.next;
//     }
//     curr.next = newNode;
//   }

//   reorderList(head) {
//     let tempArray = [];
//     let curr = head;
//     while (curr) {
//       tempArray.push(curr.val);
//       curr = curr.next;
//     }
//     // [ 2, 4, 6, 8 ]
//     let mid = Math.ceil(tempArray.length / 2);

//     let half1 = tempArray.slice(0, mid);
//     let half2 = tempArray.slice(mid).reverse();
//     let res = new LinkedList();
//     let first = 0,
//       second = 0;

//     while (first < half1.length || second < half2.length) {
//   if (first < half1.length) {
//     res.append(half1[first]);
//     first++;
//   }
//   if (second < half2.length) {
//     res.append(half2[second]);
//     second++;
//   }
//     }

//     return res.head;
//   }
// }

// let testArr = [2, 4, 6, 8, 10];
// let newList = new LinkedList();

// for (let index = 0; index < testArr.length; index++) {
//   const val = testArr[index];
//   newList.append(val);
// }

// const reOrderedHead = newList.reorderList(newList.head);

// let curr = reOrderedHead;

// while (curr) {
//   console.log(curr.val);
//   curr = curr.next;
// }

// function reorderList(head) {
//   let nodes = [];
//   let curr = head;
//   while (curr) {
//     nodes.push(curr);
//     curr = curr.next;
//   }
//   /* [ 2, 4, 6, 8 ]
//            [ 2, 4, 6, 8, 10 ]
//                    i
//                    j
//             2->10->4->8->6
//             add node at i
//             add node at j to i's next
//         // let mid = Math.ceil(tempArray.length / 2);
//         */

//   let i = 0,
//     j = nodes.length - 1;

//   while (i < j) {
//     nodes[i].next = nodes[j];
//     i++;
//     nodes[j].next = nodes[i];
//     j--;
//   }

//   nodes[i].next = null;
// }

// ------ in place solution

function reorderList(head) {
  let slow = head;
  let fast = head.next;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let second = slow.next;
  let prev = (slow.next = null);
  while (second !== null) {
    const tmp = second.next;
    second.next = prev;
    prev = second;
    second = tmp;
  }

  let first = head;
  second = prev;
  while (second !== null) {
    const tmp1 = first.next;
    const tmp2 = second.next;
    first.next = second;
    second.next = tmp1;
    first = tmp1;
    second = tmp2;
  }
}
