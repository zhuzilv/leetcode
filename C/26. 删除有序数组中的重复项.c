int removeDuplicates(int* nums, int numsSize){
  int l=0,r=1;
  while(r<numsSize){
      if(nums[l]!=nums[r]){
          nums[l+1]=nums[r];
          l++;
          r++;
      }else {
          r++;
      }
  }
  return l+1;
}