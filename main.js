let display = document.getElementById("display");

let buttons = document.querySelectorAll(".button");

for (let button of buttons)
  button.addEventListener("click", (event) => {
    switch (button.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "=":
        display.innerText = eval(display.innerText);
        break;
      default:
        display.innerText += button.innerText;
    }
  });
