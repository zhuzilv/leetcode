/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
  while(k>0){
      if(k===0){
          break;
      }else{
          nums.unshift(nums.pop());
          k--;
      }
  }
};