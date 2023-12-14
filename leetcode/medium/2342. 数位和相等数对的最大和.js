/**
 * @param {number[]} nums
 * @return {number}
 */
// 自己的解，hash 存了两个值，太蠢了，一个就可以的
 var maximumSum = function(nums) {
  const digitSum = (s)=>{
      const c = String(s);
      const h = c.split('').reduce((pre,cur)=>{
          return +pre+(+cur);
      },0)
      return h ;
  }
  let max = -1;
  let map = new Map();
  for(let i = 0 ;i<nums.length;i++){
      const digI = digitSum(nums[i]);
      if(map.has(digI)){
          let replaceArr = map.get(digI)
          if(replaceArr.length>=2){
             const [ l,r] = replaceArr;
             if(nums[i]>r){
                 replaceArr=[replaceArr[1],nums[i]]
             }else if(nums[i]<r&&nums[i]>l){
                 replaceArr=[nums[i],replaceArr[1]]
             }
          }else {
              if(nums[i]<replaceArr[0]){
              replaceArr.unshift(nums[i])
              }else {
              replaceArr.push(nums[i])
              }
          }
          map.set(digI,replaceArr)
          if(replaceArr.length>=2){
              const len = replaceArr.length;
              const sum = replaceArr[len-1]+replaceArr[len-2]
              if(sum>max){
                  max=sum;
              }
          }
      }else{
          map.set(digI,[nums[i]])
      }
  }
  return max
};




// 看完讲解后的解
// hash存一个，不需要是数组
// 优化第一次 ，优化hash 值
var maximumSum1 = function(nums) {
  const digitSum = (s)=>{
      const c = String(s);
      const h = c.split('').reduce((pre,cur)=>{
          return +pre+(+cur);
      },0)
      return h ;
  }
  let max = -1;
  let map = new Map();
  for(let i = 0 ;i<nums.length;i++){
      const digI = digitSum(nums[i]);
      if(map.has(digI)){
          let item = map.get(digI)
          let value = nums[i]+item;
          map.set(digI,Math.max(item,nums[i]))
        if(value>=max){
            max=value;
        }
      }else{
          map.set(digI,nums[i])
      }
  }
  return max
};

// 优化第二次，优化变量声明和digit sum 函数
// 求数位和的函数优化巨大
// 打败90%
var maximumSum2 = function(nums) {
  const digitSum = (s)=>{
     let key = 0;
     while(s>0){
         key += s%10;
         s= s/10 |0;
     }
     return key;
  }
  let max = -1, map = new Map();
  for(let i = 0 ;i<nums.length;i++){
      const digI = digitSum(nums[i]);
      if(map.has(digI)){
          let item = map.get(digI)
          let value = nums[i]+item;
          map.set(digI,Math.max(item,nums[i]))
        if(value>=max){
            max=value;
        }
      }else{
          map.set(digI,nums[i])
      }
  }
  return max
};

// 优化第三次
// for 变 for of ， map 变对象
// 击败100%
var maximumSum3 = function(nums) {
  const digitSum = (s)=>{
     let key = 0;
     while(s>0){
         key += s%10;
         s= s/10 |0;
     }
     return key;
  }
  let max = -1, map = {};
  for(let i of nums){
  const digI = digitSum(i);
      if(map.hasOwnProperty(digI)){
          let item = map[digI]
          let value = i+item;
          map[digI]=Math.max(item,i)
        if(value>=max){
            max=value;
        }
      }else{
          map[digI]=i;

      }
  }
  return max
};

// summary
// 数位和函数 学习
const digitSum = (s)=>{
  let key = 0;
  while(s>0){
      key += s%10;
      // s= s/10 >>0; 
      s= s/10 |0; 
  }
  return key;
}
// new Map 貌似没优化任何东西
// for of 和for 没速度差异