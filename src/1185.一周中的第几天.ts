function dayOfTheWeek(day: number, month: number, year: number): string {
  //蔡勒（Zeller）公式：w=y+[y/4]+[c/4]-2c+[26(m+1)/10]+d-1
  const date = new Date(year, month - 1, day)
  const weekday = date.getDay()
   return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'][weekday]
};