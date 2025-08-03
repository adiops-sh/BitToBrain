/*
1. Write a function that returns the number of negative numbers in an array.
solution: function countNeg(arr){
            let count =0;
            for(let i=0;i<arr.length;i++){
                    if(arr[i] < 0){
                        count++;
                    }
            }
                    return count;
        }

        let arr = [2, -6, 4, 8, 1, -9];
        let res = countNeg(arr);
        console.log(res);

2. Write a function that returns the smallest number in an array.
solution: function findSmallest(arr) {
    let smallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

let arr = [2, -6, 4, 8, 1, -9];
let result = findSmallest(arr);
console.log("Result:", result); 

3. Write a function that returns the largest number in an array.
solution: function findLargest(arr) {
    let largest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

let arr = [2, -6, 4, 8, 1, -9];
let result = findLargest(arr);
console.log("Result:", result);

*/
