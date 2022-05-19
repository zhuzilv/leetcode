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
 var reverseList = function(head) {
   // 当前位，上一位，下一位
  let pre = null,cur = head;
  while(cur!=null){
      let next = cur.next; // 把下一位先存起来
      cur.next = pre; // 指针调换
      pre = cur; // pre前移
      cur = next; // cur 前移
  };
  return pre;
};
