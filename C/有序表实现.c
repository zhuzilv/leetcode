// Code file created by C Code Develop

#include "stdio.h"
#include "stdlib.h"

// 定义一个顺序表结构
typedef  struct vector {
    int *data;
    int size;
    int cap;
} vector;
// 定义一个初始化顺序表函数
// 返回vector 指针类型
vector *init_vector(int x) {
    // 定义一个指针指向顺序表
    vector *p = (vector *) malloc(sizeof(vector ));
    // 定义各项属性
    // 定义数组data
    p -> data = (int *) malloc(sizeof(int) *x);
    // 定义长度和最大
    p -> size = 0;
    p -> cap = x;
    // 返回
    return p;
}
//销毁 先销毁data，再销毁vector
void delete_vector (vector *p) {
    free(p -> data);
    free(p);
}

// 插入函数
// 参数为，结构体指针，插入位置，插入元素
int insert_ele(vector *v, int index, int x) {
    puts("insert running ");
    if(v -> size < index) return 1;
    if(v -> size == v -> cap) {
        // 扩容 realloc ，传入老地址指针和新长度
        // 最大长度*2
        v -> cap*= 2;
        // 扩容为2倍
        v -> data = (int *) realloc(v -> data, sizeof(int) * v -> cap );
    }
    for(int i = v -> size - 1; i >= index; i--) {
        v -> data[i + 1] = v -> data[i];
    }
    v -> data[index] = x;
    v -> size++;
    puts("insert ok ");
    return 0;
}
// 删除函数
int delete_ele(vector *v, int index) {
    if(v -> size <= index) {
        return 0;
    }
    for(int i = index + 1; i < v -> size; i++) {
        v -> data[i - 1] = v -> data[i];
    }
    v -> size--;
    return 0;
}
// 打印顺序表
int show_vector(vector *v) {
    printf("v->cap = %d , v->size=%d\n", v -> cap, v -> size );
    for(int i = 0 ;  i < v -> size; i++) {
        printf("%d", v -> data[i] );
    }
    puts("---------------------");
    return 0;
}
int main() {
    int n , m;
    scanf("%d%d", &n, &m );
    vector *v = init_vector(m);
    for(int i = 0 ;  i < n; i++) {
        int t;
        scanf("%d", &t );
        // 0 为插入，1为删除
        if(t == 0 ) {
            int ind, x;
            scanf("%d%d", &ind, &x);
            // 插入函数
            insert_ele(v, ind, x);
        }else{
            int ind;
            scanf("%d", &ind );
            // 删除函数
            delete_ele(v, ind);
        }
        show_vector(v);
    }
    return 0;
}