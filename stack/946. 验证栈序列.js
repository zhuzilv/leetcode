/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function(pushed, popped) {
  //  用栈模拟进出行为，
  // 实时检测模拟栈顶和poped低
  // 循环删除
 const stack = [];
 let n = pushed.length;
 // 固定n次
 for(let i =0;i<n;i++){
     // 固定推入元素
     stack.push(pushed[i]);
     // 检测自定义栈顶和poped顶
     while(stack.length&&stack[stack.length-1]==popped[0]){
         // 删stack顶，和poped底
         stack.pop();
         popped.shift();
     }
 }
 
 return stack.length===0;
};