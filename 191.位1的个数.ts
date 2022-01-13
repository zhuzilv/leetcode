function hammingWeight(n: number): number {
  let sum=0;
 for(let i of  n.toString(2).split('')){
     i=='1'?sum++:''
 }
 return sum;
};