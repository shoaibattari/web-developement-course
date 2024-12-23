// Simple function that greets the user
function greet(name) {
  return "Hello, " + name + "!";
}
// Display the greeting message
document.getElementById("output").innerHTML +=
  "<h3>Function with Parameter Example:</h3>";
document.getElementById("output").innerHTML += greet("Shoaib");

// Function to calculate the area of a rectangle
function calculateArea(length, width) {
  return length * width;
}
let area = calculateArea(10, 5);
document.getElementById("output").innerHTML +=
  "<h3>Function with Return Value Example:</h3>";
document.getElementById("output").innerHTML += "Area of Rectangle: " + area;

// Anonymous Function Example
let add = function (a, b) {
  return a + b;
};
let sum = add(2, 3);
document.getElementById("output").innerHTML +=
  "<h3>Anonymous Function Example:</h3>";
document.getElementById("output").innerHTML += "Sum: " + sum;

// Arrow Function Example
let subtract = (a, b) => a - b;
let difference = subtract(10, 3);
document.getElementById("output").innerHTML +=
  "<h3>Arrow Function Example:</h3>";
document.getElementById("output").innerHTML += "Difference: " + difference;
