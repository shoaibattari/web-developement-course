// Example of var
var userName = "John";
console.log(userName);
userName = "Doe";
console.log(userName);

// Example of let
let age = 25;
console.log(age);
age = 30;
console.log(age);

// Example of const
const country = "USA";
console.log(country);
// Uncommenting the next line will cause an error
// country = "Canada";

// Displaying the output in the HTML
const outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
    <p><strong>Var:</strong> ${userName}</p>
    <p><strong>Let:</strong> ${age}</p>
    <p><strong>Const:</strong> ${country}</p>
`;
