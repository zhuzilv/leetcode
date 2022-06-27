#include <stdio.h>
#include <stdlib.h>
#include <string.h>
// 数组中未出现的最小正整数
// 标记数组，遍历一次，存入每个值的状态对应下标
// instance ： 2 2 3 4
// 存入 标记数组 0 0 0 0, 因为 2 2 3 4 出现，存入 0 1 1 1
// 最后因为1 没有出现，所以 返回1
// tc:O(n)
// sc:O(n)

//传入数组和长度，直接返回结果
int markArr(int a[],int n){
  int *p=(int *)malloc(sizeof(int)*n);
  // 把p中的每个位都置为0
  memset(p,0,sizeof(int)*n);
  for(int i = 0 ; i<n;i++){
    if(a[i]>=1&&a[i]<=n){
      p[a[i]-1]=1;
    };
  }
  int index=n+1;
  for(int j = 0 ;j <n;j++){
    if(p[j]==0){
      index=j+1;
      break;
    };
  }
  //打印两个数组
  for(int h=0;h<n;h++){
   printf("%d ",a[h]);
  }
  printf("\n");
   for(int h=0;h<n;h++){
   printf("%d ",p[h]);
  }
  printf("\n");
  return index;
}


int main(){
  //advanced
  int a[]={2,3,4,1,10};
  int result=markArr(a,5);
  printf("console is %d",result);
  // 静态憨憨实现方法
  // int arr[4] = {2,2,3,4};
  // int arr2[4] ={0};
  // int n =4;
  // for(int i=0;i<n;i++){
  //   if(arr[i]>=0&&arr[i]<=n){
  //     arr2[arr[i]-1]=1;
  //   }
  // }
  // int num=n+1;
  // for(int j=0;j<n;j++){
  //   if(arr2[j]==0) num=j+1; break;
  // }
  // printf("console is %d\n",num);
  // // 输出两个数组
  // for(int h=0;h<n;h++){
  //  printf("%d ",arr[h]);
  // }
  // printf("\n");
  //  for(int h=0;h<n;h++){
  //  printf("%d ",arr2[h]);
  // }
  return 0;
}