import {add, subtract, multiply, divide } from "./math.js";

const args = process.argv.slice(2);

const operation = args[0];
const firstNumber = Number(args[1]);
const secondNumber = Number(args[2]);

if(operation === "add"){
 console.log(add(firstNumber, secondNumber));
}else if(operation === "subtract"){
 console.log(subtract(firstNumber, secondNumber));
}else if(operation === "multiply"){
 console.log(multiply(firstNumber, secondNumber));
}else if(operation === "divide"){
 console.log(divide(firstNumber, secondNumber));
}
