

#include "stdio.h"
#include "stdlib.h"


int findMax(int arr[], int l ,int r){
    if(l == r) return arr[l];
    int mid = (l&r) +((l^r)>>1);
    int leftMax = findMax(arr, l , mid );
    int rightMax = findMax(arr, mid + 1 , r );
    return leftMax > rightMax ? leftMax:rightMax;
}

int main() {
    int n=10;
    printf("数组长度为 %d",n);
    int a[10];
    while(n){
        n--;
        int b;
        scanf("%d",&b);
        a[n]=b;
    }
    printf("n - %d", n );
    int max = findMax(a, 0, 4) ;
    printf("max - %d", max );
    return 0;
}