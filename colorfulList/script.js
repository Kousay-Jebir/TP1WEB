
import { generateRandomColor, makeLiClickable } from './utilities.js'

const addItemHandler = () => {
    const newItem = document.createElement("li");
    newItem.innerHTML = `List item ${items.length + 1}`;
    newItem.style.backgroundColor = generateRandomColor();
    makeLiClickable(newItem, liClickHandler);
    olElement.appendChild(newItem);

};

const liClickHandler = (event) => {
    console.log(event.target)
    event.target.style.backgroundColor = generateRandomColor();
};


const olElement = document.querySelectorAll("ol")[0];
const addItemButton = document.querySelector("div>button");
const items = document.querySelectorAll('li');
Array.from(items).forEach((item) => { makeLiClickable(item, liClickHandler) })
addItemButton.addEventListener('click', addItemHandler);