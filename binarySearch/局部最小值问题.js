// 题目要求 无序数组，任意相邻的数不相等，小于左右两边的数，算是局部最小
// 非有序，如果 局部小于左又小于右，则该位置属于局部最小，返回一个即可

function minLocal(arr){
  // 如果数组只有 一个 
  if(arr.length===1) return 0;
  // 2 个
  if(arr.length ===2 ){
    arr[0]>arr[1]?1:0;
  }
  if(arr[0]<arr[1]) return arr[0];
  if(arr[n-1]<arr[n-2]) return arr[n-1];
  // 正常
  let l =0 ,r=arr.length;
  // 1, arr.length-2
  while(l<=r-1){
    let mid = (l&r)+((l^r)>>1);
    if(arr[mid]<arr[mid-1]&& arr[mid]<arr[mid+1]){
      return mid;
    }
    // 如果当前比右边大
    if(arr[mid]>=arr[mid+1]){
      l = mid+1;
      continue;
    }
    // 如果当前比左边大
    if(arr[mid]>=arr[mid-1]){
      r = mid-1;
      continue;
    }
  }

  return arr[l]>arr[r]?arr[r]:arr[l];
}


let arr = [ 1,2,2,4,1,5];
console.log(minLocal(arr))