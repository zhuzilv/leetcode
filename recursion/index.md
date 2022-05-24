# 递归

## 系统过程每遇到执行函数，保留当前信息压入系统栈


## 逻辑过程
``` let arr = [ 2, 6, 7 ,9];
// l-> 2,6 r->7,9
// l 2 r 6 
// l -> 6 r-> 7,9
// l->6 r->9
// 9
```

# master 公式
## 子问题规模一致，可用master公式

## T(N) = a * T(N/b) + O(N^d)   a,b,d 常数
## logb(a) < d =>  O(n^d)
## logb(a) > d =>  O(n^logb(a))
## logb(a) == d =>  O(n^d*logN)

找数组中最大值举例

T(N) = T(n/2) *2 +O(1);   a=2,b=2,d=0;   logb(a) =1    1>0= O(n^logb(a))=O(n);


