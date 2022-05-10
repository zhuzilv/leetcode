/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n):number {
  // api toString() + reduce
//    return n.toString(2).split('').reduce((a,b)=>Number(a)+Number(b))
  // nnmax
      // return n.toString(2).replace(/0/g,'').length;
  // 二进制位数求和 考虑 js i554e 53位
  // let sum=0;
  // for 速度和while 也有比较吗
  // for(let i=0;i<=31;i++){
  //    sum+= (n & 1<<i)===0?0:1;
  // }
  // let i=31;
  // while(i>=0){
  // (n & 1<<i)!==0?sum++:null;
  // i--;
  // }
  // return sum;
  // ? leetcode ?
  let res = 0;
  for (; n != 0; n >>>= 1) res += n & 1;
  return res;
};