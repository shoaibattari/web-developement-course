// Arithmetic Operators
let a = 10; // Updated value
let b = 5; // Updated value

let addition = a + b; // 15
let subtraction = a - b; // 5
let multiplication = a * b; // 50
let division = a / b; // 2
let modulus = a % b; // 0
let exponentiation = a ** b; // 100000

// Assignment Operators
a += b; // a is now 15
a -= b; // a is now 10
a *= b; // a is now 50
a /= b; // a is now 10
a %= b; // a is now 0
a **= b; // a is now 0 (because 0 raised to any power is 0)

// Increment and Decrement Operators
let x = 5;
++x; // x is now 6
x++; // x is now 7 but print 6 next time it is used 7
--x; // x is now 6
x--; // x is now 5 but print 6 next time it is used 5

// Logical Operators
let isAdult = true;
let hasTicket = true;
let hasID = false;

// Logical AND
let canEnter = isAdult && hasTicket; // true

// Logical OR
let mayEnter = isAdult || hasID; // true

// Logical NOT
let notAdult = !isAdult; // false

// Display results in HTML
const outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
    <h3>Arithmetic Operators</h3>
    <p>Addition: ${addition}</p>
    <p>Subtraction: ${subtraction}</p>
    <p>Multiplication: ${multiplication}</p>
    <p>Division: ${division}</p>
    <p>Modulus: ${modulus}</p>
    <p>Exponentiation: ${exponentiation}</p>
    
    <h3>Assignment Operators</h3>
    <p>Updated value of a after operations: ${a}</p>
    
    <h3>Increment and Decrement</h3>
    <p>Incremented value of x: 6</p>
    <p>Decremented value of x: 5</p>
    
    <h3>Logical Operators</h3>
    <p>Logical AND (can enter): ${canEnter}</p>
    <p>Logical OR (may enter): ${mayEnter}</p>
    <p>Logical NOT (not an adult): ${notAdult}</p>
`;
