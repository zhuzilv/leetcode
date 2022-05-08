/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
  // js SB 模拟
  // while(k>0){
  //     k--;
  //     nums.unshift(nums.pop())
  // }
  // 劝退题目，数学
  //  精髓在于。长度 为 7 轮转为3 
  //  7 % 7 = 0 
  // 8 % 7 =1 
  // 9 % 7  =2 
  // 10 % 7 =3 
  let len = nums.length;
  let newArr = new Array(nums.length);
  for(let i = 0 ; i<len;i++){
      // nb
      newArr[(i+k)%len]=nums[i]
  }
  for(let i = 0 ; i<len;i++){
      nums[i]=newArr[i]
  }
};