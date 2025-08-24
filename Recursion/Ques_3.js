/*
1. Write a function sum(n) that calculates the sum of all numbers in an array arr using recursion. It sums from index 0 to n.
solution:  function sumOfArray(n){
                if(n===0) return arr[0];
                return arr[n] + sumOfArray(n-1); 
            }
                let arr = [5, 2, 6, 1, 3];
            console.log(sumOfArray(arr.length-1));

2. Write a function sum(n) that calculates the sum of all odd numbers in an array arr using recursion. It sums from index 0 to n.  
soltion:  function sumOfOdd(n,arr){
        if(n < 0) return 0;
            if(arr[n] % 2 != 0){
                return arr[n] + sumOfOdd(n-1,arr);
            }else{
                return sumOfOdd(n-1,arr);
                }
}

        function sumOfOdd2(n){
            let isOdd = (arr[n] % 2 != 0);
            if(n==0){ // base Case
                return isOdd ? arr[n] :0;
            }

            // if(isOdd){
            //     return arr[n] + sumOfOdd2(n-1);
            // }else{
            //     return sumOfOdd2(n-1);
            //     }
            
            return (isOdd ? arr[n] :0 ) + sumOfOdd2(n-1);

        }

let arr = [5, 2, 6, 1, 3];
console.log(sumOfOdd(arr.length - 1, arr));  // Output: 9
console.log(sumOfOdd(arr.length - 1)); 

*/