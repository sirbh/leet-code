const  MaxSumCrossingIndex = require("./MaxSumCrossingMid");

const MaxSubArray = (arr,low,high)=>{
    if(low===high){
       return [low,high,maxSum]
    }
    mid = Math.floor((low+high)/2)
    const ansLeft = MaxSubArray(arr,low,mid);
    const ansRight = MaxSubArray(arr,mid+1,high);
    const ansCross = MaxSumCrossingIndex(arr,low,mid,high);
    if(ansLeft[2]>=ansRight[2] && ansLeft[2]>=ansCross[2]){
        return ansLeft
    }
    else if(ansRight[2]>=ansLeft[2] && ansRight[2]>=ansCross[2]){
        return ansRight
    }
    else {
        return ansCross
    }
}

export default MaxSubArray
