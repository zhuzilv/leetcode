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

 function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  //迭代
  //定义一个哑节点
  let preHead =new ListNode(-1);
  let pre=preHead;
  while(list1!==null&&list2!==null){
      if(list1.val<=list2.val){
          pre.next=list1
          list1=list1.next;
      }else {
          pre.next=list2;
          list2=list2.next;
      }
      pre=pre.next;
  }
  //？？
  pre.next = list1 === null ? list2 : list1;

  return preHead.next;
  //递归
  // if(list1===null){
  //     return list2;
  // }else if(list2===null){
  //     return list1;
  // }else if(list1.val>=list2.val){
  //   list2.next=  mergeTwoLists(list1,list2.next);
  //   return list2
  // }else {
  //     list1.next=mergeTwoLists(list1.next,list2);
  //     return list1
  // }
};