/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
  // 双指针 前后对撞
  // 因为，比较前后的数，逆序，肯定能找到当前数组最大的数
  // 归并排序 ！
  
  let len = nums.length;
  let newArr = [];
  for(let i=0,j=len-1;i<=j;){
      let l2 = Math.pow(nums[i],2)
      let r2 = Math.pow(nums[j],2)
      if(l2>=r2){
          i++;
          newArr.unshift(l2)
      }else {
          j--;
          newArr.unshift(r2)
      }
  }
  return newArr;
 };