var myPow = function(x, n) {
    if(n===0) return 1
    if(x===1) return 1
    if(x===-1){
        if(n%2===0){
            return 1
        } else {
            return -1
        }
    }
    if(n<0){
        x = 1/x;
    }
    let ans = 1
    for(let i = 1;i<=Math.abs(n);i++){
      ans = ans*x
    }
    return ans
};