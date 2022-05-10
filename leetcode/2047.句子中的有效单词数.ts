var countValidWords = function (sentence) {
  return sentence.split(' ').filter(w => /^([,.!]|[a-z]+(-[a-z]+)?[,.!]?)$/.test(w)).length;
};

//要匹配完整的token：用 ^ 表示匹配到字符串起始位置，用 $ 表示匹配到字符串末尾
//token只有1个标点符号，即第一种情况 /^[,.!]$/，表示整个字符串是3个标点中任意1个
//token有字母的情况下，即第二种情况 /^[a-z]+(-[a-z]+)?[,.!]?$/，一定是1个或多个字母开头即 ^[a-z]+，后面可能有连字符 - 和字母即 (-[a-z]+)?，末尾可能有标点即 [,.!]?$

