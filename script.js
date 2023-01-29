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

function evalString(expr) {
  try {
    // check for invalid combinations of operators
    if (/[+\-*/]{2,}/.test(expr)) {
      throw new InvalidExprError();
    }

    // check if expression starts with invalid operator
    if (/^[+*/-]/.test(expr)) {
      throw new SyntaxError("Expression should not start with invalid operator");
    }

    // check if expression ends with invalid operator
    if (/[+\-*/]$/.test(expr)) {
      throw new SyntaxError("Expression should not end with invalid operator");
    }

    // check if expression contains anything other than integers and +-/*
    if (!/^[\d\s+\-*/]+$/.test(expr)) {
      let invalidChar = expr.match(/[^\d\s+\-*/]/)[0];
      throw new OutOfRangeError(invalidChar);
    }

    // evaluate the expression
    return eval(expr);
  } catch (err) {
    console.error(err.name + ": " + err.message);
  }
}
