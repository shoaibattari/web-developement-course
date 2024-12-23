// Number
let num = 42;
console.log(num);

// String
let str = "Hello, World!";
console.log(str);

// Boolean
let isActive = true;
console.log(isActive);

// Undefined
let undefinedVar;
console.log(undefinedVar);

// Null
let nullVar = null;
console.log(nullVar);

// Array
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);

// Object
let person = {
  name: "John Doe",
  age: 30,
  isEmployed: true,
};
console.log(person);

// Displaying the output in the HTML
const outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
    <p><strong>Number:</strong> ${num}</p>
    <p><strong>String:</strong> ${str}</p>
    <p><strong>Boolean:</strong> ${isActive}</p>
    <p><strong>Undefined:</strong> ${undefinedVar}</p>
    <p><strong>Null:</strong> ${nullVar}</p>
    <p><strong>Array:</strong> ${fruits.join(", ")}</p>
    <p><strong>Object:</strong> Name: ${person.name}, Age: ${
  person.age
}, Employed: ${person.isEmployed}</p>
`;
