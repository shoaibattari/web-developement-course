// Creating an object with key-value pairs
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    job: "Developer"
};

// Accessing object properties
let fullName = person.firstName + " " + person.lastName;  // Combining first and last name
let age = person.age;  // Accessing age
let job = person.job;  // Accessing job

// Updating object properties
person.age = 35;  // Changing the age
person.firstName = "Jane";  // Changing the firstName

// Adding new properties to the object
person.country = "USA";  // Adding a new property 'country'

// Displaying the updated object in HTML
document.getElementById("output").innerHTML = `
    <h3>Updated Object:</h3>
    <p><strong>Full Name:</strong> ${fullName}</p>
    <p><strong>Age:</strong> ${person.age}</p>
    <p><strong>Job:</strong> ${job}</p>
    <p><strong>Country:</strong> ${person.country}</p>
`;
