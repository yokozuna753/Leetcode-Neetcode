/*
NEED 3 functions:
1. find the middle node
2. mergeSort -> get to the base cases of the linked list (singular nodes)

3. merge - merge the nodes in order going back up the call stack

*/

class ListNode{
    constructor(val, next){
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
}

function findMiddle(head) {
    let slow = head, fast = head.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function mergeSort(head) {
    if (!head || !head.next) {
        return head;
    }
    let middle = findMiddle(head);
    let rightHead = middle.next;
    middle.next = null;

    let left = mergeSort(head);
    let right = mergeSort(rightHead);

    return merge(left, right);
}

function merge(list1, list2){
    let dummy = new ListNode();
    let tail = dummy;

    while(list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else{
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }
    tail.next = list1? list1 : list2;
    return dummy.next;
}

let newList = new ListNode(4);
let newList1 = new ListNode(5);
let newList2 = new ListNode(2);
let newList3 = new ListNode(1);
// let newList4 = new ListNode(3);

newList.next = newList1;
newList1.next = newList2;
newList2.next = newList3;
// newList3.next = newList4;


const linked = new LinkedList(newList);


function printNodes(head) {
    while(head) {
        console.log(head.val);
        head = head.next;
    }
    return null;
}
linked.head = mergeSort(linked.head);

console.log(printNodes(linked.head));