// Example String
let str = "Hello, JavaScript!";

// length Method - Returns the length of the string
let length = str.length; // 18

// charAt() Method - Returns the character at the specified index
let charAtIndex = str.charAt(7); // "J"

// indexOf() Method - Returns the index of the first occurrence of a substring
let indexOfWord = str.indexOf("Java"); // 7

// slice() Method - Extracts a part of the string
let slicedStr = str.slice(0, 5); // "Hello"

// toUpperCase() Method - Converts the string to uppercase
let upperStr = str.toUpperCase(); // "HELLO, JAVASCRIPT!"

// toLowerCase() Method - Converts the string to lowercase
let lowerStr = str.toLowerCase(); // "hello, javascript!"

// String Concatenation with Template Literals
let name = "John";
let age = 25;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`; // "Hello, my name is John and I am 25 years old."

// Display results in HTML
const outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
    <h3>String: "${str}"</h3>
    <p><strong>Length:</strong> ${length}</p>
    <p><strong>Character at index 7:</strong> ${charAtIndex}</p>
    <p><strong>Index of "Java":</strong> ${indexOfWord}</p>
    <p><strong>Sliced String (0 to 5):</strong> ${slicedStr}</p>
    <p><strong>Uppercase:</strong> ${upperStr}</p>
    <p><strong>Lowercase:</strong> ${lowerStr}</p>
    <h3>String Concatenation with Template Literals:</h3>
    <p>${greeting}</p>
`;
