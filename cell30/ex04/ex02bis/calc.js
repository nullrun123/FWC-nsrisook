$("#calculator").submit(function (e) { 
  e.preventDefault();
  let a = $('#numberA').val().trim();
  let b = $('#numberB').val().trim();
  let op = $('#operator').val().trim();
  let IsValidate = validate(a, op, b);
  if (IsValidate) {
    let result = calculator(a, op, b);
    console.log(result);
    alert(result);
  }
  
});


const validate = (a, op, b) => {
  if (isNaN(a) || isNaN(b) ||   a < 0 || b < 0 || !a.trim() || !b.trim()) {
    console.log("Error :(");
    alert("Error :(");
    return false;
  } else if ((op == "%" || op == "/") && b === 0) {
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
