function singleNonDuplicate(nums: number[]): number {
  //步数为2 ，遍历 O(n)
  // for(let i=0;i<nums.length;i=i+2){
  //     if(nums[i]!==nums[i+1]){
  //         return nums[i]
  //     }
  // }
  // 位运算遍历一遍O(n)
  // reduce 会存储return的值作为pre 继续执行
  // return  nums.reduce((e,a)=>e^a)
  // 二分O(logn)
  // 因为成对出现，把两个看成一个
  let [l,r]=[0,nums.length-1]
  while(r>=l){
      //普通判断个奇偶
      let mid=((r-l)/2|0)+l;
      //保证mid是个偶数
      if(mid%2!=0)mid++;
      // 如果当前数等于后一个数，说明单个的在后面，l变
      if(nums[mid]==nums[mid+1]){
          l=mid+1;
          // 如果前两个数相等 而且和后面的不想等说明就是单身
      }else if(nums[mid-2]==nums[mid-1]){
          return nums[mid];
      }else {
          //剩下的就是前不等后不等，单个的在前面
          r=mid-1
      }
  }
};