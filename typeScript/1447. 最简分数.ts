function simplifiedFractions(n: number): string[] {
  let arr=[];
  //更相减损
  // let gcd=(a,b)=>{
  //     let [max,min]=a>b?[a,b]:[b,a];
  //     if(max===min){
  //         return max;
  //     }
  //     return gcd(max-min,min)
  // }
  //欧几里得辗转相除O(n*n*logn)
  const gcd=(a,b)=>{
     return a===0?b:gcd(b%a,a)
  }
 for(let i=1;i<n;i++){
     for(let j=i+1;j<=n;j++){
      gcd(i,j)===1?arr.push(`${i}/${j}`):null
     }
 } 
 return arr;
};