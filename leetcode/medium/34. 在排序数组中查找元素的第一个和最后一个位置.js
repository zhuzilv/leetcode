// 1代 ，查到位置，然后左右找
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 function bs(nums,target){
  let [l,r] = [0,nums.length];
while(l<r){
    let m = l +((r-l)>>1);
    if(nums[m]==target){
        return m;
    }else if(nums[m]>target){
        r = m
    }else{
        l = m+1
    }
}
}
var searchRange = function(nums, target) {
let m = bs(nums,target)
console.log(m,'m')
let res = [-1,-1];
for(let i = m;i<nums.length;i++){
    if(nums[i]==target){
        res[1] = i;
    }
    if(nums[i+1]>target){
        break;
    }
}
for(let i = m;i>=0;i--){
    if(nums[i]==target){
        res[0] = i;
    }
    if(nums[i-1]<target){
        break;
    }
}
return res;
};

// 二代，利用二分判断条件 找到边界  理应如此
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
  // 找index 左
  let [l,r] = [0,nums.length];
  let leftI = -1;
  let rightI = -1;
  while(l<r){
      let m = l+r>>>1
      if(nums[m]>target){
          // [l,m]
          r = m;
      }else if(nums[m]==target){
          // [l,m]
          r=m;
          leftI= m;
      }else{
          // []
          l = m+1;
      }
  }
  [l,r] = [0,nums.length]
  // 找index 右
   while(l<r){
      let m = l+r>>>1
      if(nums[m]>target){
          // [l,m]
          r = m;
      }else if(nums[m]==target){
          // [l,m]
          l=m+1;
          rightI= m;
      }else{
          // []
          l = m+1;
      }
  }
  if(leftI!==-1){
      return [leftI,rightI]
  }
  return [leftI,rightI];
};


// 三代 优化版本 封装一层
var searchRange = function (nums, target) {
  let leftI = -1;
  let rightI = -1;
  function findLorR(nums, target, index = true) {
      let [l, r] = [0, nums.length];
      let i = -1;
      while (l < r) {
          let m = l + r >>> 1
          if (nums[m] > target) {
              // [l,m]
              r = m;
          } else if (nums[m] == target) {
              // [l,m]
              if (index) {
                  r = m;
              } else {
                  l = m + 1;
              }
              i = m;
          } else {
              // []
              l = m + 1;
          }
      }
      return i
  }
  // 找index 左
  leftI = findLorR(nums, target, true)
  // 找index 右
  rightI = findLorR(nums, target, false)
  if (leftI !== -1) {
      return [leftI, rightI]
  }
  return [leftI, rightI];
};