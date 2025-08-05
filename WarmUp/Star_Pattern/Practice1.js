/*
Pattern 1: Print nxn Star Square
Print a square pattern of stars (*) of size n x n.

Output
* * * *
* * * *
* * * *
* * * *

solution: function starSquare(){
            for(let i=0;i<n;i++){
            let row="";
                for(let j=0;j<n;j++){
                    row = row + "* ";
                }
                console.log(row); // poori line ek baar me print hogi
            }
        }
        let n=4;
        starSquare(n);

Pattern 2: Right-Angled Star Triangle
Print a right-angled triangle of stars with n rows.

Output
*
* *
* * *
* * * *
solution: function starSquare(){
            for(let i=0;i<n;i++){
            let row="";
                for(let j=0;j<=i;j++){
                    row = row + "* ";
                }
                console.log(row); // poori line ek baar me print hogi
            }
        }
        let n=4;
        starSquare(n);

*/