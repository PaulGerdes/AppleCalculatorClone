let numberOne = [];
let numberTwo = [];
let rechenwert1;
let rechenwert2;
let Plus = false;
let ergebnis;
let Minus = false;
let Rechenknopfgedrückt = false;

function addNumber(pressedNumber) {
  if (Rechenknopfgedrückt == true) {
    numberTwo.push(pressedNumber.target.innerText);
    console.log("numbertwo" + numberTwo);
    rechenwert2 = +numberTwo.join("");
    document.getElementById("result").innerHTML = rechenwert2;
  } else {
    if (Rechenknopfgedrückt == false) {
      numberTwo = [];
      numberOne = [];
    }
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
    Rechenknopfgedrückt = true;
    Plus = true;
    if (numberOne.length == 0) {
      Plus = false;
    }
  });

  document.getElementById("Minusbutton").addEventListener("click", () => {
    Rechenknopfgedrückt = true;
    Minus = true;
  });
}
// ErgebnisButton
document.getElementById("solutionbutton").addEventListener("click", () => {
  // PLus Ergebnis Button
  if (Plus == true) {
    rechenwert1 = +numberOne.join("");
    console.log(rechenwert1);
    rechenwert2 = +numberTwo.join("");
    console.log(rechenwert2);
    ergebnis = rechenwert1 + rechenwert2;
    console.log(ergebnis);
    document.getElementById("result").innerHTML = ergebnis;
    Plus = false;
    Rechenknopfgedrückt = false;
    numberTwo = [];
    numberOne = [];

    console.log(numberTwo);
    numberOne.push(ergebnis);
    for (let i = 0; i < 3; i++) {
      if (i == 2) {
        numberOne.push(numberOne);

        ergebnis = rechenwert1 + rechenwert2;
      }
    }
  }

  // minus ergebnis Button
  if (Minus == true) {
    rechenwert1 = +numberOne.join("");
    console.log(rechenwert1);
    rechenwert2 = +numberTwo.join("");
    console.log(rechenwert2);
    ergebnis = rechenwert1 - rechenwert2;
    console.log(ergebnis);
    document.getElementById("result").innerHTML = ergebnis;
    Minus = false;
    numberTwo = [];
    numberOne = [];
    Rechenknopfgedrückt = false;

    numberOne.push(ergebnis);
    for (let i = 0; i < 3; i++) {
      if (i == 2) {
        numberOne.push(numberOne);

        ergebnis = rechenwert1 + rechenwert2;
      }
    }
  }
});

// Ac Button
document.getElementById("ACButton").addEventListener("click", () => {
  console.log("ACBUTTON");
  let rechenwert1 = 0;
  let rechenwert2 = 0;
  Rechenknopfgedrückt = false;
  Minus = false;
  Plus = false;
  ergebnis = 0;
  numberTwo = [];
  numberOne = [];
  //for (let i = 0; i < numberOne.length; i++) {
  //delete numberOne[i];
  // console.log("numberOne löschen");
  //}
  document.getElementById("result").innerHTML = rechenwert1;
  document.getElementById("result").innerHTML = rechenwert2;
});
