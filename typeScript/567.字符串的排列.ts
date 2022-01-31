function checkInclusion(s1: string, s2: string): boolean {
    let n=s1.length;
    let left=0;
    let right=n-1;
    let value=s1.split('').sort().toString();
        let asc=0;
        // 优化
    for(let i=0;i<n;i++){
            asc+=s1[i].charCodeAt(0);
        }
    while(right<(s2.length)){
        let content=s2.substr(left,n);
        let nums=0;
        // 优化
        for(let i=0;i<n;i++){
            nums+=content[i].charCodeAt(0);
        }
        if((nums===asc)&&content.split('').sort().toString()===value){
            return true
        }
       left++;
        right++;
    }
    return false;
};