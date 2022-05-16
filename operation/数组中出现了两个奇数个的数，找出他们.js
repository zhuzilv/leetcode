function findOdd2(arr){
  // 异或考察
  let eor = 0;
  for(let i = 0;i<arr.length;i++){
    eor ^= arr[i];
  }
  // eor = a^b
  // 找到 最后一个一的位置
  // let rightOne = eor&(-eor);
  let rightOne = ero & (~eor + 1)
  for(let j = 0; j<arr.length;j++){
    console.log(arr[j]&rightOne)
    if((rightOne&arr[j])===rightOne){
      return [arr[j],eor^arr[j]]
    }
  }
}
console.log(findOdd2([1,2,3,2,3,5]))