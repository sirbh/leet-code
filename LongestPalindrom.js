
const getPalindromLength = (s,f,l)=>{
   let arr=s.split('');
   while(f>=0&&l<s.length){
    if(arr[f]===arr[l]){
        f=f-1;
        l=l+1;
    }else {
        break;
    }

   }
   f++;
   l--;
   return arr.splice(f,l-f+1).reduce((a,b)=>a+b,'');

}


const LongestPalindrom = (s)=>{
    let ans='';
    for(let i = 0;i<s.length;i++){
        let x = '';
        let l1 = getPalindromLength(s,i,i);
        let l2 = getPalindromLength(s,i,i+1);
        if(l1.length>l2.length){
            x = l1
        }else{
            x = l2
        }
        if(x.length>ans.length){
            ans=x
        }
    }
    return ans
}

console.log((LongestPalindrom('a')));