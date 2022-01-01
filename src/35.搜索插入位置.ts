function searchInsert(nums: number[], target: number): number {
  let low=0, high =nums.length;
  while (low<=high){
      let mid=(high+low)/2 |0;
      if(target>nums[mid]){
          
          low=mid+1
      }else if(target===nums[mid]){

          return mid;
      }else {

          high=mid-1
      } 
  }
          return low;
};