const minusButton = document.getElementById("minus-button");
const plusButton = document.getElementById('plus-button');
const total = document.getElementById("total");
let count = 0;
const add = () => {
    total.innerHTML = count;
    count++;
}

const subtract = () =>{
    count--;
    total.textContent = count;
    if (count) {
        
    }
}

minusButton.addEventListener("click", subtract);
plusButton.addEventListener("click", add);