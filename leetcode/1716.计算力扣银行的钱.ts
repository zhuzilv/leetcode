function totalMoney(n: number): number {
  if(n<7){
      return n/2*(1+n)
  }
//有几个7
let haveWeek=n/7|0;  3
let remainder=n%7;   5
let noRemainder=haveWeek*28+(haveWeek*(haveWeek-1)/2*7)
if(n%7===0){
  return noRemainder;
}else {
 return  (noRemainder+(remainder/2*(1+remainder+haveWeek*2)))
}
// 等差数列通项
// n*（n-1）/2 已知首项和末项；
// na1 +n*（n-1）/2 *d

};
function totalMoneyMath(n: number): number {
  let week=n/7|0; 
  let remainder=n%7;  
  let noRe=week*28+week*(week-1)/2*7
if(n%7===0){
    return noRe;
    }else {
        return noRe+(week+1)*remainder+remainder*(remainder-1)/2;
    }
};