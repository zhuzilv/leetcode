/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
 var firstCompleteIndex = function (arr, mat) {
  const hash = new Map;
  const n = mat[0].length, m = mat.length;
  // deal arr mat
  for (let item = 0; item < mat.length; item++) {
      for (let i = 0; i < mat[item].length; i++) {
          hash.set(mat[item][i],[i,item])
      }
  }
  let row= Array(n).fill(0),column = Array(m).fill(0);
  for(let i in arr){
     const [r,c] =  hash.get(arr[i]);
     row[r]++;
     column[c]++;
     // 行对列长度，列对行长度
     if(row[r]===m||column[c]===n){
         return i;
     }
  }
  return 0;
};