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

Pattern 2: Right-Angled Star Triangle, Print a right-angled triangle of stars with n rows.
Output
*
* *
* * *
* * * *
solution: function starSquare(n){
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

Pattern 3: Print a Right-Angled Number Triangle
Write a program that prints a right-angled triangle of numbers of heightn.
Output
1
1 2
1 2 3
1 2 3 4
solution: function numTri(n){
            for(let i=1;i<=n;i++){
            let row="";
                for(let j=1;j<=i;j++){
                    row = row + j+" ";
                }
                console.log(row); // poori line ek baar me print hogi
            }
        }
        let n=4;
        numTri(n);

Pattern 4: Print a Right-Angled Triangle of Repeated Numbers
Write a program that prints a right-angled triangle where each row contains the same number repeated.
Output
1
2 2
3 3 3
4 4 4 4
solution:  function numTri(n){
            for(let i=1;i<=n;i++){
            let row="";
                for(let j=1;j<=i;j++){
                    row = row + i+" ";
                }
                console.log(row); // poori line ek baar me print hogi
            }
        }
        let n=4;
        numTri(n);

Pattern 5: Print a Reverse Right-Angled Triangle of Increasing Numbers
Write a program that prints a reverse right-angled triangle where each row starts from 1 and the number of elements decreases with each row.
Output
1 2 3 4
1 2 3
1 2
1  
solution:  function revNumTri(n){
            for(let i=0;i<n;i++){
            let row="";
                for(let j=1;j<=n-i;j++){
                    row = row + j+" ";
                }
                console.log(row); // poori line ek baar me print hogi
            }
        }
        let n=4;
        revNumTri(n);    

Pattern 6: Print a Right-Aligned Right-Angled Triangle of Stars
Write a program that prints a right-aligned triangle of stars increasing row by row, with leading spaces for alignment.
Output
      *
    * *
  * * *
* * * *    
solution: function Right_Aligned_Str(){
            for(let i=1;i<=n;i++){
            let row="";
            for(let sps = 1;sps<=n-i;sps++){
                row = row +"  ";
            }
                for(let j=1;j<=i;j++){
                    row = row +"* ";
                }
                console.log(row); // poori line ek baar me print hogi
            }
        }  
        let n=4;
        Right_Aligned_Str(n);

Pattern 7: Print a Right-Angled Triangle of Alternating 1s and 0s
Write a program that prints a triangle of alternating 1s and 0s starting with 1 on each row.
Output
1
1 0
1 0 1
1 0 1 0  
solution:  function Right_Aligned_Tri(){
            for(let i=0;i<n;i++){
            let row="";
            let flag = 1;
                for(let j=0;j<i+1;j++){
                    row = row + flag;
                    flag = flag === 1 ? 0 : 1;
                }
                console.log(row); // poori line ek baar me print hogi
            }
        }  
        let n=4;
        Right_Aligned_Tri(n);  
        
Pattern 8: Right-Angled Triangle of Alternating 1s and 0s (Global Toggle)
Write a program to print a triangle of alternating 1s and 0s, but the toggle continues globally across rows.

Output
1
0 1
0 1 0
1 0 1 0
solution : let n = 4;
            let toggle = 1;
            for (let i = 0; i < n; i++) {
                let row = "";
                for (let j = 0; j < i + 1; j++) {
                    row += toggle;
                    toggle = toggle === 1 ? 0 : 1;
                }
                console.log(row);
            }
*/
