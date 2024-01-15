// hash 数学

/**
 * @param {number[][]} points
 * @return {number}
 */
 var numberOfBoomerangs = function(points) {
  let ans = 0;
  // 一个hash 遍历完后，找到大于1的value 进行AM2计算
  for(let i =0;i<points.length;i++){
      let map = new Map;
      for(let j =0;j<points.length;j++){
          let [x1,y1] = points[i];
          let [x2,y2] = points[j];
          // 两点之间距离 
          // Cmn Amn 公式可还记得
          let key = Math.pow(x1-x2,2) + Math.pow(y1-y2,2);
          map.set(key,(map.get(key)||0)+1)
      }
      console.log(map,'map')
       for (const [_, m] of map.entries()) {
           // Am2 = m *m-1
           console.log(m,'m')
          ans += m * (m - 1);
      }

  }
  return ans;
};
