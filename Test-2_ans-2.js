// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4] Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:

// Input: l1 = [0], l2 = [0] Output: [0]

// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] Output: [8,9,9,9,0,0,0,1]

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

//================ Creating Linked list Class ========================
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    let node = new Node(data);
    let curr;
    if (this.head === null) {
      this.head = node;
    } else {
      curr = this.head;

      while (curr.next) {
        curr = curr.next;
      }

      curr.next = node;
    }
    this.size++;
  }
}

let l1 = new LinkedList();
let l2 = new LinkedList();

[9, 9, 9, 9, 9, 9, 9].forEach((e) => l1.add(e));
[9, 9, 9, 9].forEach((e) => l2.add(e));

// =======================Creating function to add nodes of two linked lis=======================

function addTwoLists(l1, l2) {
  let dummyList = new LinkedList();

  let carry = 0;

  while (l1 || l2) {
    let x = l1 !== null ? l1.data : 0;
    let y = l2 !== null ? l2.data : 0;
    let sum = x + y + carry;
    carry = Math.floor(sum / 10);
    dummyList.add(sum % 10);

    if (l1) l1 = l1.next;

    if (l2) l2 = l2.next;
  }

  if (carry > 0) dummyList.add(carry);

  return dummyList.head;
}

// Print list function
function printList(list) {
  console.log("list:", list);
  let curr = list;
  let str = "";

  while (curr) {
    str += curr.data + "->";
    curr = curr.next;
  }
  str += "null";

  return str;
}

let list = addTwoLists(l1.head, l2.head);
console.log(printList(list));
