#include "stdio.h"

int checkAdd(int arr[],int n){
  if(n==1) return 1;
  if(n==2) return arr[1]>arr[0];
  return checkAdd(arr,n-1) && arr[n-1]>arr[n-2];
}

int main(){
  int arr[3] = {1,2,3};
  printf("%d",checkAdd(arr,3));
  return 0;
}