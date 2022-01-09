function slowestKey(releaseTimes: number[], keysPressed: string): string {
  let max=releaseTimes[0];
  let index=keysPressed[0];
  let n=releaseTimes.length;
  for(let i=1;i<n;i++){
      let value=releaseTimes[i]-releaseTimes[i-1];
      if(value>max||keysPressed[i]>index&&value===max){
          max=value;
          index=keysPressed[i];
      }
}
  return index;
}
// function slowestKeyMap(releaseTimes: number[], keysPressed: string): string {
//     let max=releaseTimes[0];
//     let index=keysPressed[0];
//     let map={[keysPressed[0]]:releaseTimes[0]};
//     for(let i=1;i<releaseTimes.length;i++){
//         if(map.hasOwnProperty(keysPressed[i])){
//             map[keysPressed[i]]=map[keysPressed[i]]+releaseTimes[i]-releaseTimes[i-1]
//         }else {
//             map[keysPressed[i]]=releaseTimes[i]-releaseTimes[i-1]
//         }
//         if(max<map[keysPressed[i]]){
//             max=map[keysPressed[i]]
//             index=keysPressed[i];
//         }else if(max==map[keysPressed[i]]){
//             if(keysPressed[i]>index){
//             index=keysPressed[i];
//             }
//         }
// }
//     return index;
// }