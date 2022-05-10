/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
  //将字符串转换成二进制数字 Ob开头表示二进制数字
  a = '0b' + a ;
  b = '0b' + b ;
  // 求和，由于测试用例里面的数字超过parseint的最大数，所以用bigint
  let sum = BigInt(a) + BigInt(b);
  return sum.toString(2);
};
