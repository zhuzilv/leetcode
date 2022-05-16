// function (arr, k,m) 数组中一个数出现k次，其余出现m次，
// m>k 寻找出现k次的数


function onlyKTimes (arr,k,m){
  let arr32 = new Array(32).fill(0);
  //O(n)
  for(let item of arr){
    for(let i = 0;i<32;i++){
      if(((item>>i)&1)!==0){
        arr32[i]++;
      }
    }
  }
  console.log(arr32)
  let ans = 0;
  for(let i = 0;i<32;i++){
    if(arr32[i]%m!==0){
      ans|=(1<<i);
    }
  }
  return ans;
}
console.log(onlyKTimes([1,2,2,3,3],1,2))
// console.log(onlyKTimes([1,1,1,3,3,3,2,2],2,3))



// 计数器
// hashmap
