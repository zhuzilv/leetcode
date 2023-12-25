/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reverseBookList = function(head) {
  let arr =[]
  let pre = null;
  let cur=head
  let next=null;
  while(cur){
      next = cur.next;
      cur.next=pre;
      pre=cur;
       cur=next;
  }
   while(pre){
      arr.push(pre.val)
      pre=pre.next;
  }
   return arr;
};
// pre.val 打印就报错 很迷

// 递归法

var reverseBookList = function(head) {
  if(!head) return []
  let result = reverseBookList(head.next)
  result.push(head.val);
  return result
};