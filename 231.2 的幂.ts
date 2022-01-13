function isPowerOfTwo(n: number): boolean {
  // if(n<=0)return false;
  // return Math.log2(n).toString().indexOf('.')==-1
  //n>0  1<<30 是最大的2的整数次幂 对n 取余为0说明能被2开方
  // return (n>0) && (1<<30) % n == 0;
  //2的开放在2进制下，只有第一位是1；
  //1 2 4 8 16 
  //1 10 100 1000 10000
  //而n-1
  // 0 1 11 111 1111
  // 10 & 1 ==0 
   return n > 0 && (n & (n - 1)) == 0;
};