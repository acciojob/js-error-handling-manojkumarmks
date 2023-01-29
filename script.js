//your code here
class OutOfRangeError extends Error {
    constructor(arg) {
        super();
        this.name = "OutOfRangeError";
        this.message = `Expression should only consist of integers and +-/* characters and not <${arg}>`;
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
        // Check for invalid combinations of operators
        if (/[+\-*/]{2,}/.test(expr)) {
            throw new InvalidExprError();
        }
        // Check if expression starts with an invalid operator
        if (expr[0] === "+" || expr[0] === "-" || expr[0] === "*" || expr[0] === "/") {
            throw new SyntaxError("Expression should not start with invalid operator");
        }
        // Check if expression ends with an invalid operator
        if (expr[expr.length - 1] === "+" || expr[expr.length - 1] === "-" || expr[expr.length - 1] === "*" || expr[expr.length - 1] === "/") {
            throw new SyntaxError("Expression should not end with invalid operator");
        }
        // Check for any other non-integer, non-operator characters
        if (!/^[\d+\-*/\s]+$/.test(expr)) {
            throw new OutOfRangeError(expr);
        }
        // Evaluate the expression if all checks pass
        return eval(expr);
    } catch (err) {
        if (err instanceof OutOfRangeError || err instanceof InvalidExprError) {
            console.error(err.name + ": " + err.message);
        } else {
            console.error(err.message);
        }
    }
}
