#include "stdio.h"

int main(){
    int arr[5][5];
    int sum = 0;
    for(int i=0;i<5;i++){
        for(int j=0;j<5;j++){
            scanf("%d",&arr[i][j]);
            if(i==j)sum+=arr[i][j];
            if(i+j==4)sum+=arr[i][j];
    }
    }
    printf("%d",sum);
    return 0;
}
// 1  2  3  4  5 
// 6  7  8  9  10
// 11 12 13 14 15
// 16 17 18 19 20
// 21 22 23 24 25
