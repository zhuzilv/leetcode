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
// 本能反应
// var deleteDuplicates = function(head) {
//     let top =head;
//     let pre ;
//     let hashMap = new Map;
//     while(head){
//         let v = head.val;
//         if(hashMap.get(v)){
//             let n = head.next;
//             pre.next=n;
//         }else{
//             hashMap.set(v,(hashMap.get(v)||0)+1);
//             pre=head;
//         }
//             head=head.next;

//     }
//     return top
// };

var deleteDuplicates = function(head) {
  // 因为有序，所以相邻
  let cur = head;
  // 考虑cur为null
  while(cur?.next){
      if(cur.val===cur.next.val){
          cur.next=cur.next.next;
      }else{
          cur=cur.next;
      }
  }
  return head;
};
