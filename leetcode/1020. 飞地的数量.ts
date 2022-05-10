function numEnclaves(grid: number[][]): number {
  //递归查找上右下左为1的数变为0
let find4=(i,j)=>{
      grid[i][j]=0;
      if(grid[i-1]&&grid[i-1][j]===1) find4(i-1,j)
      if(grid[i]&&grid[i][j+1]===1) find4(i,j+1)
      if(grid[i+1]&&grid[i+1][j]===1) find4(i+1,j)
      if(grid[i]&&grid[i][j-1]===1) find4(i,j-1)
}
// 行长度 和列长度
const rowLen=grid.length
const colLen=grid[0].length
//遍历外层
for(let i=0;i<rowLen;i++){
  //item 数组
  for(let j=0;j<colLen;j++){
      // 只遍历边缘 
     if(i>0&&i<rowLen-1&&j>0&&j<colLen-1){
         continue;
     }
      // 递归把边缘能连接的全变为1
      if(grid[i][j]===1){
          find4(i,j)
      }
  }
}
// 扁平化，累加，因为1的个数就是累加个数
return grid.flat().reduce((c,p)=>c+p)
};