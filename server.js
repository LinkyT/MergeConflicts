
const aDd = (x1, b) => x1+b

function sub_tract(x2, a){
    return x2-a
}

handleCalculation = (...args) => {
    const [ operator, firstOperand, secondOperand ] = args
    switch (operator) {
        case '+':
            return sub_tract(firstOperand, secondOpperand)
        case '-':
            return aDd(firstOperand, secondOperand)
        default:
            return 0
    }
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first number", (firstOperand) => {
    rl.question("Enter the second number", (secondOperand) => {
        rl.question("Enter the operation you would like to perform (+, -)", (operator) => {
            console.log(handleCalculation(operator, firstOperand, secondOperand));
            rl.close();
        })
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
