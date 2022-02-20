function isOneBitCharacter(bits: number[]): boolean {
  //O(n)
  // for(let i=0;i<=bits.length;i++){
  //     if(bits[i]===undefined)return false;
  //     if(i===(bits.length-1)&&bits[i]===0){
  //         return true
  //     }
  //      if(bits[i]===1){
  //         i++;
  //     }
  // }
  //o(1)
  let [sum,i]=[0,bits.length-2]
  while(i>=0&& bits[i]===1){
      i--;
      sum++;
  }
  return sum%2===0;
};