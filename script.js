        // Select DOM elements
const nameInput = document.getElementById('nameInput');
const greetButton = document.getElementById('greetButton');
const greetingMessage = document.getElementById('greetingMessage');
const errorMessage = document.getElementById('errorMessage');

// Add event listener to the button
greetButton.addEventListener('click', function () {
  // Retrieve and validate input
  const name = nameInput.value.trim();

  if (name === "") {
    // Show error message if input is empty
    greetingMessage.classList.remove('show');
    greetingMessage.textContent = "";
    errorMessage.textContent = "Please enter your name.";
  } else {
    // Display greeting message
    errorMessage.textContent = "";
    greetingMessage.textContent = `Hello, ${name}! Welcome to our website!`;
    greetingMessage.classList.add('show');
  }
});
