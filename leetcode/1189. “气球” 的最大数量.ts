function maxNumberOfBalloons(text: string): number {
  let map=new Map();
  let arr=['a','b','l','o','n'];
  for(const item of text){
      if(arr.includes(item)){
          if(map.has(item)){
              map.set(item,map.get(item)+1);
          }else {
              map.set(item,1);
          }
      }else {
          continue;
      }

  }
  if(map.size==5){
      map.set('l',map.get('l')/2|0);
      map.set('o',map.get('o')/2|0);
  let min=map.get('a');
      map.forEach((item)=>{
         item>min?null:min=item; 
      })

      return min;
  }
  return 0;
};