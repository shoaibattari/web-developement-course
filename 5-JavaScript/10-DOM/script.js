// Basic DOM Access: Change text content
const textElement = document.getElementById("basic-example");
const changeTextButton = document.getElementById("change-text");

changeTextButton.addEventListener("click", () => {
  textElement.textContent = "The text has been changed!";
});

// Intermediate DOM Manipulation: Add new list items
const itemList = document.getElementById("item-list");
const addItemButton = document.getElementById("add-item");
let itemCount = 3;

addItemButton.addEventListener("click", () => {
  itemCount++;
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${itemCount}`;
  itemList.appendChild(newItem);
});

// Advanced DOM Manipulation: Toggle classes
const advancedElements = document.querySelectorAll(".advanced-example");

advancedElements.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("highlight");
  });
});
