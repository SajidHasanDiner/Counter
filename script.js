
var counterElement = document.getElementById('counter');


var i = 0;

// Function to increase the counter
function increase() {
  i++;
  updateCounter();
}

// Function to decrease the counter
function decrease() {
  i--;
  updateCounter();
}

// Function to reset the counter
function reset() {
  i = 0;
  updateCounter();
}

// Function to update the counter element with the current value
function updateCounter() {
  counterElement.textContent = i;
}

// click event listeners to buttons
document.getElementById('increaseBtn').addEventListener('click', increase);
document.getElementById('decreaseBtn').addEventListener('click', decrease);
document.getElementById('resetBtn').addEventListener('click', reset);

// Initial update of the counter
updateCounter();
