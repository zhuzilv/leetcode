/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 第一次做 模拟
 function calcRepeatItem(arr,i){
  let l = arr.slice(0,i+1);
  let r = arr.slice(i+1,arr.length);
  let lc = [...new Set(l)];
  let rc = [...new Set(r)];
  return [l.length-lc.length,r.length-rc.length]
}
var distinctDifferenceArray = function(nums) {
 let res = [];
 for(let i = 0;i<nums.length;i++){
     let [pre,suf]=calcRepeatItem(nums,i)
     let item =(i+1) - (nums.length-1-i);
     res.push(item-pre+suf)
 }
 return res;
};


// 官方解法
// 遍历两次，然后取到每一位前后的不重复数字
var distinctDifferenceArray = function(nums) {
  let st = new Set();
  let sufCnt = new Array(nums.length + 1).fill(0);
  // 后遍历前
  for (let i = nums.length - 1; i >= 0; i--) {
      st.add(nums[i]);
      sufCnt[i] = st.size;
  }
  console.log(sufCnt,'sufCnt')
  let res = [];
  st.clear();
  // 前到后
  for (let i = 0; i < nums.length; i++) {
      st.add(nums[i]);
      res.push(st.size - sufCnt[i + 1]);
  }
  return res;
};

// js简洁
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var distinctDifferenceArray = function (nums) {
  return nums.map((_, index) => {
      return (
          [...new Set(nums.slice(0, index + 1))].length -
          [...new Set(nums.slice(index + 1))].length
      );
  });
};
