const inputValue = document.getElementById("value");
const button = document.getElementById("btn");

let sum = 0;0
let num;

let name = prompt("Enter your name: ");

function sumN(num) {
    for (let i = 0; i <= num; i++) {
        sum = sum + i;
    }
}

document.addEventListener("submit", () => {
    num = inputValue.value;
    sumN(num);
    alert(`${name}, The sum of first ${num} natural number is ${sum}.`);
});