
// 没做出来
// 堆方法


var minStoneSum = function (piles, k) {
  heapify(piles); // 堆化
  while (k-- && piles[0] !== 1) {
      piles[0] -= Math.floor(piles[0] / 2); // 直接修改堆顶
      sink(piles, 0); // 堆化（只需要把 piles[0] 下沉）
  }
  return _.sum(piles);
};

// 原地堆化（最大堆）
// 堆化可以保证 h[0] 是堆顶元素，且 h[i] >= max(h[2*i+1], h[2*i+2])
function heapify(h) {
  // 倒着遍历，从而保证 i 的左右子树一定是堆，那么 sink(h, i) 就可以把左右子树合并成一个堆
  // 下标 >= h.length / 2 的元素是二叉树的叶子，无需下沉
  for (let i = Math.floor(h.length / 2) - 1; i >= 0; i--) {
      sink(h, i);
  }
}

// 把 h[i] 不断下沉，直到 i 的左右儿子都 <= h[i]
function sink(h, i) {
  const n = h.length;
  while (2 * i + 1 < n) {
      let j = 2 * i + 1; // i 的左儿子
      if (j + 1 < n && h[j + 1] > h[j]) { // i 的右儿子比 i 的左儿子大
          j++;
      }
      if (h[j] <= h[i]) { // 说明 i 的左右儿子都 <= h[i]，停止下沉
          break;
      }
      [h[i], h[j]] = [h[j], h[i]]; // 下沉
      i = j;
  }
}
