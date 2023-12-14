/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n,s=[0,1,2]) {
//     if(s[n]){
//         return s[n];
//     }else{
//         s[n]=climbStairs(n-1,s)+climbStairs(n-2,s)
//     }
//     return s[n];
// };
// 推荐
// var climbStairs = function(n) {
//     let s=[0,1,2];
//     while(s.length-1<=n){
//         s.push(s[s.length-2]+s[s.length-1])
//     }
//     return s[n];
// };
// 通项公式
var climbStairs = function(n) {
  const sqrt5 = Math.sqrt(5);
  const fibn = Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1);
  return Math.round(fibn / sqrt5);
};
