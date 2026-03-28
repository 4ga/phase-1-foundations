import {add, subtract, multiply, divide } from "./math.js";

const args = process.argv.slice(2);

if(args.length !== 3){
 console.log("Usage: node index.js <operation> <number1> <number2>");
}else { 
 const operation = args[0];
 const firstNumber = Number(args[1]);
 const secondNumber = Number(args[2]);

 if(Number.isNaN(firstNumber) || Number.isNaN(secondNumber)){
  console.log("Both number1 and number2 must be valid numbers.");
 }else if(operation === "add"){
  console.log(add(firstNumber, secondNumber));
 }else if(operation === "subtract"){
  console.log(subtract(firstNumber, secondNumber));
 }else if(operation === "multiply"){
  console.log(multiply(firstNumber, secondNumber));
 }else if(operation === "divide"){
  console.log(divide(firstNumber, secondNumber));
 }else {
  console.log("Unknown operation. Use add, subtract, multiply, or divide.")
 }
}
