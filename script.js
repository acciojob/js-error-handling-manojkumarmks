//your code here
class OutOfRangeError extends Error {
constructor(arg) {
  super(`Expression should only consist of integers and +-/* characters and not ${arg}`);
  this.name = "OutOfRangeError";
}
}

class InvalidExprError extends Error {
constructor() {
  super("Expression should not have an invalid combination of expression");
  this.name = "InvalidExprError";
}
}

document.getElementById("evaluate-button").addEventListener("click", function() {
try {
  let expression = document.getElementById("expression").value;
  // check if expression starts with invalid operator
  if (["+", "-", "*", "/"].includes(expression[0])) {
	throw new SyntaxError("Expression should not start with invalid operator");
  }
  // check if expression ends with invalid operator
  if (["+", "-", "*", "/"].includes(expression[expression.length - 1])) {
	throw new SyntaxError("Expression should not end with invalid operator");
  }
  // check for invalid combinations of operators
  if (/(\+\+|--|\*\*|\/\/)/.test(expression)) {
	throw new InvalidExprError();
  }
  // check if expression only contains valid characters
  if (!/^[+\-*/\d\s]+$/.test(expression)) {
	let invalidChar = expression.match(/[^+\-*/\d\s]/)[0];
	throw new OutOfRangeError(invalidChar);
  }
  // evaluate expression
  let result = eval(expression);
  document.getElementById("result").innerHTML = `Result: ${result}`;
} catch (err) {
  if (err instanceof OutOfRangeError || err instanceof InvalidExprError || err instanceof SyntaxError) {
	document.getElementById("result").innerHTML = `Error: ${err.message}`;
  } else {
	throw err;
  }
}
});