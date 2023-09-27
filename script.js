// Get a reference to the button element
const changeColorButton = document.getElementById("changeColorButton");

// Function to change the background color
function changeBackgroundColor() {
    const colors = ["#ff6600", "#00cc66", "#3366ff", "#ff3366", "#9933cc"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Add a click event listener to the button
changeColorButton.addEventListener("click", changeBackgroundColor);
