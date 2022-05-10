function minimumDifference(nums: number[], k: number): number {
  //临界条件
  if(nums.length==1)return 0;
  //排序O(n*logn)
  let nums2=nums.sort((a,b)=>a-b);
  let min=nums2[nums.length-1];
  //遍历一次O(n/k)
  for(let i=0;i<nums.length-k+1;i++){
      let cha=nums2[i+k-1]-nums2[i];
      cha<min?min=cha:null
  }
  return min;
};