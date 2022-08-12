/**
 * @param {string} s
 * @return {string}
 */
 var reformat = function(s) {
  const numGather = [];
  const letterGather = [];
  const consequnce =[];
  for(let i of s){
      isNaN(Number(i))?letterGather.push(i):numGather.push(i);
  }
  const nLen = numGather.length;
  const lLen = letterGather.length;

  if(Math.abs((nLen)-(lLen))>1) return '';
      let a,b;
  if(nLen>lLen){
          a=numGather;
          b=letterGather;
      }else {
          b=numGather;
          a=letterGather;
      }
  for(let i =0;i<a.length;i++){
      // consequnce.push()
      if(i==a.length-1){
          consequnce.push(a[i]);

          if(nLen===lLen){
          consequnce.push(b[i]);
          }

      }else {
          consequnce.push(a[i]);
          consequnce.push(b[i]);
      }
  }
  return consequnce.join('');
};