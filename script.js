// Get the display element by its ID
let display = document.getElementById('display');

// Function to append a character to the display
function appendCharacter(character) {
  display.value += character;
}

// Function to clear the entire display
function clearDisplay() {
  display.value = '';
}

// Function to clear the last character from the display
function clearOneCharacter() {
  display.value = display.value.slice(0, -1); // Remove the last character
}

// Function to evaluate and display the result
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

// used event listener for keyboard input to input directly from the keyboard too
document.addEventListener('keydown', function (event) {
  const key = event.key;
  // used a switch construct for keuboard inputs
  switch (key) {
    case 'Enter':
      // Calculate result when Enter key is pressed
      calculateResult();
      break;
    case 'c':
    case 'C':
      // Clear display when 'C' or 'c' key is pressed
      clearDisplay();
      break;
    case 'Backspace':
      // Clear the last character when Backspace key is pressed
      clearOneCharacter();
      break;
    default:
      // Check if the pressed key is a valid character (0-9, +, -, *, /, .)
      if (/[\d+\-*/.]/.test(key)) {
        appendCharacter(key);
      }
      break;
  }
});
