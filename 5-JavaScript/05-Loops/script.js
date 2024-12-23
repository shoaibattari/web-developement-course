// For Loop Example
let forLoopResult = "";
for (let i = 0; i <= 5; i++) {
  forLoopResult += i + " "; // Concatenates numbers 0 through 5
}

// While Loop Example
let whileLoopResult = "";
let i = 0;
while (i <= 5) {
  whileLoopResult += i + " "; // Concatenates numbers 0 through 5
  i++;
}

// Do-While Loop Example
let doWhileLoopResult = "";
let j = 0;
do {
  doWhileLoopResult += j + " "; // Concatenates numbers 0 through 5
  j++;
} while (j <= 5);

// Display results in HTML
const outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
    <h3>For Loop</h3>
    <p>Numbers from For Loop: ${forLoopResult}</p>
    
    <h3>While Loop</h3>
    <p>Numbers from While Loop: ${whileLoopResult}</p>
    
    <h3>Do-While Loop</h3>
    <p>Numbers from Do-While Loop: ${doWhileLoopResult}</p>
`;
