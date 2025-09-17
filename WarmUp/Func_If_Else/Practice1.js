/*
1. Write a Program that defines a function to calculate the sum of two integers and prints the result. Call this function by passing two integer values.

solution: function sum(a,b){
            return a+b;
        }
            let value = sum(2,3);
            console.log(value);

2. Write a function that takes an integer and returns its square. Call this function and prints the result. Square(x) is a function that computes the square of a number. It returns the result instead of printing it.
solution: function square(x){
            return x*x;
        }
            let res = square(3);
            console.log(res);

3. Write a program that accepts a number (age) and checks whether the person is eligible to vote. A person is eligible if their age is 18 or more.
solution: function check(age){
            if(age>=18){
                console.log("Eligible for Voting");
            } else{
                console.log("Not Eligible for Voting");
                }
            }
        check(12);

4. Write a function that accepts a number and checks whether it is Even or Odd. If the number is divisble by 2, it’s an Even number. Otherwise, it’s an Odd number. Test the function with inputs 18 and 5.   
solutino:   function checkEvenOrOdd(num){
            if(num % 2 == 0){
                console.log("Number is Divisible by 2 its Even ");
            } else{
                console.log("Number is Not Divisible by 2 So Its Odd ");
                }
            }
        checkEvenOrOdd(18);

5. Write a function countDigits(n)that takes an integer n and returns how many digits it contains.
solution: function countDigits(n) {
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

        
*/


