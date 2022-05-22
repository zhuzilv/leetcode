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
  //返回新头，可能存在val删除的头部状态
  //.             pre
  //                  cur. next
  // null-> 4 -》 5 -〉4 -》 9   5
  // 先把head 定义在 不可能删除的节点上
  while(head){
      if(head.val!==val){
          break;
      }
      head = head.next;
  }
  let cur = head;
  // pre 不定义为 null 
  // 如果当前val 相等 则链表移动后方
  let pre = head;
  while(cur){
      let next = cur.next;
      if(cur.val === val){
          pre.next = next;
          cur = next;
          continue;
      }
      pre = cur;
      cur = next;
  }
  return head;
};