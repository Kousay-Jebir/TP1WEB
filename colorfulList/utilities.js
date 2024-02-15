const generateRandomColor = () => {
    // Generate random values for red, green, and blue components
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    // Construct the CSS color string
    var color = "rgb(" + red + ", " + green + ", " + blue + ")";

    return color;
};

const makeLiClickable = (li, clickHandler) => {
    li.addEventListener('click', clickHandler);
};
export { makeLiClickable, generateRandomColor };