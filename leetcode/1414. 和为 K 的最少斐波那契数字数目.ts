function findMinFibonacciNumbers(k: number): number {
  //定义一个数组和次数来模拟
  let arr=[1,1];
  let num=0;
  //如果最大项大于k结束，
  while(arr[arr.length-1]<=k){
      arr.push(arr[arr.length-1]+arr[arr.length-2])
  }
  //弹出最后一个不该出现的（可优化掉）
  arr.pop();
  //然后遍历寻找，k =7 [1,1,2,3,5]
  //如果直接找到k，结束循环，找不到就减去最后离7最近的最大项
  while(true){
      if(arr.indexOf(k)!==-1){
          num++;
          break;
      }else {
  //减去最后一项，所以要处理数组后面不存在比他大的
          k=k-arr[arr.length-1];
          //处理数组
              while(arr[arr.length-1]>k){
                  arr.pop();
              }
          num++;
      }
  }
  return num;
};
