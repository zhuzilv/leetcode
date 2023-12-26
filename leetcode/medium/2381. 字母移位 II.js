/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
function moveChar(s,step){
  let map ='abcdefghijklmnopqrstuvwxyz'.split('');
  let index = (map.indexOf(s)+step)%26;
  if(index>=0){
      return map[index]
  }else{
      return map[index+26]
  }
}

var shiftingLetters = function (s, shifts) {
  let arr = new Array(s.length+1).fill(0)
  for (let i = 0; i < shifts.length; i++) {
      const [l, r, item] = shifts[i];
      if (item) {
          arr[l]+=1;
              arr[r+1]-=1;
      } else {
          arr[l]+=-1;
              arr[r+1]-=-1;
      }
  // console.log(arr, 'arr')
  }
  for(let i = 1;i<arr.length;i++){
      arr[i]=arr[i]+arr[i-1]
  }
  arr.pop();
  // console.log(arr, 'arr')
  let res = []
  for(let i =0;i<s.length;i++){
      // console.log(s[i],'---')
      res.push(moveChar(s[i],arr[i]))
  }
  return res.join('')
};