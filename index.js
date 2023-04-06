const minusButton = document.getElementById("minus-button");
const plusButton = document.getElementById('plus-button');
const total = document.getElementById("total");
const price = document.getElementById("price")
let count = 0;
let totalprice = 125;

const add = () => {
    count++;
    total.textContent = count;
}

const subtract = () =>{
    count--;
    total.textContent = count;
}

minusButton.addEventListener("click", subtract);
plusButton.addEventListener("click", add);