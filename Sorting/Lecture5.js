function insertionSort(a){
    let n = arr.length;
    for(let i=1;i<n;i++){
        let curr = a[i];
        let prev = i-1;

        while(a[prev] > curr && prev >= 0){
            a[prev+1] = a[prev];
            prev--;
        }
        a[prev+1] = curr;
    }
    return arr;
}
let arr = [5,3,-8,4,2];
console.log(insertionSort(arr));