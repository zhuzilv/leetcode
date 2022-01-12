/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode(0, head)
  let forward = dummy, backward = dummy
  while (n--) {
      forward = forward.next
  }
  while (forward.next) {
      forward = forward.next
      backward = backward.next
  }
  backward.next = backward.next.next
  return dummy.next
};
