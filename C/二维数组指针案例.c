#include <stdio.h>


int main(){
    int a[3][4] = {0,1, 2, 3, 4, 5, 6,0,1, 2, 3, 4};
    int (*p)[4]=a;
    for(int i = 0 ;i<3;i++){
		for(int j = 0 ;j<4;j++){
			printf("%p",p+i);
			//0x7ffde86260300x7ffde86260300x7ffde86260300x7ffde8626030
			//0x7ffde86260400x7ffde86260400x7ffde86260400x7ffde8626040
			//0x7ffde86260500x7ffde86260500x7ffde86260500x7ffde8626050
			printf("%p",*(p+i));
			//0x7ffee20989d00x7ffee20989d00x7ffee20989d00x7ffee20989d0
  			//0x7ffee20989e00x7ffee20989e00x7ffee20989e00x7ffee20989e0
			//0x7ffee20989f00x7ffee20989f00x7ffee20989f00x7ffee20989f0
			printf("%p",*(p+i)+j);
			//0x7ffe0d0966400x7ffe0d0966440x7ffe0d0966480x7ffe0d09664c
			//0x7ffe0d0966500x7ffe0d0966540x7ffe0d0966580x7ffe0d09665c
			//0x7ffe0d0966600x7ffe0d0966640x7ffe0d0966680x7ffe0d09666c
			printf("%d",*(*(p+i)+j));
			//0123
			//4560
			//1234
      printf("%d",**(p+i));
      // 0000
      // 4444
      // 1111
		}
		printf("\n");
	}
    return 0;
    }