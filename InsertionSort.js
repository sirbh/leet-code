const InsertionSort = (arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=i;j>0;j--){
            if(arr[j]<arr[j-1]){
                let key = arr[j];
                arr[j]=arr[j-1]
                arr[j-1]=key
            }else{
                break;
            }
        }
    }
    return arr
}
console.log(InsertionSort([3,2,1,1,2,12,34,34,1,4,5,3,21,4,0]))