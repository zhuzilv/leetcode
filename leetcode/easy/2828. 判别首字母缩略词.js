/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
 var isAcronym = function(words, s) {
  return words.reduce((pre,cur)=>{return pre+cur[0]},'')===s
};

//  should
var isAcronym = function(words, s) {
  if (words.length != s.length) {
      return false;
  }
  for (let i = 0; i < s.length; i++) {
      if (words[i][0] != s[i]) {
          return false;
      }
  }
  return true;
};
