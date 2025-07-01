/*

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted linked list and return the head of the new sorted linked list.

The new list should be made up of nodes from list1 and list2.

Input: list1 = [1,2,4], list2 = [1,3,5]

Output: [1,1,2,3,4,5]
*/

// set a pointer starting at the first node in each input list
// create a dummy head node -> we'll return a new merged linked list
// store the current node in a variable
// iterate through each linked list at the same time
// check which value from each list is lesser
// set the current node's next to that value
// move the pointer of that list (list1 or list2) to the next node
// move the current to the next node in the return list
// once reached the end of both lists, make the currents' next node null
// make the head point to its' next (the first value from the lists - since we set a dummy head pointer)

function mergeTwoLists(list1, list2) {
    const dummy = ListNode();
    const tail = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }
    if (list1){
        tail.next = list1;
    } else if (list2) {
        tail.next = list2;
    }
    return dummy.next;
}
