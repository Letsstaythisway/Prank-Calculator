// create a function to get the value out of the btn
// add even listener to click to trigger the function
// read the value of the btn
// store all the value coming from clicking in a global variable
// create a function will take the alue for global variable and displays all the result in the display element

let strToDisplay = "";
let displayElm = document.querySelector(".display");
//select all the buttons
const btns = document.querySelectorAll(".btn");

const operators = " %/+-*";

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;

    if (val === "AC") {
      strToDisplay = "";
      display();
      return;
    }

    if (val === "=") {
      const lastChar = strToDisplay[strToDisplay.length - 1];

      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
      }

      return total();
    }

    if (val === "C") {
      strToDisplay = strToDisplay.slice(0, -1);
      return display(strToDisplay);
    }

    if (operators.includes(val)) {
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
      }
    }

    strToDisplay += val;
    display(strToDisplay);
    // console.log(strToDisplay);
  });
});

const display = (str) => {
  displayElm.innerText = str;
};

const total = () => {
  if (!strToDisplay.length) return;
  const ttl = eval(strToDisplay);
  strToDisplay = ttl.toString();
  display(ttl);
};
