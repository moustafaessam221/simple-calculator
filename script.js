// buttons functions

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "clear") {
      display.innerText = "0";
    } else if (e.target.id === "backspace") {
      display.innerText = display.innerText.slice(0, -1);
      if (display.innerText === "") {
        display.innerText = "0";
      }
    } else if (display.innerText === "0") {
      display.innerText = e.target.innerText;
    } else if (e.target.id === "add") {
      display.innerText += ` + `;
    } else if (e.target.id === "subtract") {
      display.innerText += ` - `;
    } else if (e.target.id === "multiply") {
      display.innerText += ` * `;
    } else if (e.target.id === "divide") {
      display.innerText += ` / `;
    } else if (e.target.id === "equals") {
      display.innerText = eval(display.innerText);
    } else {
      display.innerText += e.target.innerText;
    }
  });
});
// function for result

// function for backspace
