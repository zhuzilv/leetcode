/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
  let pre=null ,cur = head;
  if(head.val===val) return head.next;
  while(true){
      if(cur.val===val){
          pre.next=cur.next
          break;
      }else{
          pre=cur;
          cur=cur.next;
      }
  }
  return head
};