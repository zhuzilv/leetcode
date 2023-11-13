// 快排
// 学习来源： 左神

// 其他参考：
// https://zhuanlan.zhihu.com/p/363421644


// 交换排序， 所以先实现swap
const swap = (arr,i,j)=>{
  [arr[i],arr[j]]=[arr[j],arr[i]];
  // 数字可用
  // if(i!==j){
  //   arr[i]^=arr[j];
  //   arr[j]^=arr[i];
  //   arr[i]^=arr[j];
  // }
}
const printArr = (arr,l,r)=>{
  let a = [];
  while(l<=r){
    a.push(arr[l++])
  }
  console.log(a,'print')
  return a;
}
// 第一步
// splitNumber 实现
// 输入一个数组，以结尾为基准值， 小于等于基准值的放左侧，大于放右侧
// eg： [7,2,3,6,1,8,9,5]=> [2,3,1,5 , 7，6，8，9]
let arr = [7,2,3,6,1,8,9,5];
function splitNumber (arr){
  // 取末位为基准值
  let value = arr[arr.length-1]
  // 定义左侧起始范围
  let left = -1;
  // 定义滑动指针
  let index = 0;
  while(index<arr.length){
    if(arr[index]<=value){
      // 小于等于基准值
      swap(arr,index,++left);

    }else {
      index++;
    }
  }
  //[7,2,3,6,1,8,9,5]  =>  [2, 3, 1, 5, 7, 8, 9, 6]
  // 2,3,1,5 被移入左侧，7，8，9，6 被交换到右侧
  // 接下来实现升级版，可以将相等的数放在中间
}
// console.log(splitNumber(arr),arr)

// 第二步
// 和splitNumber 的区别在于，要区分相同的值
// 将小于基准值的数放左侧，等于基准值的数放中间，大于基准值的数放右侧
// 比一代多一个指针，来记录右侧大于值的位置
// |[5,7,2,3,5,5,6,1,8,9,\5]  => [2,3,1, 5,5,5,5 ,7,6,8,9]

let arr2 = [5,7,2,3,5,5,6,1,8,9,5];

function splitNumber2(arr){
  let value = arr[arr.length-1];
  let [ index,left,right] = [0,-1,arr.length-1];
  while(index<=right){
    if(arr[index]<value){
      swap(arr,index++,++left);
    }else if(arr[index]>value){
      swap(arr,--right,index);
    }else {
      index++;
    }
  }
  swap(arr,right,arr.length-1)
}
// console.log(splitNumber2(arr2),arr2)

// 第三步 ，实现partition 分层函数，同splitNumber2行为，但需要控制参数
// partition(arr,l,r) 在l到r 的范围内排好 < = >
// eg [5,7,2,3,5,5,6,1,8,9,5],4,10 => [5, 7, 2, 3, 1, 5, 5, 5, 6, 9, 8]


function partition(arr,L,R){
  let value = arr[R];
  let [ index,left,right] = [L,L-1,R];
  while(index<right){
    if(arr[index]<value){
      swap(arr,index++,++left);
    }else if(arr[index]>value){
      swap(arr,--right,index);
    }else {
      index++;
    }
  }
  swap(arr,right,R)
  return [left+1,right]
}
// 定义快排函数
function quickSort(arr){
  return process(arr,0,arr.length-1);
}

// 递归处理
function process(arr,l,r){
  if(l>=r){
    return ;
  }
  console.log('no sort',arr,l,r)
  let [left,right]=  partition(arr,l,r);
  console.log(arr,left,right)
  process(arr,l,left-1);
  process(arr,right+1,r);
}
quickSort(arr2)
console.log(arr2);