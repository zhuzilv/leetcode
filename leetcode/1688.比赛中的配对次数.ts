function numberOfMatches(n: number): number {
  if(n===1){
      return 0;
  }else {
      return (n/2 |0)+numberOfMatches(n%2==0?n/2:(n/2|0)+1)
  }
  //Math
  //return n-1
};