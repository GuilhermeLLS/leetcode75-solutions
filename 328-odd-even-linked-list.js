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
var oddEvenList = function (head) {
  if (!head || !head.next) return head
  let prev = null, next = null, curr = head, firstEven = null, lastOdd = null, aux = 1
  while (curr !== null) {
    next = curr.next
    if (aux % 2 === 0) {
      if (!firstEven) firstEven = curr
      prev.next = curr.next
      curr.next = next?.next ?? null
    } else {
      lastOdd = curr
    }
    prev = curr
    curr = next
    aux++
  }
  lastOdd.next = firstEven
  return head
}