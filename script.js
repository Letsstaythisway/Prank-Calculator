// create a function to get the value out of the btn
// add even listener to click to trigger the function
// read the value of the btn
// store all the value coming from clicking in a global variable
// create a function will take the alue for global variable and displays all the result in the display element

let strToDisplay = "";
let displayElm = document.querySelector(".display");
//select all the buttons
const btns = document.querySelectorAll(".btn");
let lastOperator = "";
const operators = " %/+-*";
const audio = new Audio("./assets/sound1.mp3");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    displayElm.style.background = "";
    displayElm.style.color = "";
    displayElm.classList.remove("prank");
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

      return displaytotal();
    }

    if (val === "C") {
      strToDisplay = strToDisplay.slice(0, -1);
      return display(strToDisplay);
    }

    if (operators.includes(val)) {
      lastOperator = val;
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
      }
    }

    if (val === ".") {
      //when there is an operator
      const indexOfLastOperator = strToDisplay.lastIndexOf(lastOperator);
      const lastNumberSet = strToDisplay.slice(indexOfLastOperator);
      console.log(indexOfLastOperator, lastNumberSet);

      if (lastNumberSet.includes(".")) return;
      //when there is no operator
      if (!lastOperator && strToDisplay.includes(".")) return;
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

  const extraVal = randomNumber();
  if (extraVal) {
    displayElm.style.background = "red";
    displayElm.style.color = "white";
    displayElm.classList.add("prank");
    audio.play();
  }
  const ttl = eval(strToDisplay) + extraVal;
  strToDisplay = ttl.toString();
  display(ttl);
};

const randomNumber = () => {
  const num = Math.round(Math.random() * 10);
  return num < 10 ? num : 0;
};

document.addEventListener("keydown", (e) => {
  const val = e.key;

  if (e.code.includes("key")) {
    console.log("it's not a number");
    return;
  }
  if (e.code.includes("Digit")) {
    console.log("it's number");
  }
});
