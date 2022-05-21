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
  //             p  c   n
  // null<-1<-2<-5. null
  // cur = head ;
  // let pre =null; 
  // let next = cur.next;
  // cur.next = pre;
  // pre = cur;
  // cur = next;
  // pre = cur ;
  // cur = next;
  //let next = cur.next;
  // cur.next =pre;
  // pre = cur;
  // cur = next;

  // 三指针法，pre，cur，next 
//     let cur =head;
//     let pre = null;
//     while(cur){
//         let next = cur.next; // 存起来
//         cur.next = pre;
//         pre = cur;
//         cur = next;
//     }
//    return pre;

  // 递归实现 待理解，先把三指针敲熟
  if (head == null || head.next == null) return head
  const p = reverseList(head.next)
  head.next.next = head
  head.next = null
  return p


};