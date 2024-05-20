#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 15000; //Dollars
let myPin = 5678;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    console.log(operationAnswer);
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            { name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        if (myBalance >= amountAnswer.amount) {
            myBalance -= amountAnswer.amount;
            console.log("your remaining balance is:" + myBalance);
        }
        else {
            console.log("Insufficient balance");
        }
    }
    else if (operationAnswer.operation === "check balance") {
        console.log("Your balance is :" + myBalance);
    }
    else if (operationAnswer.operation === "fast cash") {
        let cashAnswer = await inquirer.prompt([
            { name: "cash",
                message: "select one option",
                type: "list",
                choices: ["1000", "2000", "5000", "10000",]
            }
        ]);
        myBalance -= cashAnswer.cash;
        console.log("your remaining balance is:" + myBalance);
    }
}
else {
    console.log("Incorrect pin code!!!");
}
