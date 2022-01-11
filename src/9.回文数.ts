function isPalindrome(x: number): boolean {
  //数学+while
  if(x<0) return false;
  if(x<10) return true;
  //1234 ?1000
  let n=Math.pow(10,Math.log10(x)|0);
  while(n>0){
      if((x/n |0) !==x%10)return false;
      x=x%n/10|0;
      n=n/100;
  }
 return true
 //翻转字符串
 //双指针
};
