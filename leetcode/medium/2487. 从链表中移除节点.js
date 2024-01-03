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
 var removeNodes = function (head) {
  // 法1，先存个正确的栈，再串串
  let stack = [];
  // 递归翻转链表存栈
  function reverse(node) {
      // base 
      if (!node) {
          return;
      }
      reverse(node.next);
      if (stack.length == 0) {
          stack.push(node.val);
      } else {
          let top = stack[stack.length - 1];
          node.val >= top && stack.push(node.val)
      }
  }
  reverse(head);
  console.log(stack);
  // 穿串
  let top = new ListNode(null,null);
  let ttop = top;
  for(let i = stack.length-1;i>=0;i--){
      top.next = new ListNode(stack[i],null);
      top=top.next;
  }
  return ttop.next;
};

// 官方题解
// 递归
var removeNodes = function(head) {
  // 例如3-》2-》1
  // base 返回值
  if (head == null) {
      return null;
  }
  // 1-》2-》3=》null
  // 但归时会检测
  // 2-》3 时 2会被条件过滤
  head.next = removeNodes(head.next);
  if (head.next != null && head.val < head.next.val) {
      return head.next;
  } else {
      return head;
  }
};
