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

 function reverseList(head: ListNode | null): ListNode | null {
  //预制节点
  let pre=null;
  let cur=head;
  while(cur!=null){
     let temp=cur.next
      cur.next=pre;
      // 指针行走
  pre=cur;
  cur=temp
  }
  return pre;
};