/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
 var closeStrings = function(word1, word2) {
  if (word1.length !== word2.length) return false
  const map = new Map
  for (const w of word1) {
      map.set(w, (map.get(w) || 0) + 1)
  }

  const map2 = new Map
  for (const w of word2) {
      if (!map.has(w)) return false
      map2.set(w, (map2.get(w) || 0) + 1)
  }
  const r1 = []
  const r2 = []
  for (const [k, v] of map) {
      r1.push(v)
      if (!map2.has(k)) return false
      r2.push(map2.get(k))
  }
  return r1.sort((a, b) => a - b).join('') === r2.sort((a, b) => a - b).join('')
};