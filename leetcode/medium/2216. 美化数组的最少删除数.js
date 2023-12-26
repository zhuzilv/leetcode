/**
 * @param {number[]} nums
 * @return {number}
 */
 var minDeletion = function(nums) {
  let temp=0;
  // 偶数判断
  const isEven = (e)=>(e&1)==0
  // 从奇往后判断 ，index-temp
  for(let i = 1;i<nums.length;i++){
          if(!isEven(i-temp)&&nums[i]===nums[i-1]){
              temp++;
          }
  }
  // 数组长度判断
  if(isEven(nums.length-temp)){
      return temp;
  } else {
      return temp+1;
  }
};