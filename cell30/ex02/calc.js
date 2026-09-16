let solveA = document.getElementById("numberA");
let solveB = document.getElementById("numberB");
let operator = document.getElementById("operator");
let form = document.getElementById("calculator");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let a = solveA.value;
  let b = solveB.value;
  let op = operator.value;
  
  let IsValidate = validate(a, op, b);
  if (IsValidate) {
    let result = calculator(a, op, b);
    console.log(result);
    alert(result);
  }
});

const validate = (a, op, b) => {
  if (a < 0 || b < 0 || isNaN(a) || isNaN(b) || !a.trim() || !b.trim()) {
    console.log("Error :(");
    alert("Error :(");
    return false;
  } else if ((op == "%" || op == "/") && parseInt(b, 10) === 0) {
    console.log("It's over 9000!");
    alert("It's over 9000!");
    return false;
  } else {
    return true;
  }
};

const calculator = (a, op, b) => {
  let numA = Number(a);
  let numB = Number(b);
  switch (op) {
    case "+":
      return numA + numB;
    case "-":
      return numA - numB;
    case "*":
      return numA * numB;
    case "/":
      return numA / numB;
    case "%":
      return numA % numB;
  }
};

setInterval(() => {
  alert("Please, use me...");
}, 30000);
