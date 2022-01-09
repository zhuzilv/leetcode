/**
 Do not return anything, modify s in-place instead.
 */
 function reverseString(s: string[]): void {
     //reverse()
     let left = 0, right = s.length - 1;
  for(let i=0;i<s.length;i++){
      if(left>=right){
          return ;
      }
      [s[left],s[right]]=[s[right],s[left]];
      left++;
      right--;
  }
};