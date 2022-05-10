function countKDifference(nums: number[], k: number): number {
  //双循环O(n2)
  // let len=nums.length;
  // let sum=0;
  // for(let i=0;i<len;i++){
  //     for(let j=i+1;j<len;j++){
  //         if(Math.abs(nums[i]-nums[j])===k){
  //             sum++;
  //         }
  // }
  // }
  // return sum;
  //hash O(n) 飞鸟
  let res = 0;
  const map = new Map();
  for (const num of nums) {
      //map中取num-k 和num+k
      res += (map.get(num - k) || 0) + (map.get(num + k) || 0);
      //设置hash map的个数加1
      map.set(num, (map.get(num) || 0) + 1);
  }
  return res;
};