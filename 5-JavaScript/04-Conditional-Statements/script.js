// If Statement
let temperature = 25;
let weatherMessage = "";

if (temperature > 30) {
  weatherMessage = "It's hot outside!";
} else {
  weatherMessage = "It's not too hot outside.";
}

// If-Else Statement
let age = 20;
let votingEligibility = "";

if (age >= 18) {
  votingEligibility = "You can vote!";
} else {
  votingEligibility = "You cannot vote yet.";
}

// If-Else If-Else Statement
let score = 85;
let grade = "";

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";
}

// Display results in HTML
const outputDiv = document.getElementById("output");
outputDiv.innerHTML = `
    <h3>If Statement</h3>
    <p>${weatherMessage}</p>
    
    <h3>If-Else Statement</h3>
    <p>${votingEligibility}</p>
    
    <h3>If-Else If-Else Statement</h3>
    <p>Your grade: ${grade}</p>
`;
