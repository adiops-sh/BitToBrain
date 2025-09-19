function linearSearch(arr, tar) {
    for(let i=0;i<arr.length;i++){
            if(arr[i] === tar){
                return i;
            }
    }
    return -1;
}
    let arr= [4,9,1,10,2];
    let res = linearSearch(arr,10); 
    console.log(res);
