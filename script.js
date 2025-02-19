let myname = 'Daniel'
let myNumber = 42;
let myBoolean = true;
let myArray = [1, 2, 3, 4, 5];
let myObject = { name: "Alice", age: 30 };

console.log("Value of myString:", myname, "Type of myString:", typeof myname);
console.log("Value of myNumber:", myNumber, "Type of myNumber:", typeof myNumber);
console.log("Value of myBoolean:", myBoolean, "Type of myBoolean:", typeof myBoolean);
console.log("Value of myArray:", myArray, "Type of myArray:", typeof myArray);
console.log("Value of myObject:", myObject, "Type of myObject:", typeof myObject);



// Function to perform the calculation
function calculator() {
    // Get the first number from the user
    let num1 = prompt("Enter the first number:");
    // Get the second number from the user
    let num2 = prompt("Enter the second number:");
    
    // Convert the input values to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    // Check if both inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      console.log("Invalid input. Please enter valid numbers.");
      return;
    }
  
    // Get the operation choice from the user
    let operation = prompt("Choose an operation (+, -, *, /):");
    
    // Perform the chosen operation
    let result;
    if (operation === '+') {
      result = num1 + num2;
    } else if (operation === '-') {
      result = num1 - num2;
    } else if (operation === '*') {
      result = num1 * num2;
    } else if (operation === '/') {
      // Check for division by zero
      if (num2 === 0) {
        console.log("Error: Division by zero is not allowed.");
        return;
      }
      result = num1 / num2;
    } else {
      console.log("Invalid operation. Please choose one of the following: +, -, *, /.");
      return;
    }
    
    // Display the result
    console.log("Result:", result);
  }
  
  // Call the calculator function
  calculator();

  // Change the text of the <h1> element
document.querySelector('h1').textContent = "JavaScript in Action!";

// Add a new <p> element inside the div with the id "dynamic-content"
const newParagraph = document.createElement('p');
newParagraph.textContent = "This content was added dynamically using JavaScript.";
document.getElementById('dynamic-content').appendChild(newParagraph);
