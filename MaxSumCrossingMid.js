const MaxSumCrossingIndex = (arr,low,mid,high)=>{
    let leftSum = arr[mid];
    let maxLeft=mid;
    let sum=0
    for(let i=mid;i>=low;i--){
       sum=sum+arr[i];
       if(sum>leftSum){
          leftSum=sum;
          maxLeft=i
       }
    }
    let righSum = arr[mid];
    let maxRight=mid+1;
    sum=0
    for(let i=mid+1;i<=high;i++){
        sum=sum+arr[i];
        if(sum>righSum){
           rightSum=sum;
           maxRight=i
        }
     }
    return [leftSum,maxLeft,righSum,maxRight]
}

let testArr = [13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,15,-4,7]

const output = MaxSumCrossingIndex(testArr,0,7,15)
console.log(output)