function containsNearbyDuplicate(nums: number[], k: number): boolean {
  // let len=nums.length;
  // for(let i=0;i<len;i++){
  //     for(let j=0;j<len;j++){
  //         if(nums[j]===nums[i]&&i!==j){
  //             if(i-j>0?i-j<=k:j-i<=k)return true;
  //         }
  // }
  // }
  // return false;
  let len=nums.length;
  let map=new Map();
  for(let i=0;i<len;i++){
      let num=nums[i]
      if (map.has(num)) {
        if( i - map.get(num) <= k)  return true;
      }
          map.set(num,i)
  }
  return false;
};