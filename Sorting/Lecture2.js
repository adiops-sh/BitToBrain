function binarySearch(arr,tar){
        let left = 0;
        let right = arr.length-1;

        while(left <= right){
            let mid = Math.floor((left+ right)/2);
            if(arr[mid]=== tar ){
                return mid;
            }else if(mid < tar){
                left = mid+1;
            }else{
                right = mid-1;
            }
            return -1;
        }

}
    let arr= [11,12,13,14,15,16,17,18,19];
    let target = 15;
    console.log(binarySearch(arr,target)); 
