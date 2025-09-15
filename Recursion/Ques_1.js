/*
1.Print numbers from n to 1 using recursion
solution:
    function print(n){
        if(n===0){
            return;
        }
        console.log(n);
        return print(n-1);
    }
    print(5);

2. Print numbers from 1 to n using recursion  
solution:  
        function pri(n){
            if(n==0) return ;
            pri(n-1);
            console.log(n);
        }  
        pri(5);
*/