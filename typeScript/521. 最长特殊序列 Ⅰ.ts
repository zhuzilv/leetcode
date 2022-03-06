function findLUSlength(a: string, b: string): number {
  if(a===b) return -1;
  return a.length>b.length?a.length:b.length;
};