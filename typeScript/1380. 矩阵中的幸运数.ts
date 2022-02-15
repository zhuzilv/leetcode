function luckyNumbers (matrix: number[][]): number[] {
  //O(m*m*n)
  let arr=[];
label:
for(const item of matrix){
  let [minIndex,max]=[0,0];
label2:
for(let i=1;i<item.length;i++){
  if(item[i]<item[minIndex]){
      minIndex=i;
  }
}
label3:
for(let j=0;j<matrix.length;j++){
  if(matrix[j][minIndex]>max){
      max=matrix[j][minIndex];
  }
}
if(item[minIndex]===max){
  arr.push(item[minIndex])
}
}
return arr;
};