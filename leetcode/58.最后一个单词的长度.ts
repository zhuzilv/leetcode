function lengthOfLastWord(s: string): number {
  // 方法1 去除首尾空格后，倒叙查找空格；
//     if(s=='')return 0;
// let st=s.trim();
// return st.length-1-st.lastIndexOf(' ');
// 方法2 第一次找最后一个单词的头，第二次找单词的尾 O(n)
let len=s.length-1;
let r=len
while(s[r]==' '){
  r--;
}
let l=r;
while(s[l]!=' '&&s[l]!==undefined){
  l--;
}
return r-l;
};