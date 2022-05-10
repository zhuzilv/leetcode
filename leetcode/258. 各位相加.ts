// function addDigits(num: number): number {
//     if(num<10) return num;
//     let sum=num.toString().split('').map(Number).reduce((cal,cur)=>cal+cur)
//     return addDigits(sum)
// };
function addDigits(num: number): number {
  if(num<10) return num;
  let sum=(num)=>{
      if(num<10) return num;
       return num%10+sum(num/10|0)
  }
  return addDigits(sum(num))
};