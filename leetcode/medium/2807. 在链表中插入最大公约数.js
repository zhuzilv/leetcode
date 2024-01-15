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


// function gcd(a, b) {

//     if (b == 0) {
//         return a;
//     }

//     return gcd(b, a % b)
// }
// 先写个gcd
function gcd(a,b){
  while(b!==0){
      [a,b]=[b,a%b];
  }
  return a;
}
// 然后遍历插入
var insertGreatestCommonDivisors = function (head) {
  let top = head;
  // let l ,r = 
  while (head) {
      let l = head.val;
      if (head.next) {
          let r = head.next.val;
          head.next =  new ListNode(gcd(l, r), head.next);;
          head = head.next.next;
      }else{
          head = head.next;
      }

  }
  return top;
};