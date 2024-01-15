var deleteDuplicates = function(head) {
  if (!head) {
      return head;
  }
  // 哑节点指向head
  const dummy = new ListNode(0, head);
  let cur = dummy;
  while (cur.next && cur.next.next) {
      if (cur.next.val === cur.next.next.val) {
          const x = cur.next.val;
          // 等于当前重复值，一直指
          while (cur.next && cur.next.val === x) {
              cur.next = cur.next.next;
          } 
      } else {
          cur = cur.next;
      }
  }
  return dummy.next;
};
