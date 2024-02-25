/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

 function binarySearch(nums,i){
  let [l,r] =[0,nums.length];
  while(l<r){
      let m = l+ ((r-l)>>1)
      if(nums[m]==i){
          return true;
      }
      if(nums[m]>i){
          r=m;
      }else{
          l = m+1;
      }
  }
  return false;
}
var searchMatrix = function(matrix, target) {
 let m = matrix.length;
 for(let i =0;i<m;i++){
    if(binarySearch(matrix[i],target)){
        return true;
    }
 }
 return false
};