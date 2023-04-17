const minusButton = document.getElementById("minus-button");
const plusButton = document.getElementById('plus-button');
const total = document.getElementById("total");
let sneaker1 = document.getElementById("sneaker");
let item1 = document.getElementById("item-1");
let item2 = document.getElementById("item-2");
let item3 = document.getElementById("item-3");
let item4 = document.getElementById("item-4");
let item5 = document.getElementById("item-5")

// for the add and subtract button
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

// for the changong of the sneaker-pic
const itemPic2 = () => {
    sneaker1.src = "images/dushawn-jovic-tr6BWkWMpEs-unsplash.jpg"
}
const itemPic1 = () => {
    sneaker1.src = "images/george-catalina-1vHAP0oeUQE-unsplash.jpg"
}
const itemPic3 = () => {
    sneaker1.src = "images/giorgio-trovato-vBWm0FEdxOw-unsplash.jpg"
}
const itemPic4 = () => {
    sneaker1.src = "images/hamza-nouasria-9qyGYNJN0nI-unsplash.jpg"
    item4.style.hover
}
const itemPic5 = () => {
    sneaker1.src = "images/paul-gaudriault-a-QH9MAAVNI-unsplash.jpg"
}
item2.addEventListener("mouseover", itemPic2);
item1.addEventListener("mouseover", itemPic1);
item3.addEventListener("mouseover", itemPic3);
item4.addEventListener("mouseover", itemPic4);
item5.addEventListener("mouseover", itemPic5);
console.log(item1)