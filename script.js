const numberOne = [];
const numberTwo = [];
let rechenwert1;
let rechenwert2;
let Plus = false;
let ergebnis;

// const numberbuttons = [{id:"number1"},{id:"number2"},{id:"number3"},{id:"number4"},{id:"number5"},{id:"number6"},{id:"number7"},{id:"number8"},{id:"number9"},]
function addNumber(pressedNumber) {
  if (Plus == true) {
    numberTwo.push(pressedNumber.target.innerText);
    console.log("numbertwo" + numberTwo);
    rechenwert2 = +numberTwo.join("");
    document.getElementById("result").innerHTML = rechenwert2;
  } else {
    numberOne.push(pressedNumber.target.innerText);
    console.log(pressedNumber.target.innerText);
    console.log("numberone" + numberOne);
    rechenwert1 = +numberOne.join("");
    document.getElementById("result").innerHTML = rechenwert1;
  }
}
for (let i = 0; i <= 9; i++) {
  document.getElementById("number" + i).addEventListener("click", addNumber);
  document.getElementById("plusbutton").addEventListener("click", () => {
    Plus = true;
  });
}
document.getElementById("solutionbutton").addEventListener("click", () => {
  rechenwert1 = +numberOne.join("");
  console.log(rechenwert1);
  rechenwert2 = +numberTwo.join("");
  console.log(rechenwert2);
  ergebnis = rechenwert1 + rechenwert2;
  console.log(ergebnis);
  document.getElementById("result").innerHTML = ergebnis;
});
