/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
  // 模拟 ，把字符串的0换成空
  // let arr =[];
  // for(let i = 0;i<=n;i++){
  //     // 1001
  //     // 0 1  return 1
  //   let sum =  i.toString(2).replace(/0/g,'').length;
  //   arr.push(sum);
  // }
  // return arr;
  // 位运算求位数 模拟
  // let binary1Count =(e)=>{
  //     let index=31;
  //     let sum=0;
  //     while(index>=0){
  //         index--;
  //         (e&1<<index)===0?null:sum++;
  //     }
  //     return sum;
  // }
  // let arr =[];
  // for(let i = 0;i<=n;i++){
  //    let sum= binary1Count(i)
  //   arr.push(sum);
  // }
  // return arr;
  // n& n-1 可以去除当前二进制的最后一个1
   let binary1Count =(e)=>{
     let sum = 0;
     while(e>0){
         e&=e-1;
         sum++;
     }
  return sum;
  }
  let arr =[];
  for(let i = 0;i<=n;i++){
     let sum= binary1Count(i)
    arr.push(sum);
  }
  return arr;
};