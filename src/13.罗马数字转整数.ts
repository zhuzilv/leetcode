function romanToInt(s: string): number {
  let map={
      I:1,
      V:5,
      X:10,
      L:50,
      C:100,
      D:500,
      M:1000,
  }
 let arr= s.split('').map(e=>map[e]);
 let sum=0;
 for (let i=0;i<arr.length;i++){
     if(arr[i]<arr[i+1]){
         sum=sum-arr[i];
     }else {
         sum=sum+arr[i]
     }
 }
 return sum;
};