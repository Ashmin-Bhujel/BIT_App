// Selecting elements
const inputValue = document.getElementById("value");
const button = document.getElementById("btn");

// Variables
let sum = 0;
let num;

// Function Definition
function sumN(num) {
    for (let i = 0; i <= num; i++) {
        sum = sum + i;
    }
}

// Event Listener
document.addEventListener("submit", () => {
    num = inputValue.value;
    sumN(num);
    alert(`The sum of first ${num} natural number is ${sum}.`);
});