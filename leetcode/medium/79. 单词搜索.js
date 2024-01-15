var wordPuzzle = function(board, word) {
  // 高和宽
  const h = board.length, w = board[0].length;
  // 上下左右 定义方式
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  // 访问过的数组
  const visited = new Array(h);
  // 访问过的数组
  // h * w  = false
  for (let i = 0; i < visited.length; ++i) {
      visited[i] = new Array(w).fill(false);
  }
  // i j s k
  // 行 列坐标 原字符串 字符串下标
  const check = (i, j, s, k) => {
      // 不等于当前字符串则返回false
      if (board[i][j] != s.charAt(k)) {
          return false;
          // k已经走完，标准结束条件 返回true
      } else if (k == s.length - 1) {
          return true;
      }
      // 记录访问数组
      visited[i][j] = true;
      // 定义结果为false，若匹配成功再修改
      let result = false;
      // 上下左右遍历递归
      for (const [dx, dy] of directions) {
          let newi = i + dx, newj = j + dy;
          // 新位置存在且没越界
          if (newi >= 0 && newi < h && newj >= 0 && newj < w) {
              // 如果新位置为访问过
              if (!visited[newi][newj]) {
                  // 递归拿结果
                  const flag = check(newi, newj, s, k + 1);
                  // flag 为true 时， 从底层返true，
                  if (flag) {
                      result = true;
                      // 终止剩余for
                      break;
                  }
              }
          }
      }
      // 没懂
      visited[i][j] = false;
  console.log(visited,'vvvv')
      return result;
  }
  // 二维数组遍历
  for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
          // 获取返回值
          const flag = check(i, j, word, 0);
          if (flag) {
              return true;
          }
      }
  }
  return false;
};
