// Function to add two numbers

const add = (a, b) => a + b;

// Function to square a number
const square = (a) => a * a;

// Function to subtract two numbers
const subtract = (a, b) => a - b;

// Function to multiply two numbers
const multiply = (a, b) => a * b;

// Function to divide two numbers
const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
};

// Function to find the maximum of two numbers
const max = (a, b) => (a > b ? a : b);

// Function to find the minimum of two numbers
const min = (a, b) => (a < b ? a : b);