/**
 * @param {number[][]} mat
 * @return {number[]}
 */
 var findPeakGrid = function(mat) {
  // findMax // 找当当行最大值，返回value和index
  function findMax (arr){
      let max = arr[0]
      let i;
      let hash = {};
      for(i =0;i<arr.length;i++){
          hash[arr[i]]=i;
         if(arr[i]>max){
             max = arr[i];
         }
      }
      return [max,hash[max]]
  }
  
  // 二分找位置
  let [i,j] = [0,mat.length-1]

  while(i<=j){
      let m = (i+j)/2|0
      let [item,index] = findMax(mat[m])
      // 越界返回-1
      let up = mat?.[m-1]?.[index]??-1;
      let down = mat?.[m+1]?.[index]??-1;
      // 二分法逻辑
      if(item>up&&item>down){
          return [m,index]
      }else if (item>down){
          j=m-1;
      }else{
          i=m+1
      }
  }

  return []
};


// lcsaf 
// function findMax(arr) {
//   let index = 0;
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[index]) {
//           index = i;
//       }
//   }
//   return index;
// }

// /**
// * @param {number[][]} mat
// * @return {number[]}
// */
// var findPeakGrid = function(mat) {
//   let top = 0, bottom = mat.length - 2;
//   let index;
//   while (top <= bottom) {
//       const middle = top + bottom >> 1;
//        index = findMax(mat[middle]);
//       if (mat[middle][index] > mat[middle + 1][index]) {
//           bottom = middle - 1;
//       } else {
//           top = middle + 1;
//       }
//   }
//   return [top, findMax(mat[top])];
// };








