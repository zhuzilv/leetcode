/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
  // 先转2进制
  a = parseInt(a,2);
  b = parseInt(b,2);
  // a^b 是a和b的不进位相加
  // a&b<<1 是进位的位数
  // 3 和 1
  // 011 和 001
  // 011 ^001 = 010
  // 011 & 001 = 001  001 <<1 =010
  // ans = 010. car = 010  a = 010 b =010
  // 010 和 010
  // 000 和100
  // 100 000
  while(b){
      let answer = a^b;
      let carry = (a&b) <<1;
      a = answer;
      b=carry;
  }
  return a.toString(2);
};

