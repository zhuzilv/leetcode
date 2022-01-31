/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
  for(let i=0;i<nums.length;i++){
       for(let j=i+1;j<nums.length;j++){
           if(nums[i]!==0){
               break;
           }
      if(nums[i]===0&&nums[j]!=0){
          [nums[i],nums[j]]=[nums[j],nums[i]];
      }
  }   
  }    
};
/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes_doublePoint(nums: number[]): void {
    let low=0,high=0;
    for(let i=0;i<nums.length;i++){
        console.log(low,high)
        if(nums[i]!==0){
            [nums[low],nums[high]]=[nums[high],nums[low]]
            low++;
        }        
        high++;
    }    
};