// Creating an array
let fruits = ["Apple", "Banana", "Orange", "Mango"];

// Push() - Adds an element to the end of the array
fruits.push("Pineapple");  // ["Apple", "Banana", "Orange", "Mango", "Pineapple"]

// Pop() - Removes the last element and returns it
let poppedFruit = fruits.pop();  // "Pineapple"

// ToString() - Converts the array to a string
let fruitsString = fruits.toString();  // "Apple,Banana,Orange,Mango"

// Concat() - Joins multiple arrays and returns the result
let moreFruits = ["Grapes", "Peach"];
let allFruits = fruits.concat(moreFruits);  // ["Apple", "Banana", "Orange", "Mango", "Grapes", "Peach"]

// Unshift() - Adds an element to the beginning of the array
fruits.unshift("Strawberry");  // ["Strawberry", "Apple", "Banana", "Orange", "Mango"]

// Shift() - Removes the first element and returns it
let shiftedFruit = fruits.shift();  // "Strawberry"

// Slice() - Returns a piece of the array from startIdx to endIdx
let slicedFruits = fruits.slice(1, 3);  // ["Banana", "Orange"]

// Splice() - Changes the original array by adding, removing, or replacing elements
fruits.splice(1, 2, "Peach", "Plum");  // ["Apple", "Peach", "Plum", "Mango"]

// Rest Operator Example without function
let moreFruitsToAdd = ["Watermelon", "Kiwi", "Papaya"];

// Using the Rest Operator to Add Multiple Items to the Array
fruits = [...fruits,  ...moreFruitsToAdd];  // ["Apple", "Peach", "Plum", "Mango", "Watermelon", "Kiwi", "Papaya"]


// Displaying results in HTML
const outputDiv = document.getElementById('output');
outputDiv.innerHTML = `
    <h3>Array: ${fruits}</h3>
    <p><strong>After Push:</strong> ${fruits}</p>
    <p><strong>Element Removed by Pop:</strong> ${poppedFruit}</p>
    <p><strong>Array as String:</strong> ${fruitsString}</p>
    <p><strong>Array After Concat:</strong> ${allFruits}</p>
    <p><strong>Element Removed by Shift:</strong> ${shiftedFruit}</p>
    <p><strong>Sliced Array (1, 3):</strong> ${slicedFruits}</p>
    <p><strong>Array After Splice:</strong> ${fruits}</p>
    <p><strong>Array After Rest Operator (adding multiple items):</strong> ${fruits}</p>
`;
