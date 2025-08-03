/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     * 
     * [1,2,3,4,5] n = 2
     * 
     */
    removeNthFromEnd(head, n) {
        // convert the LL to array
        let arr = [];
        let curr = head;
        while(curr){
            arr.push(curr);
            curr = curr.next;
        }

        const removeIndex = arr.length - n;
        if (removeIndex < 1) {
            head = head.next;
        } else {

        arr[removeIndex - 1].next = arr[removeIndex].next;
        }
        
        return head;
        
    }
}


// [1,2,3,4,5,6,7,8,9,10,11] n = 5 from the end => 7
//            s           f

/*
1. pick which node i want to delete: 5
    - 5 from the beginning? 
    count nodes starting from 1 until 5 is reached.
    - 5 from the end?
    have the second pointer start at n nodes from the beginning;
    once the second pointer reaches the end,
    the first pointer's next will be the node to delete.

* n = node to remove from the end
* right pointer is set at nth node from the beginning
* the left pointer stops at n nodes away from the node to remove
* once the right pointer reaches the last node

*/
