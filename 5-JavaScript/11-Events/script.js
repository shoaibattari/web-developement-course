// Click Event Example
const clickButton = document.getElementById('clickButton');
const clickMessage = document.getElementById('clickMessage');

clickButton.addEventListener('click', () => {
    clickMessage.textContent = "You clicked the button!";
});

// Mouseover Event Example
const hoverBox = document.getElementById('hoverBox');
const hoverMessage = document.getElementById('hoverMessage');

hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = "lightgreen";
    hoverMessage.textContent = "You hovered over the box!";
});

hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = "lightblue";
    hoverMessage.textContent = "Hover over the box to change its color.";
});

// Keypress Event Example
const textInput = document.getElementById('textInput');
const keyMessage = document.getElementById('keyMessage');

textInput.addEventListener('input', (event) => {
    keyMessage.textContent = `You typed: ${event.target.value}`;
});