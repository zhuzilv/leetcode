
const swap = (arr,l,r)=>{
  if(l!==r){
  arr[l]^=arr[r];
  arr[r]^=arr[l];
  arr[l]^=arr[r];
  }
}
// 选择排序
// 9 5 2 7
// n+n-1 + ...+ 2+ 1
// O(n*n)
// function selectionSort(array){
//   for(let i = 0 ;i<array.length;i++){
//     for(let j = i+1 ;j<array.length;j++){
//       if(array[j]<array[i]){
//         swap(array,i,j)
//       }
//     }
//   }
//   return array;
// }
// console.log(selectionSort(arr))
// 选排2
// 不立即交换，而是存储当前循环中的最小值下标
// function selectionSort2(array){
//   for(let i = 0 ;i<array.length;i++){
//     let min = i;
//     for(let j = i+1 ;j<array.length;j++){
//        min=array[j]<array[min]?j:min;
//     }
//     swap(array,i,min)
//   }
//   return array;
// }
// console.log(selectionSort2(arr))

//冒泡排序
// 9 5 2 7
// 5 9 2 7
// 5 2 9 7
// 5 2 7 9

// function bubbleSort(arr){
//   for(let i=arr.length-1;i>=0;i--){
//     for(let j= 0 ;j<=i;j++){
//       if(arr[j]>arr[j+1]){
//         swap(arr,j,j+1)
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort(arr))

// 插入排序
// 1～n  ++
// i~0 --
function insertSort(array){
  for(let i = 1;i<array.length;i++){
    for(let j = i ;j>0&&array[j]<array[j-1] ;j--){
        swap(array,j,j-1)
    }
  }
  return array;
}
// 对数器
// 自定义长度和随机数
function arrBuild(maxLenth,maxValue){
  let arr =new Array(maxLenth).fill(0);
  for(let i=0;i<arr.length;i++){
    // 可 正负，可为0
    arr[i] = ((Math.random() * maxValue + 1) | 0) - ((Math.random() * maxValue + 1) | 0)
  }
  return arr;
}
// 验证是否有序
function isSorted(arr){
  let max = arr[0]
  for(let i = 0 ; i<arr.length ;i++){
    if(max>arr[i+1]){
      return false;
    }
  }
  return true;
}
// copy 1:1
function copy(arr){
  let arr2 = new Array(arr.length).fill(0);
  for(let i = 0 ;i<arr.length ;i++){
    arr2[i]=arr[i]
  }
  return arr2;
}
// 大概率比较

function check(){
  let maxL= 5;
  let maxValue = 5;
  let times = 10000;
  for(let i = 0 ;i<times ;i++){
    let arr = arrBuild(maxL,maxValue);
    let sortArr= insertSort(arr);
    let copyArr= copy(arr)
    if(!isSorted(sortArr)){
      console.log('error')
      console.log(copyArr)
      return ;
    }
  }
  console.log('ok')
}

check();