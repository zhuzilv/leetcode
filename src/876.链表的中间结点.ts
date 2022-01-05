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

 function middleNode(head: ListNode | null): ListNode | null {
  //快慢指针
  let slow =head,fast=head;
  while(fast&&fast.next){
      slow=slow.next;
      fast=fast.next.next;
  }
  return slow;
};