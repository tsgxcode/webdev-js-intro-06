"use strict";

const submissionBtn = document.getElementById("submission-btn");
const evenOrOddElement = document.getElementById("even-or-odd");
const sumTheNumbersElement = document.getElementById("sum-the-numbers");
const createNumberArrayElement = document.getElementById("create-number-array");

function evenOrOdd() {
    const num = 3; // Example number
    const resultElement = document.getElementById("result"); // Reference the element

    // Check if the number is even or odd
    if (num % 2 === 0) {
        resultElement.textContent = "Even"; // Set the element's value to "Even"
    } else {
        resultElement.textContent = "Odd"; // Set the element's value to "Odd"
    }
}

function sumTheNumbers() {
    let sum = 0;

    // Loop through numbers 1 to 10 and calculate the sum
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }

    console.log(sum); // Output the sum or use it as needed
    return sum; // Return the sum if needed
}

function createNumberArray() {
    const numberArray = [];

    // Loop 10 times and add the value to numberArray
    for (let i = 1; i <= 10; i++) {
        numberArray.push(i);
    }

    console.log(numberArray); // Output the array or use it as needed
    return numberArray; // Return the array if needed
}

function render() {
    // Call the created functions
    evenOrOdd();            // Calls the function to check if a number is even or odd
    const sum = sumTheNumbers(); // Calls the function to sum numbers from 1 to 10
    const numberArray = createNumberArray(); // Calls the function to create an array of numbers 1 through 10

    // Example of logging the results or updating the DOM
    console.log("Sum of numbers:", sum);
    console.log("Number array:", numberArray);
}

submissionBtn.addEventListener("click", function () {
    render();
});
