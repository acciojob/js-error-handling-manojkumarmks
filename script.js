//your code here
class OutOfRangeError extends Error {
  constructor(arg) {
    super();
    this.name = "OutOfRangeError";
    this.message = `Expression should only consist of integers and +-/* characters and not ${arg}`;
  }
}

class InvalidExprError extends Error {
  constructor() {
    super();
    this.name = "InvalidExprError";
    this.message = "Expression should not have an invalid combination of expression";
  }
}

function evalString() {
  try {
    const expression = document.getElementById("expression").value;

    // check for invalid operator combinations
    if (/[+\-*/]{2,}/.test(expression)) {
      throw new InvalidExprError();
    }

    // check if expression starts with invalid operator
    if (/^[+*/-]/.test(expression)) {
      throw new SyntaxError("Expression should not start with invalid operator");
    }

    // check if expression ends with invalid operator
    if (/[+\-*/]$/.test(expression)) {
      throw new SyntaxError("Expression should not end with invalid operator");
    }

    // check for any invalid characters
    if (!/^[\d\s+\-*/]*$/.test(expression)) {
      throw new OutOfRangeError(expression.match(/[^\d\s+\-*/]/g));
    }

    // evaluate expression
    const result = eval(expression);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
