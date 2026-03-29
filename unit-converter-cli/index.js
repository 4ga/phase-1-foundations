import {kilometersToMiles, milesToKilometers} from "./convert.js"

const args = process.argv.slice(2);

if(args.length !== 2){
 console.log("Usage: node index.js <conversion-type> <value>");
}
else {
const conversionType = args[0];
const value = Number(args[1]);

if(Number.isNaN(value)) {
 console.log("Value must be a valid number.");
}else if(conversionType === "km-to-miles"){
 console.log(kilometersToMiles(value));
}else if(conversionType === "miles-to-km") {
 console.log(milesToKilometers(value));
}else{
 console.log("Unknown conversion. Use km-to-miles or miles-to-km.");
}
}
