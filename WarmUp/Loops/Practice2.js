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

4. write a func that searches for an ele is an array and returns the index, if the element is not present then just return -1;
solution:  function searchEle(arr,target){
            for(let i=0;i<arr.length;i++){
                if(arr[i] == target){
                    return i;
                }
            }
            return -1;
        }

        let arr = [4,2,0,10,8,30];
        let res = searchEle(arr,4);
        console.log(res);

5. Write a function that returns the Second largest number in an array.
solution:  function findSecLargest(arr) {
    let largest = -Infinity;
    let secLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secLargest = largest;
            largest = arr[i];  
        }else if(arr[i] > secLargest && arr[i] != largest){
            secLargest = arr[i];
        }
    }
    return secLargest;
}

let arr = [4,9,0,2,8,7,1];
let result = findSecLargest(arr);
console.log("Result:", result);


6. Write a function countDigits(n)that takes an integer n and returns how many digits it contains.
solution:   function countDigits(n) {
                if (n === 0) return 1;

                n = Math.abs(n);
                let count = 0;
                while (n > 0) {
                    n = Math.floor(n / 10);
                    count++;
                }
                return count;
            }

        console.log(countDigits(259));
        
7. Write a function isPalindrome(x) that takes an integer x and returns true if it reads the same backward and forward; otherwise false.    

solution:  function isPalindrome(x) {
        if (x < 0) return false;

            let xCopy = x;
            let rev = 0;
            while (x > 0) {
                let r = x % 10;
                rev = rev * 10 + r;
                x = Math.floor(x / 10);
            }
                return rev === xCopy;
        }
            let num = 12321;
            console.log(isPalindrome(num));

8.Reverse Integer with Overflow Check
Write a function reverse(x) that takes a 32-bit signed integer and returns its digits reversed. If the reversed value overflows the 32-bit signed integer range, return 0.

solution : function reverseInteger(x) {

        let xCopy = x;
            x = Math.abs(x);
            let rev = 0;
            while (x > 0) {
                let last = x % 10;
                rev = rev * 10 + last;
                x = Math.floor(x / 10);
            }
            if (rev > 2**31 - 1) return 0;
            return xCopy < 0 ? -rev : rev;
        }
            let num = 12345;
            console.log(reverseInteger(num));

*/
    
