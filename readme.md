1)List the symbols for each of the below Javascript operators

    1. Arithmetic Operators  

        Addition operator is +
        Subtraction operator  is -      
        Multiplication operator is *
        Division operator is /
        Modulo operator is %
        Exponentiation operator is **
        Increment operator is ++
        Decrement Operator is --

    2. Assignment Operators  (=)

        Addition Assignment Operator  (+=)
        Subtraction Assignment operator (-=)
        Division Assignment operator  (/=)
        Multiplication Assignment operator  (*=)
        Modulo Assignment operator  (%=)
    
    3. Comparison Operators 

        Greater than (>)
        Greater than or equal to (>=)
        Less than  (<)
        Less than or equal to  (<=)
        Equality operator (===)
        Not Equals operator (!==)

    4. Logical Operators
        Logical AND (&&)
        Logical OR (||)
        Logical NOT (!)

    5.  Bitwise Operators

        AND (&)
        OR (|)
        XOR (^)
        NOT (~)

2)  For each JavaScript Operator, write 2 examples.        
    Arithmetic Operators - 

        Console.log(4*2) // output is 8
        Console.log(6-3)// output is 3
        
    Assignment Operator

        num1+=4  // same as num1 = num1 + 4
        X -=8 // same as X = x - 8

    Comparison Operator

        Let num = 5
        Console.log(num < 4) // returns false
        Console.log(num > 3) // returns true

    Logical operator

        Let html = true;
        Let css = true;
        Let webDev = html && css
        Console.log(qualified4Scholarship) // output is true

        Let webDev = html || css
        Console.log(qualified4Scholarship) // output is true

    Bitwise Operators -
        <p id="demo1"></p>

        <script>
        document.getElementById("demo1").innerHTML = 5 & 1;
        </script>    // the output will be 1

        <p id="demo"></p>
        
        <script>
        document.getElementById("demo").innerHTML = 5 | 1;
        </script>     // the output will be 5

4) What is the result when the following program is executed? 
        for (let i = 1; i <= 20;> i +=7){
            console.log(i);
        }
    The result the above program will execute is 1, 8 and 15. 
    The code executes on adding 7 to the number because i += 7
    is the same as i = i +7.  It adds 7 to 1 to get 8 then add 7 
    to 8 to get 15 and because i which is 1 is less than 20, it stops execution
