function reverseOnlyLetters(a: string): string {
  //先转数组
  let s=a.split('');
  //建立map
  let map=new Map();
  //定义数组删除补位
  let z=0;
  //循环依次将数组中的非字母位存成hash
  for(let i=0;i<s.length;i++){
      console.log(s[i],i,'si')
      if(!(/[a-zA-Z]/.test(s[i]))){
          map.set(i+z,s[i]);
          s.splice(i,1)
          i--;
          z++;
      }
  }
  //剩余的字母位倒置
  s.reverse();
  let j=0;
  //根据hash将位置和对应的值插入
  while(map.size>0){
      if(map.has(j)){
          s.splice(j,0,map.get(j));
          map.delete(j);
      }
      j++;
  }
  return s.join('');
};