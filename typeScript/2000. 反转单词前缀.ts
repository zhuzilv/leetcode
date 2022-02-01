function reversePrefix(word: string, ch: string): string {
  //截取找到的字符串
  let str=word.substring(0,word.search(ch)+1)
  //翻转找到的字符串
  let strRe=str.split('').reverse().join('')
  //替换
  return word.replace(str,strRe)
};