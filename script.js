//const display = document.getElementById("display");
//display.innerHTML = "";
var textDisplay = "";
var value;
//screenDisplay();

function screenDisplay() {
  const display = document.getElementById("display");
  //display.innerHTML = "";
  const div = document.createElement("div");
  //div.className = "display";
  div.textContent = textDisplay;
  console.log("textDisplay", div.textContent);
  display.appendChild(div);
}

function appendToDisplay(value) {
  const display = document.getElementById("display");
  //display.innerHTML += value;
  textDisplay += value;
  const div = document.createElement("div");
  div.textContent = textDisplay;
  display.innerHTML = "";
  display.appendChild(div);

  if (textDisplay.length > 12) {
    // If the text exceeds 20 characters, clear the display
    clearDisplay();
    alert("Input exceeds 20 characters. Display cleared.");
  }
}

clearDisplay = () => {
  const display = document.getElementById("display");
  textDisplay = "";
  display.innerHTML = "";
  const div = document.createElement("div");
  div.textContent = textDisplay;
  display.appendChild(div);
};

function calculateResult() {
  const display = document.getElementById("display");
  try {
    // Evaluate the expression and update the display
    value = eval(textDisplay);
    textDisplay = value.toString();
    display.innerHTML = "";
    const div = document.createElement("div");
    div.textContent = textDisplay;
    display.appendChild(div);
  } catch (error) {
    // Handle any errors in the evaluation
    console.error("Error evaluating expression:", error);
    display.innerHTML = "Error";
  }
}

/* sample code for calculator buttons */
/*const display = document.getElementById("display");

const buttons = Array.from(document.querySelectorAll("button"));



buttons.forEach((button) => {

button.addEventListener("click", () => {

if (button.textContent === "C") {

display.value = "";

} else if (button.textContent === "=") {

try {

display.value = eval(display.value);

} catch {

display.value = "Error";

}

} else {

display.value += button.textContent;

}

});

});
*/
