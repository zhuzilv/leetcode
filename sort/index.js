const arr = [9, 5, 2, 7];
const exchange =  (arr,l,r)=>{
  if(l===r) return null
  arr[l]^=arr[r];
  arr[r]^=arr[l];
  arr[l]^=arr[r];
}
// 选择排序
// 9 5 2 7
// n+n-1 + ...+ 2+ 1
// O(n*n)
// function selectionSort(array){
//   for(let i = 0 ;i<array.length;i++){
//     for(let j = i+1 ;j<array.length;j++){
//       if(array[j]<array[i]){
//         exchange(array,i,j)
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
//     exchange(array,i,min)
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
//         exchange(arr,j,j+1)
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort(arr))

// 插入排序
// 9 5 2 7
// 2 5 9 7 
// 1 ~ n
// i ~ 0
function insertSort(array){
  for(let i=1;i<array.length;i++){
    for(let j=i;j>=0 && array[j-1]>array[j];j--){
        exchange(array,j-1,j)
    }
  }
  return array;
}
console.log(insertSort(arr))
// 对数器
function okSort(arr){
  return arr.sort((a,b)=>a-b)
}
console.log(okSort(arr))