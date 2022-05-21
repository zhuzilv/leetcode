function oddNumber(arr){
  let eor = 0;
  for(let i=0;i<arr.length;i++){
    eor^=arr[i];
  }
  return eor;
}


console.log(oddNumber([1,2,2,1,3]))