function dominantIndex(nums: number[]): number {
  if(nums.length===1)return 0;
  // let cloneNums=JSON.parse(JSON.stringify(nums))
  // let sortArr=cloneNums.sort((a,b)=>a-b);
  // let n=nums.length;
  // if(sortArr[n-1]>=sortArr[n-2]*2){
  //     return nums.indexOf(sortArr[n-1]);
  // }else {
  //     return -1
  // }
  // 上方用排序和深拷贝判断，下方一个for循环取出最大和最小
  let [index,max,subMax]=[0,-1,-1];
  for(const i in nums){
      let j=Number(i);
      if(nums[j]>max){
          subMax=max
          max=nums[j];
          index=j;
      }else if(nums[j]>subMax){
          subMax=nums[j]
      }
  }
  return (max>=subMax*2)?index:-1
};