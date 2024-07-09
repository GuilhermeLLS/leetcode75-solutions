/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null, next = null, curr = head
  while (curr !== null) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  head = prev
  return head
}

let testCases = [
  [1, 2, 3, 4, 5],
  [1, 2],
  []
]

testCases.forEach(t => console.log(reverseList(t)))