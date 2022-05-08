/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
  let [l ,r ] = [0,0];
  let n= nums.length;
  function swap(arr,a,b){
      if(a===b) return null;
      arr[a]^=arr[b];
      arr[b]^=arr[a];
      arr[a]^=arr[b];
  }
  while(r<n){
      if(nums[r]!==0){
          swap(nums,l,r);
          l++;
      }
      r++;
  }

};